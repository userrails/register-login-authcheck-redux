import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Home from '.././pages/Home';
import Contact from '.././pages/Contact';
import About from '.././pages/About';

export default () => {
  return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
  )
}
