const express = require('express');
const cors = require('cors');

var app = express();

app.use(cors());

app.use('/', (req, res) => {
  const now = Date.now();
  setTimeout(() => {
    res.send(String(now));
  }, 15e3);
});

app.listen(3000, () => console.info('Running on port 3000'));
