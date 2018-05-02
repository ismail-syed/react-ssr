const path = require('path');
const axios = require('axios');
const webpack = require('webpack');
const MemoryFs = require('memory-fs');
const serverConfig = require('../../webpack/server.config');
const ReactSSR = require('react-dom/server');

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8000/public/index.html')
      .then(res => {
        resolve(res.data);
      })
      .catch(reject)
  })
}

let serverBundle;

const ModuleInstead = module.constructor;
const mfs = MemoryFs();
const serverCompiler = webpack(serverConfig);
// 编译后服务端代码输出到内存中
serverCompiler.outputFileSystem = mfs;
serverCompiler.watch({}, (err, stats) => {
  // 打包错误时抛出错误
  if (err) throw err;
  stats = stats.toJson();
  // 打印错误和警告信息
  stats.errors.forEach(error => console.error(error));
  stats.warnings.forEach(warn => console.warn(warn));

  // 打包编译后的服务端文件路径
  const bundlePath = path.join(serverConfig.output.path, serverConfig.output.filename);
  const bundle = mfs.readFileSync(bundlePath, 'utf-8');
  const m = new ModuleInstead();
  m._compile(bundle,'serverEntry');
  serverBundle = m.default;
})

module.exports = (app) => {
  app.get('*', (req, res) => {
    getTemplate().then(template => {
      const content = ReactSSR.renderToString(serverBundle);
      res.send(template.replace('<app></app>', content));
    })
  })
}
