const path = require('path');
const axios = require('axios');
const webpack = require('webpack');
const MemoryFs = require('memory-fs');
const ReactSSR = require('react-dom/server');
const proxy = require('http-proxy-middleware');
const ejs = require('ejs');
const serialize = require('serialize-javascript');
const Helmet = require('react-helmet').default;
const asyncBootstrap = require('react-async-bootstrapper');
const serverConfig = require('../../webpack/server.config');

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8000/public/server.ejs')
      .then(res => {
        resolve(res.data);
      })
      .catch(reject)
  })
}

const getStoreState = (stores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    result[storeName] = stores[storeName].toJson();
    return result;
  }, {})
}

let serverBundle, createStoreMap;

const NativeModule = require('module');
const vm = require('vm');

const getModuleFromString = (bundle, filename) => {
  const m = { exports: {} };
  const wrapper = NativeModule.wrap(bundle);
  const script = new vm.Script(wrapper, {
    filename: filename,
    displayErrors: true
  })
  const result = script.runInThisContext();
  result.call(m.exports, m.exports, require, m);
  return m;
}


const mfs = new MemoryFs;
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
  // hack
  const m = getModuleFromString(bundle, 'serverEntry.js');
  // 挂载到exports.default下
  serverBundle = m.exports.default;
  createStoreMap = m.exports.createStoreMap;
})

module.exports = (app) => {
  app.use('/public', proxy({
    target: 'http://localhost:8000'
  }))
  app.get('*', (req, res) => {

    getTemplate().then(template => {
      const routerContext = {};
      const stores = createStoreMap()
      const app = serverBundle(stores, routerContext, req.url);

      asyncBootstrap(app).then(() => {
        if (routerContext.url) {
          res.status(302).setHeader('Location', routerContext.url)
          res.end();
          return;
        }
        // 添加HTML头部标签
        const helmet = Helmet.rewind();
        const state = getStoreState(stores);
        const content = ReactSSR.renderToString(app);

        const html = ejs.render(template, {
          appString: content,
          initialState: serialize(state),
          meta: helmet.meta.toString(),
          title: helmet.title.toString(),
          link: helmet.link.toString(),
          style: helmet.style.toString()
        })
        res.send(html);
      })

    })
  })
}
