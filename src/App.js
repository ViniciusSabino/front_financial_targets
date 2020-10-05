import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from 'react-router-dom';

import GlobalStyle from './styles/global';

import Home from './pages/Home/index.jsx'
import Accounts from './pages/Accounts/index.jsx'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } /> 
          <Route exact path="/accounts" component={ Accounts } />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App;
  