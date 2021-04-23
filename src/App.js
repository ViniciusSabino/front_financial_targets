import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import GlobalStyle from './styles/global';

import { Home, Login, Releases } from './pages';

const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/releases" component={Releases} />
      </Switch>
    </Router>
    <GlobalStyle />
  </>
);

export default App;
