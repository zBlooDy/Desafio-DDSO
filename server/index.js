const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
}));

const PORT = 9000;

const comparisons = {};

app.post('/comparison', (req, res) => {
  const { izquierda, derecha } = req.body;

  const ip = req.socket.remoteAddress;
  const date = new Date();

  comparisons[ip] = { izquierda, derecha, date };
  res.status(201).json({ message: 'OK' });
});

app.get('/comparison', (req, res) => {
  res.status(200).json(comparisons[req.socket.remoteAddress] || {
    izquierda: 0, derecha: 0
  });
});

app.get('/stats', (req, res) => {
  res.status(200).json({ todo: "pendiente" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
