# Mianàra — Plateforme (Front + Back + SQLite)

## Comment l'utiliser (mobile ou PC)
1. **Télécharge ce ZIP** puis **uploade** tout le dossier dans ton dépôt GitHub :  
   - [mianara-platform.zip](./mianara-platform.zip)
2. Sur ton **VPS Hostinger** :  
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs nginx
   git clone <TON_DEPOT_GITHUB> /var/www/mianara
   cd /var/www/mianara
   npm ci
   echo "PORT=3000
JWT_SECRET=change-me-please
ADMIN_EMAIL=admin@karibo.mg
ADMIN_PASS=ChangeMe!234" > .env
   node src/server.js --init   # crée la base + admin
   node src/server.js          # test local sur le VPS (http://localhost:3000)
   ```
3. **Nginx + HTTPS** (exemple):

   ```nginx
   server {
     listen 80;
     server_name mianara.example.com;
     location / {
       proxy_pass http://127.0.0.1:3000;
       proxy_set_header Host $host;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
     }
   }
   ```
   ```bash
   sudo ln -s /etc/nginx/sites-available/mianara /etc/nginx/sites-enabled/
   sudo nginx -t && sudo systemctl reload nginx
   sudo apt install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d mianara.example.com
   ```

## Annonces (Karibo/Admin)
- Endpoints: `GET /api/announcements`, `POST /api/announcements`, `PUT /api/announcements/:id`, `DELETE /api/announcements/:id`  
- UI: formulaire visible uniquement pour **Karibo/Admin** (après connexion), liste publique en haut de page.

## Remarques
- Base SQLite (`mianara.db`) créée au lancement `--init` (seed admin).  
- Pour la montée en charge, migrer vers Postgres (structure compatible).  
- Paiements/Uploads sont **simulés** côté API (enregistrement métadonnées).  
