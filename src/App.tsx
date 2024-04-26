import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Pages from './pages';

const { Home, Entries } = Pages;

const App = (): JSX.Element => (
  <>
    <Router>
      <Switch>
        <Route exact path='/inicio' component={Home} />
        <Route exact path='/entradas' component={Entries} />
      </Switch>
    </Router>
    <GlobalStyle />
  </>
);

export default App;
