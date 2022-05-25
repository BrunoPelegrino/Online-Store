import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

import './App.css';
import Details from './pages/Details';

// requisito

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/details/:id" render={ (props) => <Details { ...props } /> } />
          <Route exact path="/" component={ Home } />
          <Route path="/Cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
