import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import Header from './container/Header'
import { AppState } from './store/app-state'

@inject('appState')
@observer
export default class App extends React.Component {
  static propTypes = {
    appState: PropTypes.instanceOf(AppState).isRequired,
  }

  componentDidMount() {
    // TODO: do something here
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.appState.msg}
      </div>
    )
  }
}
