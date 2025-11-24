import express from 'express';
import morgan from 'morgan';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import cors from 'cors';
import db, { initSchema } from './db.js';
import { requireAuth, requireRole } from './middleware.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '2mb'}));
app.use(morgan('dev'));
app.use(express.static('public'));

function now(){ return Date.now(); }
function sign(user){
  return jwt.sign({ id:user.id, email:user.email, role:user.role, name:user.name }, process.env.JWT_SECRET, { expiresIn: '7d' });
}

/* Init DB or seed admin */
if (process.argv.includes('--init')) {
  initSchema();
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@karibo.mg';
  const adminPass  = process.env.ADMIN_PASS  || 'Admin123!';
  const exists = db.prepare('SELECT id FROM users WHERE email=?').get(adminEmail);
  if (!exists) {
    const passhash = bcrypt.hashSync(adminPass, 10);
    db.prepare('INSERT INTO users (name,email,passhash,role,created_at) VALUES (?,?,?,?,?)')
      .run('Admin', adminEmail, passhash, 'admin', now());
    console.log('Admin seed:', adminEmail, adminPass);
  }
  console.log('DB ready'); process.exit(0);
}

/* ========== AUTH ========== */
app.post('/api/auth/register', (req,res)=>{
  const {name, email, password} = req.body;
  if(!email || !password) return res.status(400).json({error:'email & password required'});
  const passhash = bcrypt.hashSync(password, 10);
  try{
    const info = db.prepare('INSERT INTO users (name,email,passhash,role,created_at) VALUES (?,?,?,?,?)')
      .run(name||'', email, passhash, 'contrib', now());
    const user = {id:info.lastInsertRowid, name, email, role:'contrib'};
    res.json({token:sign(user), user});
  }catch(e){ res.status(409).json({error:'email exists'}); }
});

app.post('/api/auth/login', (req,res)=>{
  const {email, password} = req.body;
  const u = db.prepare('SELECT * FROM users WHERE email=?').get(email||'');
  if(!u || !bcrypt.compareSync(password||'', u.passhash)) return res.status(401).json({error:'invalid'});
  res.json({token:sign(u), user:{id:u.id,name:u.name,email:u.email,role:u.role}});
});

app.get('/api/auth/me', requireAuth, (req,res)=>{ res.json({user:req.user}); });

/* ========== CONTENTS CRUD ========== */
app.get('/api/contents', (req,res)=>{
  const {type='', q=''} = req.query;
  let sql = 'SELECT id,type,title_fr,title_mg,title_en,substr(body_fr,1,400) as body_fr,substr(body_mg,1,400) as body_mg,substr(body_en,1,400) as body_en,tags_json,published,created_by,created_at,updated_at FROM contents WHERE 1=1';
  const params=[];
  if(type) { sql+=' AND type=?'; params.push(type); }
  if(q) { sql+=' AND (title_fr LIKE ? OR title_mg LIKE ? OR title_en LIKE ? OR body_fr LIKE ? OR body_mg LIKE ? OR body_en LIKE ?)';
    params.push(`%${q}%`,`%${q}%`,`%${q}%`,`%${q}%`,`%${q}%`,`%${q}%`);
  }
  sql+=' ORDER BY created_at DESC LIMIT 200';
  res.json(db.prepare(sql).all(...params));
});

app.get('/api/contents/:id', (req,res)=>{
  const c = db.prepare('SELECT * FROM contents WHERE id=?').get(req.params.id);
  if(!c) return res.status(404).json({error:'not found'}); res.json(c);
});

app.post('/api/contents', requireAuth, requireRole('contrib','karibo','admin'), (req,res)=>{
  const c = req.body;
  const info = db.prepare(`INSERT INTO contents
    (type,title_fr,title_mg,title_en,body_fr,body_mg,body_en,tags_json,published,created_by,created_at,updated_at)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`)
    .run(c.type, c.title_fr, c.title_mg, c.title_en, c.body_fr, c.body_mg, c.body_en, JSON.stringify(c.tags||[]), c.published?1:0, req.user.id, now(), now());
  res.json({id:info.lastInsertRowid});
});

app.put('/api/contents/:id', requireAuth, (req,res)=>{
  const existing = db.prepare('SELECT * FROM contents WHERE id=?').get(req.params.id);
  if(!existing) return res.status(404).json({error:'not found'});
  if(req.user.role!=='admin' && existing.created_by!==req.user.id) return res.status(403).json({error:'forbidden'});
  const c = req.body;
  db.prepare(`UPDATE contents SET
    type=?, title_fr=?, title_mg=?, title_en=?, body_fr=?, body_mg=?, body_en=?, tags_json=?, published=?, updated_at=?
    WHERE id=?`)
    .run(c.type, c.title_fr, c.title_mg, c.title_en, c.body_fr, c.body_mg, c.body_en, JSON.stringify(c.tags||[]), c.published?1:0, now(), req.params.id);
  res.json({ok:true});
});

app.delete('/api/contents/:id', requireAuth, requireRole('admin'), (req,res)=>{
  db.prepare('DELETE FROM contents WHERE id=?').run(req.params.id);
  res.json({ok:true});
});

