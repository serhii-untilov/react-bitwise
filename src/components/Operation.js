const OperationEnum = {
    AND: 0,
    NOT: 1,
    OR: 2,
    XOR: 3
  }

function Operation(props) {
    return (
        <div>
            <div class="row center">
              <div class="operation">
                <input type="radio" checked={props.operation === OperationEnum.AND} onClick={(e) => { props.onChange(OperationEnum.AND) }} /><label>AND</label>
              </div>
              <div class="operation">
                <input type="radio" checked={props.operation === OperationEnum.OR} onClick={(e) => { props.onChange(OperationEnum.OR) }} /><label>OR</label>
              </div>
              <div class="operation">
                <input type="radio" checked={props.operation === OperationEnum.XOR} onClick={(e) => { props.onChange(OperationEnum.XOR) }} /><label>XOR</label>
              </div>
              <div class="operation">
                <input type="radio" checked={props.operation === OperationEnum.NOT} onClick={(e) => { props.onChange(OperationEnum.NOT) }} /><label>NOT</label>
              </div>
              <button className="operation__button" onClick={(e) => { props.swap() }}>Swap</button>
            </div>
        </div>
    )
}

function calculate(value1, value2, operation) {
    switch (operation) {
      case OperationEnum.AND:
        return value1 & value2
      case OperationEnum.NOT:
        return value1 & ~value2
      case OperationEnum.OR:
        return value1 | value2
      case OperationEnum.XOR:
        return value1 ^ value2
      default:
        return 0
    }
}

export { Operation, OperationEnum, calculate }