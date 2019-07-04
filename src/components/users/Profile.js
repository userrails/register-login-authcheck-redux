import React, {Component} from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  render () {
    return (
        <div>
          <p>This is a profile page</p>
          <p>Hey User, your id is: {this.props.currentUser.id}</p>
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.authReducer.currentUser
  }
}

export default connect(mapStateToProps)(Profile)