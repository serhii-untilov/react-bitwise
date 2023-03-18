import { Bit } from "./Bit"

function Bits(props) {
    const bits = []
    for (let n = 31; n >= 0; n--) {
        bits.push(
            <td>
                <Bit
                    key={n.toString()}
                    name={n}
                    number={props.number}
                    onChange={props.onChange}
                />
            </td>
        )
        if (n && n % 4 === 0) {
            bits.push(<td class="bit-space"></td>)
        }
    }
    return bits
}

export default Bits