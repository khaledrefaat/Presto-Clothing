import './App.scss';
import HomePage from './pages/Homepage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
