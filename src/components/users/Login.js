import React, {Component} from 'react';
import {connect} from 'react-redux';
import {LoginFunction} from '../../actions/LoginAction';
// import fakeAuth from '../../containers/fakeAuth';
// import {push} from 'connected-react-router';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // by default the value of redirectToReferrer is false
      // redirectToReferrer: false,
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

    // when register form is submitted this method is triggerred
    // In this case before userPostFetch action calls the fakeAuth.authenticate() fun calls
    // which makes the value of isAuthenticated = true and here the value of redirectToReferrer
    // also sets to true and state is updated with this value
    // fakeAuth.authenticate(() => {
    //   this.setState(() => ({
    //     redirectToReferrer: true
    //   }))
    // })

    // this logic may need to be refactored
    // we are forcefully making isAuthenticate=true by calling authenticate() method
    // but it should check if token is not expired, token is not nil, token is valid then
    // authentication is okay otherwise authentication is false
    // Also when valid token is present means user is already signed in by token so user is not
    // allowed to register into the site
    // when token not present on the session then new user registration can be done successfully.
    // let user_params = {user: this.state.user, password: this.state.password}
    this.props.LoginFunction(this.state);
  }

  render () {
    // const {from} = this.props.location.state || { from: {path: '/form' }}
    // const {redirectToReferrer} = this.state.redirectToReferrer

    // if redirectToReferrer value is true then redirect to what set inside from
    // otherwise display the form content
    // console.log('trigger121200', redirectToReferrer);
    // if (redirectToReferrer === true) {
    // this.props.changePage();
    //   console.log('trigger121200');
    //   push('/');
    // }

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