/* ========== ANNOUNCEMENTS (Karibo/Admin) ========== */
app.get('/api/announcements', (req,res)=>{
  const nowTs = now();
  const rows = db.prepare('SELECT * FROM announcements WHERE (starts_at IS NULL OR starts_at<=?) AND (ends_at IS NULL OR ends_at>=?) ORDER BY pinned DESC, created_at DESC').all(nowTs, nowTs);
  res.json(rows);
});
app.post('/api/announcements', requireAuth, requireRole('karibo','admin'), (req,res)=>{
  const a = req.body;
  const info = db.prepare(`INSERT INTO announcements
    (title_fr,title_mg,title_en,body_fr,body_mg,body_en,pinned,starts_at,ends_at,created_by,created_at)
    VALUES (?,?,?,?,?,?,?,?,?,?,?)`)
    .run(a.title_fr||'', a.title_mg||'', a.title_en||'', a.body_fr||'', a.body_mg||'', a.body_en||'', a.pinned?1:0, a.starts_at||null, a.ends_at||null, req.user.id, now());
  res.json({id:info.lastInsertRowid});
});
app.put('/api/announcements/:id', requireAuth, requireRole('karibo','admin'), (req,res)=>{
  const a = req.body;
  db.prepare(`UPDATE announcements SET
    title_fr=?, title_mg=?, title_en=?, body_fr=?, body_mg=?, body_en=?, pinned=?, starts_at=?, ends_at=?
    WHERE id=?`)
    .run(a.title_fr||'', a.title_mg||'', a.title_en||'', a.body_fr||'', a.body_mg||'', a.body_en||'', a.pinned?1:0, a.starts_at||null, a.ends_at||null, req.params.id);
  res.json({ok:true});
});
app.delete('/api/announcements/:id', requireAuth, requireRole('admin'), (req,res)=>{
  db.prepare('DELETE FROM announcements WHERE id=?').run(req.params.id);
  res.json({ok:true});
});

/* ========== NOTES & HIGHLIGHTS ========== */
app.get('/api/notes', requireAuth, (req,res)=>{
  res.json(db.prepare('SELECT * FROM notes WHERE user_id=? ORDER BY created_at DESC').all(req.user.id));
});
app.post('/api/notes', requireAuth, (req,res)=>{
  const {content_id, text} = req.body;
  const info = db.prepare('INSERT INTO notes (user_id,content_id,text,created_at) VALUES (?,?,?,?)')
    .run(req.user.id, content_id, text, now());
  res.json({id:info.lastInsertRowid});
});

app.get('/api/highlights', requireAuth, (req,res)=>{
  res.json(db.prepare('SELECT * FROM highlights WHERE user_id=? ORDER BY created_at DESC').all(req.user.id));
});
app.post('/api/highlights', requireAuth, (req,res)=>{
  const {content_id, range_json} = req.body;
  const info = db.prepare('INSERT INTO highlights (user_id,content_id,range_json,created_at) VALUES (?,?,?,?)')
    .run(req.user.id, content_id, JSON.stringify(range_json), now());
  res.json({id:info.lastInsertRowid});
});

/* ========== UPLOADS (metadata only) ========== */
app.get('/api/uploads', requireAuth, (req,res)=>{
  res.json(db.prepare('SELECT * FROM uploads WHERE user_id=? ORDER BY created_at DESC').all(req.user.id));
});
app.post('/api/uploads', requireAuth, requireRole('contrib','karibo','admin'), (req,res)=>{
  const {title, category, filename, size, url} = req.body;
  const info = db.prepare('INSERT INTO uploads (user_id,title,category,filename,size,url,created_at) VALUES (?,?,?,?,?,?,?)')
    .run(req.user.id, title, category, filename, size, url, now());
  res.json({id:info.lastInsertRowid});
});

/* ========== EVENTS & PAYMENTS (simulate) ========== */
app.get('/api/events', (req,res)=>{
  res.json(db.prepare('SELECT * FROM events ORDER BY starts_at DESC').all());
});
app.post('/api/events', requireAuth, requireRole('contrib','karibo','admin'), (req,res)=>{
  const {title, descr, type, price, starts_at} = req.body;
  const info = db.prepare('INSERT INTO events (title,descr,type,price,starts_at,created_by) VALUES (?,?,?,?,?,?)')
    .run(title, descr, type, price||0, starts_at||now(), req.user.id);
  res.json({id:info.lastInsertRowid});
});
app.post('/api/payments', requireAuth, (req,res)=>{
  const {method, amount, meta} = req.body;
  const info = db.prepare('INSERT INTO payments (user_id,method,amount,status,meta_json,created_at) VALUES (?,?,?,?,?,?)')
    .run(req.user.id, method, amount, 'SIMULATED', JSON.stringify(meta||{}), now());
  res.json({id:info.lastInsertRowid, status:'SIMULATED'});
});

/* Misc */
app.get('/api/health', (_req,res)=>res.json({ok:true, ts:now()}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log('Mianàra API on http://localhost:'+PORT));
