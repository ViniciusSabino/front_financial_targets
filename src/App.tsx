import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { Home } from './pages';

const App = (): JSX.Element => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
    <GlobalStyle />
  </>
);

export default App;
