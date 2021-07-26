import logo from './logo.svg';
import './App.css';
import './components/BitNumber.component'
import BitNumber from './components/BitNumber.component';
import BitOperations from './components/BitOperations.component';
import BitNotation from './components/BitNotation.component';
import { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [number3, setNumber3] = useState(0)
  const [operation, setOperation] = useState(0)
  const [notation, setNotation] = useState(0)
  
   return (
    <div className="App">
      <header>
        <a className="App-link" href="https://reactjs.org/docs/handling-events.html" target="_blank" rel="noopener noreferrer">React</a>
        <img src={logo} className="logo" alt="logo" width="120" height="120" />
        <a className="App-link" href="https://github.com/sergey-untilov/react-bitwise" target="_blank" rel="noopener noreferrer">Bitwise</a>
      </header>

      <div className="column">
        <div className="row">
          <div className="row--align-left">
            <div className="bit-number__caption">Number 1: </div>
            <input class="bit-number__input" type="text" value={number1} onInput={(e) => { setNumber1(e.target.value)}} />
          </div>
          <div className="row--align-right">
            <button class="bit-number__operation" onClick={(e) => { setNumber1( ~number1    )}}>Inverse</button>
            <button class="bit-number__operation" onClick={(e) => { setNumber1( 0           )}}>Clear</button>
            <button class="bit-number__operation" onClick={(e) => { setNumber1( number1 << 1)}}>&lt;&lt;</button>
            <button class="bit-number__operation" onClick={(e) => { setNumber1( number1 >> 1)}}>&gt;&gt;</button>
          </div>
        </div>
        <div className="bit-number__bits">Bits</div>
      </div>
      
    </div>
  );
}

export default App;
