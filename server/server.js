const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const favicon = require('serve-favicon');
const app = express();

// 是否时开发环境
const isDev = process.env.NODE_ENV === 'development';

app.use(bodyParser.json()); // 请求放入req.body中
app.use(bodyParser.urlencoded({
  extended: false // 表单请求也放入req.body中
}));
app.use(session({
  maxAge: 10*60*100,
  name: 'access_id',
  resave: false,
  saveUninitialized: false,
  secret: 'Zsmart-TF_Bank'
}));

app.use(favicon(path.join(__dirname, '../favicon.ico')));

if (isDev) {
  // 开发时的服务端渲染
  const devStatic = require('./utils/devStatic');
  devStatic(app);
} else {
  // 生产环境下的服务端渲染
  // const serverEntry = require('../dist/serverEntry').default;
  // const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8');
  // app.use('/public', express.static(path.join(__dirname, '../dist')));
  // app.get('*', function (req, res) {
  //   const content = ReactSSR.renderToString(serverEntry);
  //   res.send(template.replace('<app></app>', content));
  // })
}

app.listen(3000, function () {
  console.log('🎉 ==> server is running on 3000');
})
