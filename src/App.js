import './App.scss';
import HomePage from './pages/Homepage';
import Shop from './pages/Shop';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={Shop} />
    </div>
  );
}

export default App;
