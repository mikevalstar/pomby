const express = require('express');
const app = express();

app.get('/pomby/api', (req, res) => res.send('Hello API!'));
app.get('/', (req, res) => res.send('Hello World!'));

const Pomby = {

  settings: {},

  init: (settings) => {
    Pomby.settings = settings;
  },

  listen: (port, cb) => {
    app.listen(port, cb);
  },

};

module.exports = Pomby;
