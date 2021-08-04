const Operation = {
    AND: 0,
    NOT: 1,
    OR: 2,
    XOR: 3
  }

function BitOperations(props) {
    return (
        <div>
            <div class="row">
                <div class="left"><input type="radio" class="operation" checked={props.operation === Operation.AND} onClick={(e) => {props.onChange(Operation.AND)}}/><label>AND</label></div>
                <div class="left"><input type="radio" class="operation" checked={props.operation === Operation.NOT} onClick={(e) => {props.onChange(Operation.NOT)}}/><label>NOT</label></div>
                <div class="left"><input type="radio" class="operation" checked={props.operation === Operation.OR } onClick={(e) => {props.onChange(Operation.OR )}}/><label>OR </label></div>
                <div class="left"><input type="radio" class="operation" checked={props.operation === Operation.XOR} onClick={(e) => {props.onChange(Operation.XOR)}}/><label>XOR</label></div>
            </div>
        </div>
    )
}

function calculate(value1, value2, operation) {
    switch (operation) {
      case Operation.AND:
        return value1 & value2
      case Operation.NOT:
        return value1 & ~value2
      case Operation.OR:
        return value1 | value2
      case Operation.XOR:
        return value1 ^ value2
      default:
        return 0
    }
}

export { Operation, BitOperations, calculate }