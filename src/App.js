import './App.scss';
import HomePage from './pages/Homepage';
import Shop from './pages/Shop';
import Header from './componenets/Header';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={Shop} />
    </div>
  );
}

export default App;
