import React, { Component } from 'react';
import HomePage from './pages/homepage';
import Shop from './pages/shop';
import Header from './componenets/componenets-jsx/Header';
import SigninSignup from './pages/signinSignup';
import { Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { connect } from 'react-redux';

import './App.scss';

class App extends Component {
  state = { currentUser: null };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SigninSignup} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(App);
