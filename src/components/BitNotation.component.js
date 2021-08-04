import { useState } from "react"

const Notation = {
    Hex: 0,
    Dec: 1,
    Oct: 2
  }
  
function BitNotation(props) {
    const [operation, setOperation] = useState(props.operation)
    
    return (
        <div>
            <div class="row">
                <div class="left"><input type="radio" class="operation" onClick={(e) => {}}/><label>HEX</label></div>
                <div class="left"><input type="radio" class="operation" onClick={(e) => {}}/><label>DEC</label></div>
                <div class="left"><input type="radio" class="operation" onClick={(e) => {}}/><label>OCT</label></div>
            </div>
        </div>
    )
}

export { Notation, BitNotation }