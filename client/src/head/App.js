import React, { Component } from 'react';
import { Switch, Route, WithRouter } from 'react-router-dom'

import NavBar from '../navigation/TopBar'
import Standings from '../containers/standings/first'
import Main from '../containers/main/page.js'
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' render = { () => <Main /> } />
          <Route exact path='/standings' render = { () => <Standings /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
