const express = require('express');
const app = express();
const PORT = 3001;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>mgm-mf-auth Running</h1><p>Go to <a href="/mgm-mf-auth-status">/mgm-mf-auth-status</a></p>');
});

app.get('/mgm-mf-auth-status', (req, res) => {
  res.json({ module: 'mgm-mf-auth', status: 'running', version: '1.0.0', name: 'Melodyflix' });
});

app.post('/mgm-mf-auth-register', (req, res) => {
  res.json({ message: 'mgm-mf: User Registered' });
});

app.post('/mgm-mf-auth-login', (req, res) => {
  res.json({ message: 'mgm-mf: User Logged In' });
});

app.listen(PORT, () => console.log(`mgm-mf-auth running on http://localhost:${PORT}`));
