const NotationEnum = {
    Hex: 16,
    Dec: 10,
    Oct: 8
}

function Notation (props) {
    return (
        <div>
            <div class="row center">
                <div class="notation">
                    <input type="radio" checked={props.notation === NotationEnum.Oct} onClick={(e) => { props.onChange(NotationEnum.Oct) }} /><label>OCT</label>
                </div>
                <div class="notation">
                    <input type="radio" checked={props.notation === NotationEnum.Dec} onClick={(e) => { props.onChange(NotationEnum.Dec) }}/><label>DEC</label>
                </div>
                <div class="notation">
                    <input type="radio" checked={props.notation === NotationEnum.Hex} onClick={(e) => { props.onChange(NotationEnum.Hex) }}/><label>HEX</label>
                </div>
            </div>
        </div>
    )
}

function toString (number, notation) {
    return number.toString(notation)
}

function toNumber (number, notation) {
    return parseInt(number, notation)
}

export { Notation, NotationEnum, toString, toNumber }