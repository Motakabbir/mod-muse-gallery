#!/bin/bash
# Quick restart script - just restarts PM2 without rebuilding
# Run as: bash /var/www/syndicatedrestomod.com/restart.sh

cd /var/www/syndicatedrestomod.com

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo "==> Stopping old PM2 process..."
pm2 delete syndicatedrestomod 2>/dev/null || true

echo "==> Starting app..."
pm2 start ecosystem.config.cjs

echo "==> Saving PM2 list..."
pm2 save

echo ""
sleep 2
pm2 list

echo ""
echo "==> Testing port 3020..."
curl -s -o /dev/null -w "Port 3020 HTTP status: %{http_code}\n" http://127.0.0.1:3020/ 2>/dev/null || echo "curl check failed"

echo ""
echo "==> PM2 logs (last 20 lines):"
pm2 logs syndicatedrestomod --lines 20 --nostream 2>/dev/null
