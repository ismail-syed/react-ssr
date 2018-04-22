import React from 'react'
import './style/header.css'

export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
    }
  }

  render() {
    return (
      <header className="m-header">
        Hello, { this.state.username }
      </header>
    )
  }
}
