# VPS Deployment Guide for alcyoneos.faimatrix.com

This guide provides step-by-step instructions to deploy **Alcyoneus Web** to your Linux VPS using **GitHub Actions CI/CD** with pre-built Docker containers from GitHub Container Registry (`ghcr.io`), zero source code build overhead on the VPS, and SSL via Let's Encrypt.

---

## 🏗️ Architecture Overview

```
[ Git Push to main ]
         │
         ▼
[ GitHub Actions Runner ] ──> Builds Docker Container & Pushes to ghcr.io
         │
         ▼ (SSH Trigger)
[ Your VPS ]
    ├── 1. Pulls ghcr.io/sainibhaowal/alcyoneus-web:latest
    ├── 2. Restarts Docker container on 127.0.0.1:3000
    └── 3. Nginx Reverse Proxy (SSL) routes alcyoneos.faimatrix.com -> 127.0.0.1:3000
```

---

## 📋 Step 1: Point Your Domain DNS

In your domain registrar / DNS provider (Cloudflare, Namecheap, GoDaddy, etc.):
- **Type**: `A`
- **Name**: `alcyoneos` (for `alcyoneos.faimatrix.com`)
- **Value**: `YOUR_VPS_IP_ADDRESS`
- **TTL**: Auto or 300s

---

## 🔑 Step 2: Configure GitHub Repository Secrets

Go to your GitHub repository:
**`Settings` -> `Secrets and variables` -> `Actions` -> `New repository secret`**

Add the following 3 secrets:

| Secret Name | Description | Example |
|---|---|---|
| `VPS_HOST` | Your VPS public IPv4 address or hostname | `194.163.150.12` |
| `VPS_USERNAME` | SSH login username on your VPS | `root` or `ubuntu` |
| `VPS_SSH_KEY` | Private SSH key that has access to your VPS | `-----BEGIN OPENSSH PRIVATE KEY...` |
| `VPS_SSH_PORT` | *(Optional, default: 22)* Custom SSH port | `22` |

> [!TIP]
> To create a dedicated SSH key for GitHub Actions on your local machine or VPS:
> ```bash
> ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_deploy
> # 1. Copy the contents of ~/.ssh/github_deploy into the GitHub Secret VPS_SSH_KEY
> # 2. Append ~/.ssh/github_deploy.pub to ~/.ssh/authorized_keys on your VPS:
> cat ~/.ssh/github_deploy.pub >> ~/.ssh/authorized_keys
> ```

---

## 🖥️ Step 3: Install Docker & Nginx on VPS

SSH into your VPS and run:

```bash
# 1. Install Docker
curl -fsSL https://get.docker.com | sh
sudo systemctl enable --now docker

# 2. Install Nginx & Certbot for SSL
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx
```

---

## 🌐 Step 4: Configure Nginx & SSL on VPS

### 1. Create Nginx Site Configuration
Create `/etc/nginx/sites-available/alcyoneos.faimatrix.com.conf`:

```bash
sudo nano /etc/nginx/sites-available/alcyoneos.faimatrix.com.conf
```

Paste the following configuration:

```nginx
server {
    listen 80;
    server_name alcyoneos.faimatrix.com;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml application/json application/javascript application/rss+xml application/atom+xml image/svg+xml;

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

### 2. Enable Site and Test Nginx
```bash
sudo ln -s /etc/nginx/sites-available/alcyoneos.faimatrix.com.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 3. Generate Free HTTPS Certificate with Certbot
```bash
sudo certbot --nginx -d alcyoneos.faimatrix.com
```
Certbot will automatically configure HTTPS redirect and SSL certificates.

---

## 🚀 Step 5: Manually Run Deployment on GitHub

Deployment is configured as **100% manual** (no automatic deployments on push):

1. Go to your repository on GitHub: **[https://github.com/sainibhaowal/AlcyoNeus-Web/actions](https://github.com/sainibhaowal/AlcyoNeus-Web/actions)**
2. Click on the workflow: **`Build Docker Container & Deploy to VPS (Manual)`**
3. Click the **`Run workflow`** dropdown button.
4. Keep the checkbox checked (`Deploy to VPS after building container?`) and click the green **`Run workflow`** button.
5. GitHub will:
   - Build the production Docker image.
   - Push it to `ghcr.io/sainibhaowal/alcyoneus-web:latest`.
   - SSH into your VPS, pull the fresh image, and start the container on `127.0.0.1:3000`.
   - Your updated website will immediately be live at **`https://alcyoneos.faimatrix.com`**!

---

## 🛠️ Useful VPS Management Commands

```bash
# Check container status
docker ps -f name=alcyoneus_web

# View real-time container logs
docker logs -f alcyoneus_web

# Restart container manually
docker restart alcyoneus_web

# Test localhost HTTP response
curl -I http://127.0.0.1:3000/
```
