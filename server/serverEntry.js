import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider, useStaticRendering } from 'mobx-react';
import App from '../client/views/App';

// 防止mobx在服务端渲染时发生数据变化
useStaticRendering(true);

export default (stores,routerContext,url) => {
  return (
    <Provider {...stores}>
      <StaticRouter context={routerContext} location={url}>
        <App />
      </StaticRouter>
    </Provider>
  )
};