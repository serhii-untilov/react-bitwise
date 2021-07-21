import logo from './logo.svg';
import './App.css';
import './components/BitNumber.component'
import BitNumber from './components/BitNumber.component';
import BitOperations from './components/BitOperations.component';
import BitNotation from './components/BitNotation.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="120" height="120"/>
        <br/>
        <BitNumber caption="Number 1" />
        <br />
        <BitOperations/>
        <br/>
        <BitNumber caption="Number 2" />
        <br />
        <BitNotation/>
        <br/>
        <BitNumber caption="Result" />
        <br/>
        <a
          className="App-link"
          href="https://reactjs.org/docs/handling-events.html"
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
