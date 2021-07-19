import logo from './logo.svg';
import './App.css';
import './components/bit.component'
import BitNumber from './components/bit.component';

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
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
