import { Bit } from "./Bit"

function Bits(props) {
    const bits = []
    let key = 0
    for (let n = 31; n >= 0; n--) {
        bits.push(
            // <div>
                <Bit
                    key={key}
                    name={n}
                    number={props.number}
                    onChange={props.onChange}
                />
            // </div>
        )
        key++
        if (n && n % 4 === 0) {
            bits.push(<div key={key} className="bit-space"></div>)
            key++
        }

    }
    return bits
}

export default Bits