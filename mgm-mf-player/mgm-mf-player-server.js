const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
  <html>
  <head><title>Melodyflix - MGM-MF</title>
  <style>
    body{background:#000;color:#fff;font-family:sans-serif;text-align:center;padding-top:50px}
    h1{color:#e50914;font-size:48px}
    .btn{background:#e50914;color:#fff;padding:15px 30px;text-decoration:none;border-radius:5px;margin:10px;display:inline-block}
    .status{color:#0f0;margin-top:20px}
  </style>
  </head>
  <body>
    <h1>MELODYFLIX</h1>
    <h2>mgm-mf-player Running on 3000</h2>
    <a class="btn" href="/mgm-mf-player-status">Status</a>
    <a class="btn" href="http://localhost:3001/mgm-mf-auth-status">Auth</a>
    <a class="btn" href="http://localhost:3002/mgm-mf-cms-status">CMS</a>
    <a class="btn" href="http://localhost:3003/mgm-mf-stream-status">Stream</a>
    <div class="status">● All MGM-MF Modules Connected</div>
  </body>
  </html>
  `);
});

app.get('/mgm-mf-player-status', (req, res) => {
  res.json({ module: 'mgm-mf-player', status: 'running', port: 3000, name: 'Melodyflix Player' });
});

app.listen(PORT, () => console.log(`mgm-mf-player running on http://localhost:${PORT}`));
