import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from 'react-router-dom';

import Home from './pages/Home'
import Accounts from './pages/Accounts'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Accounts} />
        <Route path="/accounts" component={Accounts} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  )
}

export default App;
  