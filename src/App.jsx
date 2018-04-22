import React from 'react';
import Header from './container/Header.jsx'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      content: 'this is content',
    }
  }
  render() {
    return (
      <div>
        <Header />
        {this.state.content}
      </div>
    )
  }
}
