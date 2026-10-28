const express = require('express');
const app = express();
const PORT = 3002;
app.use(express.json());

app.get('/', (req, res) => res.send('<h1>mgm-mf-cms Running on 3002</h1>'));
app.get('/mgm-mf-cms-status', (req, res) => res.json({ module: 'mgm-mf-cms', status: 'running' }));
app.post('/mgm-mf-cms-upload', (req, res) => res.json({ message: 'mgm-mf: Video Uploaded' }));
app.get('/mgm-mf-cms-list', (req, res) => res.json({ videos: [] }));

app.listen(PORT, () => console.log(`mgm-mf-cms running on http://localhost:${PORT}`));
