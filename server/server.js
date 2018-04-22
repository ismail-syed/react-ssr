const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('../config/config.js');

const app = express();

app.listen(config.serverPort, () => {
  console.log('=============================\n 👏 Server is running on %s', config.serverPort);
})