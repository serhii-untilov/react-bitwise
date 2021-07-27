import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BitNumber from './components/BitNumber.component'

const Operation = {
  AND: 0,
  NOT: 1,
  OR: 2,
  XOR: 3
}

const Notation = {
  Hex: 0,
  Dec: 1,
  Oct: 2
}

function App() {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [number3, setNumber3] = useState(0)
  const [operation, setOperation] = useState(Operation.AND)
  const [notation, setNotation] = useState(Notation.Dec)

   return (
    <div className="App">
      <header>
        <a className="app-link" href="https://reactjs.org/docs/handling-events.html" target="_blank" rel="noopener noreferrer">React</a>
        <img src={logo} className="logo" alt="logo" width="120" height="120" />
        <a className="app-link" href="https://github.com/sergey-untilov/react-bitwise" target="_blank" rel="noopener noreferrer">Bitwise</a>
      </header>

        <BitNumber caption="Number 1"/>
        <BitNumber caption="Number 2" />
        <BitNumber caption="Number 3"/>
    </div>
  );
}

export default App;
