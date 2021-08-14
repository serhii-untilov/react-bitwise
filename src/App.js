import './App.css';
import { useState } from 'react';
import Number from './components/Number'
import { Operation, OperationEnum, calculate } from './components/Operation';
import { Notation, NotationEnum } from './components/Notation';

function App() {
  const [operation, setOperation] = useState(OperationEnum.AND)
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [result, setResult] = useState(0)
  const [notation, setNotation] = useState(NotationEnum.Dec)

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
       <Number caption="Number 1" number={number1} onChange={onChangeNumber1} />
       <Operation operation={operation} onChange={onChangeOperation} />
       <Number caption="Number 2" number={number2} onChange={onChangeNumber2} />
       <Notation notation={notation} onChange={setNotation} />
       <Number caption="Result" number={result} onChange={setResult}/>
    </div>
  )
}

export default App;
