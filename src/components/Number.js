import Bit from "./Bit"

function Number(props) {
    return (
        <div className="column">
            <div className="row">
                <div className="row">
                    <label className="number__label">{props.caption}</label>
                    <input className="number__input" type="text" value={props.number} onInput={(e) => { props.onChange(e.target.value) }} />
                </div>
                <div className="row">
                    <button className="number__operation" onClick={(e) => { props.onChange(props.number - 1) }}>-</button>
                    <button className="number__operation" onClick={(e) => { props.onChange(props.number + 1) }}>+</button>
                    <button className="number__operation" onClick={(e) => { props.onChange(~props.number) }}>*</button>
                    <button className="number__operation" onClick={(e) => { props.onChange(0) }}></button>
                    <button className="number__operation" onClick={(e) => { props.onChange(props.number << 1) }}>&lt;</button>
                    <button className="number__operation" onClick={(e) => { props.onChange(props.number >> 1) }}>&gt;</button>
                </div>
            </div>
            <div className="column">
                <tr className="row">
                    <td><Bit name="31" state={getBit(props.number, 31)} onClick={(e) => { props.onChange(swapBit(props.number, 31)) }} /></td>
                    <td><Bit name="30" state={getBit(props.number, 30)} onClick={(e) => { props.onChange(swapBit(props.number, 30)) }} /></td>
                    <td><Bit name="29" state={getBit(props.number, 29)} onClick={(e) => { props.onChange(swapBit(props.number, 29)) }} /></td>
                    <td><Bit name="28" state={getBit(props.number, 28)} onClick={(e) => { props.onChange(swapBit(props.number, 28)) }} /></td>
                    <td class="bit-space"></td>
                    <td><Bit name="27" state={getBit(props.number, 27)} onClick={(e) => { props.onChange(swapBit(props.number, 27)) }} /></td>
                    <td><Bit name="26" state={getBit(props.number, 26)} onClick={(e) => { props.onChange(swapBit(props.number, 26)) }} /></td>
                    <td><Bit name="25" state={getBit(props.number, 25)} onClick={(e) => { props.onChange(swapBit(props.number, 25)) }} /></td>
                    <td><Bit name="24" state={getBit(props.number, 24)} onClick={(e) => { props.onChange(swapBit(props.number, 24)) }} /></td>
                    <td class="bit-space"></td>
                    <td><Bit name="23" state={getBit(props.number, 23)} onClick={(e) => { props.onChange(swapBit(props.number, 23)) }} /></td>
                    <td><Bit name="22" state={getBit(props.number, 22)} onClick={(e) => { props.onChange(swapBit(props.number, 22)) }} /></td>
                    <td><Bit name="21" state={getBit(props.number, 21)} onClick={(e) => { props.onChange(swapBit(props.number, 21)) }} /></td>
                    <td><Bit name="20" state={getBit(props.number, 20)} onClick={(e) => { props.onChange(swapBit(props.number, 20)) }} /></td>
                    <td class="bit-space"></td>
                    <td><Bit name="19" state={getBit(props.number, 19)} onClick={(e) => { props.onChange(swapBit(props.number, 19)) }} /></td>
                    <td><Bit name="18" state={getBit(props.number, 18)} onClick={(e) => { props.onChange(swapBit(props.number, 18)) }} /></td>
                    <td><Bit name="17" state={getBit(props.number, 17)} onClick={(e) => { props.onChange(swapBit(props.number, 17)) }} /></td>
                    <td><Bit name="16" state={getBit(props.number, 16)} onClick={(e) => { props.onChange(swapBit(props.number, 16)) }} /></td>
                    <td class="bit-space"></td>
                    <td><Bit name="15" state={getBit(props.number, 15)} onClick={(e) => { props.onChange(swapBit(props.number, 15)) }} /></td>
                    <td><Bit name="14" state={getBit(props.number, 14)} onClick={(e) => { props.onChange(swapBit(props.number, 14)) }} /></td>
                    <td><Bit name="13" state={getBit(props.number, 13)} onClick={(e) => { props.onChange(swapBit(props.number, 13)) }} /></td>
                    <td><Bit name="12" state={getBit(props.number, 12)} onClick={(e) => { props.onChange(swapBit(props.number, 12)) }} /></td>
                    <td class="bit-space"></td>
                    <td><Bit name="11" state={getBit(props.number, 11)} onClick={(e) => { props.onChange(swapBit(props.number, 11)) }} /></td>
                    <td><Bit name="10" state={getBit(props.number, 10)} onClick={(e) => { props.onChange(swapBit(props.number, 10)) }} /></td>
                    <td><Bit name="9"  state={getBit(props.number, 9 )} onClick={(e) => { props.onChange(swapBit(props.number, 9 )) }} /></td>
                    <td><Bit name="8"  state={getBit(props.number, 8 )} onClick={(e) => { props.onChange(swapBit(props.number, 8 )) }} /></td>
                    <td class="bit-space"></td>
                    <td><Bit name="7"  state={getBit(props.number, 7 )} onClick={(e) => { props.onChange(swapBit(props.number, 7 )) }} /></td>
                    <td><Bit name="6"  state={getBit(props.number, 6 )} onClick={(e) => { props.onChange(swapBit(props.number, 6 )) }} /></td>
                    <td><Bit name="5"  state={getBit(props.number, 5 )} onClick={(e) => { props.onChange(swapBit(props.number, 5 )) }} /></td>
                    <td><Bit name="4"  state={getBit(props.number, 4 )} onClick={(e) => { props.onChange(swapBit(props.number, 4 )) }} /></td>
                    <td class="bit-space"></td>
                    <td><Bit name="3"  state={getBit(props.number, 3 )} onClick={(e) => { props.onChange(swapBit(props.number, 3 )) }} /></td>
                    <td><Bit name="2"  state={getBit(props.number, 2 )} onClick={(e) => { props.onChange(swapBit(props.number, 2 )) }} /></td>
                    <td><Bit name="1"  state={getBit(props.number, 1 )} onClick={(e) => { props.onChange(swapBit(props.number, 1 )) }} /></td>
                    <td><Bit name="0"  state={getBit(props.number, 0 )} onClick={(e) => { props.onChange(swapBit(props.number, 0 )) }} /></td>
                </tr>
            </div>
        </div>
    )
}

function setBit(number, bit, value) {
    if (value) {
        return number |= (1 << bit)
    }
    return number &= ~(1 << bit)
}

function getBit(number, bit) { 
    return number & (1 << bit) ? true : false
}

function swapBit(number, bit) {
    return setBit(number, bit, !getBit(number, bit))
}

export { Number, setBit, getBit, swapBit }