import React, {Component} from 'react';
import './App.css';
import Routes from './routes';
import NavbarHeader from './app/NavbarHeader';
import {connect} from 'react-redux';
import FetchError from './components/FetchError';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="App">
        <div>
          <NavbarHeader />
        </div>
        <header className="App-header">
          { (this.props.errors && this.props.errors.length) ? <FetchError errors={this.props.errors} /> : ''}
          <div>
            <Routes />
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errorReducer.errors
  }
}

export default connect(mapStateToProps, null)(App);
