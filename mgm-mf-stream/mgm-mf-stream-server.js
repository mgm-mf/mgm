const express = require('express');
const app = express();
const PORT = 3003;
app.use(express.json());

app.get('/', (req, res) => res.send('<h1>mgm-mf-stream Running on 3003</h1><p><a href="/mgm-mf-stream-status">Status</a> | <a href="/mgm-mf-stream-play/demo.mp4">Play Demo</a></p>'));
app.get('/mgm-mf-stream-status', (req, res) => res.json({ module: 'mgm-mf-stream', status: 'running', port: 3003 }));
app.get('/mgm-mf-stream-play/:video', (req, res) => res.json({ message: `mgm-mf: Streaming ${req.params.video}` }));

app.listen(PORT, () => console.log(`mgm-mf-stream running on http://localhost:${PORT}`));
