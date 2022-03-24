import React, { Component } from 'react'
import { Redirect } from 'react-router'
import Cookies from 'js-cookie';

import {
  TextField,
  Button,
  Container
} from '@material-ui/core'

class App extends Component {
  state = {
    username: '',
    password: ''
  }

  handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  login = (e) => {
    e.preventDefault()
    var inOneMinute = new Date(new Date().getTime() + 1 * 60 * 1000);
    Cookies.set('foo', 'bar', {expires: inOneMinute})

    window.location.replace("/")
  }

  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password" />
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary">Login</Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default App;
