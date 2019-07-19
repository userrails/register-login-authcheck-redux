import React, {Component} from 'react';

class FetchError extends Component {
  render () {
    return (
      <div className="alert alert-danger" role="alert">
        <p>{this.props.errors}</p>
      </div>
      )
  }
}

export default FetchError;
