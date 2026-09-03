#!/usr/bin/env bash
set -euo pipefail

# ==========================================
# Alcyoneus Web VPS Deployment Script
# ==========================================

echo "🚀 [1/4] Checking environment and dependencies..."
if command -v git &> /dev/null && [ -d .git ]; then
    echo "📥 Pulling latest git changes..."
    git pull --rebase
fi

echo "📦 [2/4] Installing dependencies..."
npm ci --prefer-offline --no-audit

echo "🏗️  [3/4] Building standalone production bundle..."
npm run build

echo "🔄 [4/4] Reloading web service..."
if command -v pm2 &> /dev/null && pm2 list | grep -q "alcyoneus-web"; then
    echo "Reloading via PM2..."
    pm2 reload ecosystem.config.js --update-env
elif command -v docker &> /dev/null && [ -f docker-compose.yml ]; then
    echo "Restarting via Docker Compose..."
    docker compose up -d --build
elif systemctl is-active --quiet alcyoneus-web; then
    echo "Restarting via systemd..."
    sudo systemctl restart alcyoneus-web
else
    echo "✅ Standalone build complete. Start via: node .next/standalone/server.js"
fi

echo "🎉 Alcyoneus Web deployment finished successfully!"
