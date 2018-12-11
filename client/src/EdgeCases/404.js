import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../stylesheets/App.css';

class App extends Component {



  render() {
    return (
      <div className="App">
        <h1>you down messed up</h1>
        <Link to ='/'>Return to Home Page</Link>
        <div>
          <br />
          <img height='400' width='500' src='https://i.giphy.com/media/BGkZrY7arwjXW/giphy.webp'></img>
        </div>
      </div>
    );
  }
}

export default (App);


// export default withRouter(connect(mapStateToProps, {getUser, CategoryIdRetrievalSuccess})(App));


// { this.props.location.pathname.includes('/') } use to check path
