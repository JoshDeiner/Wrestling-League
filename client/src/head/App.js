import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

import NavBar from '../navigation/TopBar'
import Standings from '../containers/standings/first'
import Main from '../containers/main/page.js'
import Teams from '../containers/standings/TeamScore.js'
import ErrorPage from '../EdgeCases/404.js'
import SigninForm from '../components/auth/SigninForm'
import '../stylesheets/App.css';

console.log('env',process);
class App extends Component {

  state = {
    routes: [ '/', '/standings', '/teams' ]
  }

  checkRoutes = () => {
    // { this.state.routes.includes
    // for (var i = 0; i < this.state.routes.length; i++) {
    //   this.state.routes[i]
    // }
  }

  render() {
    return (
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path='/' render = { () => <Main /> } />
          <Route exact path='/standings' render = { () => <Standings /> } />
          <Route exact path='/teams' render = { () => <Teams /> } />
          <Route exact path='/login' render = { () => <Teams /> } />


        </Switch>
        {this.state.routes.includes(this.props.location.pathname) ? null : <ErrorPage />}
        { this.props.location.pathname.includes('/') }
      </div>
    );
  }
}

export default withRouter(App);


// export default withRouter(connect(mapStateToProps, {getUser, CategoryIdRetrievalSuccess})(App));


// { this.props.location.pathname.includes('/') } use to check path
