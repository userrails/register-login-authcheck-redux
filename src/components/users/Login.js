import React, {Component} from 'react';
import {connect} from 'react-redux';
import {LoginFunction} from '../../actions/LoginAction';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()

    this.props.LoginFunction(this.state);
  }

  render () {
    return (
        <form onSubmit={this.handleSubmit}>
          <h1>Sign in</h1>
          <label>Email</label>
          <input
            name='email'
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label>Password</label>
          <input
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" />
        </form>
      )
  }
}

export default connect(null, { LoginFunction })(Login)
