const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'pomby-error.log', level: 'error' }),
    new winston.transports.File({ filename: 'pomby.log' }),
  ],
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.simple(),
  ),
});

module.exports = logger;
