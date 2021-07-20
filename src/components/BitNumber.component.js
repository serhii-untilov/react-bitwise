import { useState } from "react"
import BitButton from "./BitButton.component"

function BitNumber(props) {
    const [bitNumber, setBitNumber] = useState(0)
    const caption = props.caption

    function setBit(num, mask, state) {
        return state ? num |= mask : num &= ~mask
    }

    return (
        <div>
            <div class="row">
                <div class="left">{caption}</div>
                <div class="right"><input class="bit-input" type="text" value={bitNumber} onInput={(e) => { setBitNumber(e.target.value) }} /></div>
            </div>
            <div>
                <tr>
                    <td><BitButton name="31" state={bitNumber & 0x80000000 ? 1 : 0} setBit={(s) => {setBit(bitNumber, 0x80000000, s)}} /></td>
                    <td>{bitNumber & 0x40000000 ? 1 : 0}</td>
                    <td>{bitNumber & 0x20000000 ? 1 : 0}</td>
                    <td>{bitNumber & 0x10000000 ? 1 : 0}</td>
                    <td>{bitNumber & 0x08000000 ? 1 : 0}</td>
                    <td>{bitNumber & 0x04000000 ? 1 : 0}</td>
                    <td>{bitNumber & 0x02000000 ? 1 : 0}</td>
                    <td>{bitNumber & 0x01000000 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00800000 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00400000 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00200000 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00100000 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00080000 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00040000 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00020000 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00010000 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00008000 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00004000 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00002000 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00001000 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00000800 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00000400 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00000200 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00000100 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00000080 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00000040 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00000020 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00000010 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00000008 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00000004 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00000002 ? 1 : 0}</td>
                    <td>{bitNumber & 0x00000001 ? 1 : 0}</td>
                </tr>
            </div>
        </div>
    )
}

export default BitNumber