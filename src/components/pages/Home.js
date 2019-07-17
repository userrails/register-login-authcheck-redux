import React, {Component} from 'react';
import { connect } from "react-redux";

class Home extends Component {
  render () {
    if (this.props.isAuthenticated===true) {
      return (
          <div>
            <h1>This is my Home page.</h1>
          </div>
        )
      } else {
      return (
          <p>You are not yet loggedin, first <a href="/register">Register</a> your account.</p>
        )
    }
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authReducer.isAuthenticated
  }
}

export default connect(mapStateToProps)(Home)
