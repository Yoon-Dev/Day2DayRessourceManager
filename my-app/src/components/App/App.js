import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
// Component
import Add from '../Add/Add';
import List from '../List/List';
import AppNavigation from '../AppNavigation/AppNavigation';



export default class App extends Component {

  render(){
    return (
      <div id="App">  
        <Router>
          <AppNavigation lock="/list/wishlist"/>
          <Switch>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/">
              <Add />
            </Route>
          </Switch>
        </Router>
      </div>
);
  }

}

