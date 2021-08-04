// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BitNumber } from './components/BitNumber.component'
import { Operation, BitOperations, calculate } from './components/BitOperations.component';
import { Notation, BitNotation } from './components/BitNotation.component';

function App() {
  const [operation, setOperation] = useState(Operation.AND)
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [result, setResult] = useState(0)
  const [notation, setNotation] = useState(Notation.Dec)

  function onChangeNumber1(value) {
    setNumber1(value)
    setResult(calculate(value, number2, operation))
  }

  function onChangeNumber2(value) {
    setNumber2(value)
    setResult(calculate(number1, value, operation))
  }

  function onChangeOperation(value) {
    setOperation(value)
    setResult(calculate(number1, number2, value))
  }

   return (
    <div className="App">
      {/* <header>
        <a className="app-link" href="https://reactjs.org/docs/handling-events.html" target="_blank" rel="noopener noreferrer">React</a>
        <img src={logo} className="logo" alt="logo" width="120" height="120" />
        <a className="app-link" href="https://github.com/sergey-untilov/react-bitwise" target="_blank" rel="noopener noreferrer">Bitwise</a>
      </header> */}

       <BitNumber caption="Number 1" number={number1} onChange={onChangeNumber1} />
       <BitOperations operation={operation} onChange={onChangeOperation}></BitOperations>
       <BitNumber caption="Number 2" number={number2} onChange={onChangeNumber2} />
       <BitNotation notation={notation} onChange={setNotation}></BitNotation>
       <BitNumber caption="Result" number={result} onChange={setResult}/>
    </div>
  )
}

export default App;
