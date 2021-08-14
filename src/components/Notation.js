const NotationEnum = {
    Hex: 1,
    Dec: 2,
    Oct: 3
}

function Notation(props) {
    return (
        <div>
            <div class="row center">
                <div class="notation">
                    <input type="radio" checked={props.notation === NotationEnum.Dec} onClick={(e) => { props.onChange(NotationEnum.Dec) }}/><label>DEC</label>
                </div>
                <div class="notation">
                    <input type="radio" disabled="true" checked={props.notation === NotationEnum.Hex} onClick={(e) => { props.onChange(NotationEnum.Hex) }}/><label>HEX</label>
                </div>
                <div class="notation">
                    <input type="radio" disabled="true" checked={props.notation === NotationEnum.Oct} onClick={(e) => { props.onChange(NotationEnum.Oct) }} /><label>OCT</label>
                </div>
            </div>
        </div>
    )
}

export { Notation, NotationEnum }