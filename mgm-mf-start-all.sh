#!/bin/bash
echo "🎬 Starting MGM-MF Melodyflix Stack..."

# kill old
pkill -f mgm-mf- || true

# start all in background
cd ~/mgm-mf/mgm-mf-auth && nohup node mgm-mf-auth-server.js > auth.log 2>&1 &
cd ~/mgm-mf/mgm-mf-cms && nohup node mgm-mf-cms-server.js > cms.log 2>&1 &
cd ~/mgm-mf/mgm-mf-stream && nohup node mgm-mf-stream-server.js > stream.log 2>&1 &
cd ~/mgm-mf/mgm-mf-player && nohup node mgm-mf-player-server.js > player.log 2>&1 &

sleep 2
echo ""
echo "✅ MGM-MF ALL MODULES RUNNING:"
echo "   Player  : http://localhost:3000"
echo "   Auth    : http://localhost:3001/mgm-mf-auth-status"
echo "   CMS     : http://localhost:3002/mgm-mf-cms-status"
echo "   Stream  : http://localhost:3003/mgm-mf-stream-status"
echo ""
ps aux | grep mgm-mf- | grep -v grep
