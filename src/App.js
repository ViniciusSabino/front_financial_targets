import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import GlobalStyle from './styles/global';

import { Home, Login, Accounts } from './pages';

const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/accounts" component={Accounts} />
      </Switch>
    </Router>
    <GlobalStyle />
  </>
);

export default App;
