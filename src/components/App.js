import logo from '../shared/images/logo.svg';
import './App.css';
import Home from './Home/Home';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home></Home>
      </header>
    </div>
  );
}

export default App;
