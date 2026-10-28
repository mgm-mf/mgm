const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
  <html><head><title>Melodyflix</title><meta name="viewport" content="width=device-width, initial-scale=1"><style>*{margin:0;padding:0;box-sizing:border-box}body{background:#0f0f0f;color:#fff;font-family:Roboto,Arial}.navbar{display:flex;align-items:center;padding:10px 15px;background:#0f0f0f;position:sticky;top:0;z-index:10;border-bottom:1px solid #303030}.logo{color:red;font-weight:900;font-size:22px}.logo span{color:white}.search{flex:1;margin:0 20px;display:flex;justify-content:center}.search input{width:60%;padding:10px 15px;background:#121212;border:1px solid #303030;border-radius:20px 0 0 20px;color:#fff;outline:none}.search button{padding:10px 20px;background:#303030;border:1px solid #303030;border-radius:0 20px 20px 0;color:#fff}.main{flex:1;padding:15px}.chips{display:flex;gap:10px;overflow-x:auto;padding-bottom:10px}.chip{background:#272727;padding:6px 12px;border-radius:8px;white-space:nowrap;font-size:14px}.chip.active{background:#fff;color:#000}.videos{display:grid;grid-template-columns:1fr;gap:15px}@media(min-width:600px){.videos{grid-template-columns:1fr 1fr}}@media(min-width:900px){.videos{grid-template-columns:1fr 1fr 1fr}}.card{background:#0f0f0f;border-radius:12px;overflow:hidden;cursor:pointer}.thumb{width:100%;height:180px;background:linear-gradient(45deg,#e50914,#b20710);display:flex;align-items:center;justify-content:center;font-size:50px;border-radius:12px}.info{padding:10px;display:flex;gap:10px}.avatar{width:36px;height:36px;background:#666;border-radius:50%;flex-shrink:0}.title{font-size:15px;line-height:20px;font-weight:500}.channel{font-size:13px;color:#aaa;margin-top:4px}.views{font-size:13px;color:#aaa}</style></head><body><div class="navbar"><div class="logo">▶ MELODY<span>FLIX</span></div><div class="search"><input placeholder="Search Melodyflix"><button>🔍</button></div><div>👤</div></div><div class="main"><div class="chips"><div class="chip active">All</div><div class="chip">Music</div><div class="chip">Gaming</div><div class="chip">Mixes</div><div class="chip">Live</div><div class="chip">Melody</div><div class="chip">MGM</div></div><div class="videos"><div class="card" onclick="location.href='/watch?v=1'"><div class="thumb">🎵</div><div class="info"><div class="avatar"></div><div><div class="title">MGM-MF Intro - How I Built My OTT Platform</div><div class="channel">mgm-mf • CMS</div><div class="views">1.2K views • 2h ago</div></div></div></div><div class="card" onclick="location.href='/watch?v=2'"><div class="thumb">🎬</div><div class="info"><div class="avatar"></div><div><div class="title">Melodyflix Streaming Test - 4K Video</div><div class="channel">mgm-mf • Stream</div><div class="views">8.5K views • 5h ago</div></div></div></div><div class="card" onclick="location.href='/watch?v=3'"><div class="thumb">🔐</div><div class="info"><div class="avatar"></div><div><div class="title">Auth Module Explained - JWT Login</div><div class="channel">mgm-mf • Auth</div><div class="views">3.1K views • 1d ago</div></div></div></div><div class="card" onclick="location.href='/watch?v=4'"><div class="thumb">🚀</div><div class="info"><div class="avatar"></div><div><div class="title">Termux to GitHub - Full Deploy Workflow</div><div class="channel">mgm-mf • DevOps</div><div class="views">12K views • 2d ago</div></div></div></div></div></div></body></html>
  `);
});

app.get('/watch', (req, res) => {
  res.send(`
  <html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{background:#0f0f0f;color:#fff;font-family:Arial;margin:0}.player{width:100%;height:220px;background:#000;display:flex;align-items:center;justify-content:center}video{width:100%;height:100%} .info{padding:15px} h2{font-size:18px} .btn{background:#272727;padding:8px 15px;border-radius:20px;border:none;color:#fff;margin-right:8px;margin-top:10px}</style></head>
  <body>
  <div class="player">
    <video controls autoplay style="background:#000">
      <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
    </video>
  </div>
  <div class="info">
    <h2>MGM-MF Video Playing - Melodyflix Original</h2>
    <p style="color:#aaa;margin:10px 0">mgm-mf • 10K views • Now • Melodyflix Player</p>
    <button class="btn">👍 1.2K</button><button class="btn">Share</button><button class="btn">⬇ Download</button>
    <br><br><a href="/" style="color:red;text-decoration:none">← Back to Home</a>
  </div>
  </body></html>`);
});

app.listen(PORT, ()=>console.log('Melodyflix running on '+PORT));
