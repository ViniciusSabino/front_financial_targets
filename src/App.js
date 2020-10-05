import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from 'react-router-dom';

import GlobalStyle from './styles/global';

import Home from './pages/Home'
import Accounts from './pages/Accounts'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={ Accounts } /> 
          <Route path="*" component={ Home } />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App;
  