function Bit(props) {
    return <button
        class={getBit(props.number, Number(props.name)) ? 'bit-button bit-on' : 'bit-button bit-off'}
        onClick={(e) => { props.onChange(swapBit(props.number, Number(props.name))) }}>
        {props.name}
    </button>
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

export { Bit, setBit, getBit, swapBit }
