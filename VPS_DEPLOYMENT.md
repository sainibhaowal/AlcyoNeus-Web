# Alcyoneus Web — VPS Deployment Guide

This guide provides instructions for deploying **Alcyoneus Web** (Next.js 14 Standalone) to any Linux Virtual Private Server (VPS) such as Ubuntu, Debian, Hetzner, DigitalOcean, AWS EC2, or Linode.

---

## Prerequisites

- Linux Server with Ubuntu 22.04 / 24.04 or Debian 12
- At least 512 MB RAM (1 GB recommended)
- A domain name pointing to your VPS IP (e.g. `example.com` and `www.example.com`)

---

## Option A: Deploy via Docker Compose (Recommended)

Docker Compose offers the easiest isolation and zero-dependency host setup.

### 1. Install Docker & Docker Compose
```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
# Log out and log back in, or run:
newgrp docker
```

### 2. Clone and Start
```bash
cd /var/www/alcyoneus-web   # or your chosen directory
docker compose up -d --build
```

### 3. Verify Container
```bash
docker compose ps
docker compose logs -f
curl http://localhost:3000
```

---

## Option B: Deploy via Node.js + PM2 (Direct Host)

Next.js is configured with `output: 'standalone'`, which bundles only the required runtime code into `.next/standalone` without requiring the entire 300MB `node_modules` directory.

### 1. Install Node.js 20 & PM2
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g pm2
```

### 2. Build and Start with PM2
```bash
npm ci
npm run build
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 3. Zero-Downtime Reloads
```bash
./deploy.sh
# or manually:
pm2 reload ecosystem.config.js --update-env
```

---

## Option C: Deploy via Systemd Service

Create `/etc/systemd/system/alcyoneus-web.service`:

```ini
[Unit]
Description=Alcyoneus Web Next.js Standalone
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/alcyoneus-web
ExecStart=/usr/bin/node /var/www/alcyoneus-web/.next/standalone/server.js
Restart=always
RestartSec=10
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=alcyoneus-web
Environment=NODE_ENV=production
Environment=PORT=3000
Environment=HOSTNAME=127.0.0.1

[Install]
WantedBy=multi-user.target
```

Enable and start:
```bash
sudo systemctl daemon-reload
sudo systemctl enable alcyoneus-web
sudo systemctl start alcyoneus-web
sudo systemctl status alcyoneus-web
```

---

## Nginx Reverse Proxy Configuration

Install Nginx:
```bash
sudo apt update && sudo apt install -y nginx
```

Create `/etc/nginx/sites-available/alcyoneus.conf`:

```nginx
server {
    server_name alcyoneus.ai www.alcyoneus.ai;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

    location /_next/static/ {
        alias /var/www/alcyoneus-web/.next/static/;
        expires 365d;
        access_log off;
    }

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable configuration and test:
```bash
sudo ln -s /etc/nginx/sites-available/alcyoneus.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## Free SSL via Let's Encrypt (Certbot)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d alcyoneus.ai -d www.alcyoneus.ai
```

Certbot will automatically configure SSL certificate renewal via cron/systemd timer. Test renewal with:
```bash
sudo certbot renew --dry-run
```
