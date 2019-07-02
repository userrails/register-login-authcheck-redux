import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '.././components/pages/Home';
import Contact from '.././components/pages/Contact';
import About from '.././components/pages/About';
import Signup from '../components/users/Register';
import Login from '../components/users/Login';

export default () => {
  return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Signup} />
        </Switch>
      </div>
  )
}
