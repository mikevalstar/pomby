const webpack = require('webpack');
const express = require('express');
const path = require('path');
const app = express();

const logger = require('./lib/logger');
const webpackConf = require('./webpack.config.js');

app.get('/pomby/api', (req, res) => res.send('Hello API!'));
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/admin', express.static(path.resolve(__dirname, 'admin/dist')));

const Pomby = {

  settings: {},

  init: (settings) => {

    return new Promise(function(resolve, reject) {

      Pomby.settings = settings;

      // Build the admin panel
      const compiler = webpack(webpackConf);
      compiler.run((err, stats) => {
        if(err){
          return reject(err);
        }

        logger.info(stats.toString({colors: true}));
        resolve();
      });

    });

  },

  listen: (port, cb) => {
    app.listen(port, cb);
  },

};

module.exports = Pomby;
