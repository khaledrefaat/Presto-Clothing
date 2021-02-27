import React, { Component } from 'react';
import HomePage from './pages/homepage';
import Shop from './pages/shop';
import Header from './componenets/componenets-jsx/Header';
import SigninSignup from './pages/signinSignup';
import { Route } from 'react-router-dom';
import { auth } from './firebase/firebase';

import './App.scss';

class App extends Component {
  state = { userId: null };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ userId: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(this.state.userId);
    return (
      <div className="App">
        <Header userId={this.state.userId} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SigninSignup} />
      </div>
    );
  }
}

export default App;
