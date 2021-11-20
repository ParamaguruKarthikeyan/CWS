var http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

let config = dotenv.config().parsed;

if (!config.GOOGLE_CLIENT_ID) {
  console.log(
    'GOOGLE_CLIENT_ID client ID is not configured. Please consider configure the same. \n Proceeding with default.. ',
  );
}

const app = express();
app.disable('x-powered-by');
app.disable('view cache');
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../public/dist//views'));

app.use(express.static('public'));

app.use(function (req, res) {
  res.render('index', {
    SERVER_CONFIG: {
      GOOGLE_CLIENT_ID:
        config.GOOGLE_CLIENT_ID ||
        '688351669988-hs7eqgqgkk5u780o9laosg3ngtsg6cdn.apps.googleusercontent.com',
      SESSION_EXPIRY_IN: parseInt(config.SESSION_EXPIRY_IN),
    },
  });
});

process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', (err) => {
    console.error(err, 'Uncaught Exception thrown. Exiting the process');
    process.exit(1);
  });

http.createServer(app).listen(config.PORT, config.HOST_IP, () => {
  console.log(`Running on http://${config.HOST_IP}:${config.PORT}...`);
});
