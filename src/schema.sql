PRAGMA journal_mode=WAL;

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT UNIQUE NOT NULL,
  passhash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'visitor',
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS contents (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type TEXT NOT NULL, -- article|audio|video
  title_fr TEXT, title_mg TEXT, title_en TEXT,
  body_fr TEXT, body_mg TEXT, body_en TEXT,
  tags_json TEXT, published INTEGER DEFAULT 0,
  created_by INTEGER, created_at INTEGER, updated_at INTEGER,
  FOREIGN KEY(created_by) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS notes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER, content_id INTEGER, text TEXT, created_at INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(content_id) REFERENCES contents(id)
);

CREATE TABLE IF NOT EXISTS highlights (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER, content_id INTEGER, range_json TEXT, created_at INTEGER
);

CREATE TABLE IF NOT EXISTS uploads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER, title TEXT, category TEXT, filename TEXT,
  size INTEGER, url TEXT, created_at INTEGER
);

CREATE TABLE IF NOT EXISTS payments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER, method TEXT, amount INTEGER,
  status TEXT, meta_json TEXT, created_at INTEGER
);

CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT, descr TEXT, type TEXT, price INTEGER,
  starts_at INTEGER, created_by INTEGER
);

-- NEW: announcements (news/alerts)
CREATE TABLE IF NOT EXISTS announcements (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title_fr TEXT, title_mg TEXT, title_en TEXT,
  body_fr TEXT, body_mg TEXT, body_en TEXT,
  pinned INTEGER DEFAULT 0,
  starts_at INTEGER, ends_at INTEGER,
  created_by INTEGER, created_at INTEGER
);
