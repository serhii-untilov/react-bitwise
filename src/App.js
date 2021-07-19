import logo from './logo.svg';
import './App.css';
import './components/BitNumber.component'
import BitNumber from './components/BitNumber.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <BitNumber caption="Number 1" />
        <br/>
        <BitNumber caption="Number 2" />
        <br/>
        <BitNumber caption="Result" />
        <br/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
