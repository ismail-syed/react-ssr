import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import Routes from '../config/router';

export default class App extends Component {
  render () {
    return [
      <div key="header">
        <Link to="/list">列表</Link>
        <br />
        <Link to="/detail">详情</Link>
      </div>,
      <Routes key="routes"/>
    ]
  }
}