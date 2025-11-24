let token = '';
let role = 'visitor';
const $ = s=>document.querySelector(s);
const api = (path, opts={}) =>
  fetch(path, {headers:{'Content-Type':'application/json', ...(token?{Authorization:'Bearer '+token}:{})}, ...opts})
  .then(async r=>{ const data = await r.json().catch(()=>({})); if(!r.ok){ throw new Error(data.error||('HTTP '+r.status)); } return data; })
  .catch(e=>{ alert(e.message); throw e; });

/* AUTH */
$('#btnLogin').onclick = async ()=> {
  const r = await api('/api/auth/login', {method:'POST', body:JSON.stringify({email:$('#email').value,password:$('#password').value})});
  if(r.token){ token=r.token; role=r.user.role; $('#who').textContent = r.user.email+' ('+r.user.role+')'; toggleAnnForm(); loadList(); loadAnnouncements(); }
};
$('#btnRegister').onclick = async ()=> {
  const r = await api('/api/auth/register', {method:'POST', body:JSON.stringify({email:$('#email').value,password:$('#password').value,name:''})});
  if(r.token){ token=r.token; role=r.user.role; $('#who').textContent = r.user.email+' ('+r.user.role+')'; toggleAnnForm(); loadList(); loadAnnouncements(); }
};

function toggleAnnForm(){
  if(role==='karibo' || role==='admin') $('#annForm').classList.remove('hidden');
  else $('#annForm').classList.add('hidden');
}

/* ANNOUNCEMENTS */
async function loadAnnouncements(){
  const items = await api('/api/announcements');
  const ul = $('#annList'); ul.innerHTML = '';
  items.forEach(a=>{
    const title = a.title_fr || a.title_mg || a.title_en || '(Annonce)';
    const li = document.createElement('li');
    li.innerHTML = `<strong>${title}</strong>${a.pinned?' 📌':''}`;
    ul.appendChild(li);
  });
}
$('#btnAnnSave').onclick = async ()=>{
  if(!(role==='karibo' || role==='admin')) return alert('Réservé à Karibo/Admin');
  const payload = {
    title_fr:$('#annTitleFR').value, title_mg:$('#annTitleMG').value, title_en:$('#annTitleEN').value,
    body_fr:$('#annBodyFR').value, body_mg:$('#annBodyMG').value, body_en:$('#annBodyEN').value,
    pinned: $('#annPinned').checked
  };
  await api('/api/announcements',{method:'POST', body:JSON.stringify(payload)});
  $('#annTitleFR').value=$('#annTitleMG').value=$('#annTitleEN').value='';
  $('#annBodyFR').value=$('#annBodyMG').value=$('#annBodyEN').value=''; $('#annPinned').checked=false;
  loadAnnouncements();
};

/* CONTENTS */
async function loadList(){
  const lang = $('#lang').value, type=$('#ctype').value, q=$('#q').value.trim();
  const items = await api(`/api/contents?type=${type}&q=${encodeURIComponent(q)}`);
  const ul = $('#list'); ul.innerHTML='';
  items.forEach(c=>{
    const title = c['title_'+lang] || c.title_fr || '(sans titre)';
    const li = document.createElement('li');
    li.innerHTML = `<strong>${title}</strong><br><small>${c.type} — ${new Date(c.created_at).toLocaleDateString()}</small><br><button>Ouvrir</button>`;
    li.querySelector('button').onclick = ()=> openContent(c.id, lang);
    ul.appendChild(li);
  });
}
$('#btnReload').onclick = ()=>{ loadList(); loadAnnouncements(); }; window.onload = ()=>{ loadList(); loadAnnouncements(); };

$('#btnNew').onclick = async ()=>{
  if(!(role==='contrib' || role==='karibo' || role==='admin')) return alert('Connecte-toi avec un rôle contributeur ou supérieur');
  const type = prompt('Type (article/audio/video):','article'); if(!type) return;
  const title = prompt('Titre FR:','Nouveau contenu');
  const body = type==='article' ? prompt('Texte FR (HTML autorisé):','<p>Bonjour</p>') : '';
  const payload = {type, title_fr:title, title_mg:'', title_en:'', body_fr:body, body_mg:'', body_en:'', tags:[], published:1};
  const r = await api('/api/contents',{method:'POST', body:JSON.stringify(payload)});
  if(r.id){ alert('Créé #'+r.id); loadList(); }
};

async function openContent(id, lang){
  const c = await api('/api/contents/'+id);
  $('#reader').classList.remove('hidden');
  $('#rTitle').textContent = c['title_'+lang] || c.title_fr || '(sans titre)';
  $('#rBody').innerHTML = c['body_'+lang] || c.body_fr || '';
  $('#btnAddNote').onclick = async ()=>{
    if(!token) return alert('Connecte-toi');
    const txt = $('#noteText').value.trim(); if(!txt) return;
    await api('/api/notes',{method:'POST',body:JSON.stringify({content_id:id, text:txt})});
    $('#noteText').value=''; loadNotes();
  };
  async function loadNotes(){
    if(!token) { $('#noteList').innerHTML=''; return; }
    const all = await api('/api/notes');
    const notes = all.filter(n=>n.content_id===id);
    const ul = $('#noteList'); ul.innerHTML='';
    notes.forEach(n=>{ const li=document.createElement('li'); li.textContent = new Date(n.created_at).toLocaleString()+': '+n.text; ul.appendChild(li); });
  }
  loadNotes();
}
