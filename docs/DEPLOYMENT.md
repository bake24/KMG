# KMG Deployment

## Current Target

- Test hosting: Vercel.
- Final hosting: Hetzner server with custom domain.
- Frontend lead endpoint: `/api/telegram-lead`.

## Required Environment Variables

Use these on Vercel and later on Hetzner:

```env
TELEGRAM_BOT_TOKEN=replace_me
TELEGRAM_CHAT_ID=replace_me
PORT=3000
```

Do not commit `.env`.

## Vercel Test Deploy

1. Add the project to Vercel.
2. Add environment variables in Vercel Project Settings.
3. Deploy.
4. Open the deployed site and submit the driver form.
5. Telegram should receive a message marked `Website Lead`.

The Vercel function is:

```text
api/telegram-lead.js
```

## Hetzner Final Deploy

Recommended structure:

```text
/var/www/kmg/current
  index.html
  safety-service.html
  partners.html
  shop.html
  news.html
  assets/
  src/
  server/
```

Run the backend:

```bash
npm install
npm run start
```

For production, run it with PM2:

```bash
pm2 start server/server.js --name kmg-api
pm2 save
```

Nginx should serve static files and proxy API requests:

```nginx
server {
  server_name replace_me_domain.com www.replace_me_domain.com;
  root /var/www/kmg/current;
  index index.html;

  location /api/ {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }

  location / {
    try_files $uri $uri/ /404.html;
  }
}
```

After domain is connected, replace `replace_me_domain.com` in:

- `robots.txt`
- `sitemap.xml`
- Nginx config

Then issue SSL with Certbot.
