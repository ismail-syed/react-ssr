import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
// import { AppState } from '../../store/appState'
@inject('appState') @observer
export default class TopicDetail extends Component {
  static propTypes = {
    appState: PropType.object.isRequired
  }
  constructor () {
    super();
  }
  asyncBootstrap () {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.count = 3
        resolve(true)
      })
    })
  }
  changeName (e) {
    this.props.appState.changeName(e.target.value);
  }
  render () {
    return (
      <div>
        <Helmet>
          <title>This is TopicDetail</title>
          <meta name="description" content="this is TopicDetail description"/>
        </Helmet>
        { this.props.appState.count }
        <input type="text" onChange={(e) => this.changeName(e)} value={ this.props.appState.name }/>
        { this.props.appState.msg }
      </div>
    )
  }
}