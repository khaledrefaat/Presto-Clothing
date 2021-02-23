import './App.scss';
import HomePage from './pages/homepage';
import Shop from './pages/shop';
import Header from './componenets/componenets-jsx/Header';
import SigninSignup from './pages/signinSignup';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/signin" component={SigninSignup} />
    </div>
  );
}

export default App;
