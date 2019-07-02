import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { LogoutFunction } from "../actions/LogoutAction";
import { connect } from "react-redux";

class NavbarHeader extends Component {
  handleLogout = () => {
    this.props.LogoutFunction()
  }

  render () {
    if (this.props.isAuthenticated===true) {
      return (
        <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
          <Link to="#" onClick={this.handleLogout}>Logout</Link>
        </div>
      )
    } else {
      return (
        <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
        )
    }
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authReducer.isAuthenticated
  } 
}

export default connect(mapStateToProps, {LogoutFunction})(NavbarHeader);
