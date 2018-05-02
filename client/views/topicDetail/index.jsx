import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropType from 'prop-types';
import { AppState } from '../../store/appState'
@inject('appState')
@observer
export default class TopicDetail extends Component {
  static propTypes = {
    appState: PropType.instanceOf(AppState).isRequired
  }
  constructor () {
    super();
  }
  changeName (e) {
    this.props.appState.changeName(e.target.value);
  }
  render () {
    return (
      <div>
        <input type="text" onChange={(e) => this.changeName(e)} value={ this.props.appState.name }/>
        { this.props.appState.msg }
      </div>
    )
  }
}