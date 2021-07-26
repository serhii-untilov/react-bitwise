import { useState } from "react"
import BitButton from "./BitButton.component"

function BitNumber(props) {
    const caption = props.caption
    const [bitNumber, setBitNumber] = useState(0)
    const [stack, setStack] = useState([bitNumber])

    function setBit(mask) {
        store()
        setBitNumber((bitNumber & mask) ? (bitNumber & (~mask)) : (bitNumber | mask))
    }

    function shiftLeft() {
        store()
        setBitNumber(bitNumber << 1)
    }

    function shiftRight() {
        store()
        setBitNumber(bitNumber >> 1)
    }

    function inverse() {
        store()
        setBitNumber(~bitNumber)
    }

    function clear() {
        store()
        setBitNumber(0)
    }

    function store() {
        stack.push(bitNumber)
        setStack(stack)
    }

    function restore() {
        setBitNumber(stack.pop() || 0)
        setStack(stack)
    }

    return (
        <div>
            <div class="row">
                <div class="bit-header">{caption}</div>
            </div>
            <div class="row">
                <div class="left"><input class="bit-input" type="text" value={bitNumber} onInput={(e) => { setBitNumber(e.target.value) }} /></div>
                <div class="right"><button class="operation" onClick={(e) => { inverse() }}>Inverse</button></div>
                <div class="right"><button class="operation" onClick={(e) => { clear() }}>Clear</button></div>
                <div class="right"><button class="operation" onClick={(e) => { shiftLeft() }}>&lt;&lt;</button></div>
                <div class="right"><button class="operation" onClick={(e) => { shiftRight() }}>&gt;&gt;</button></div>
                <div class="right"><button class="operation" onClick={(e) => { restore() }}>Restore</button></div>

            </div>
            <div>
                <tr>
                    <td><BitButton name="31" state={bitNumber & 0x80000000} onClick={(e) => {setBit(0x80000000)}} /></td>
                    <td><BitButton name="30" state={bitNumber & 0x40000000} onClick={(e) => {setBit(0x40000000)}} /></td>
                    <td><BitButton name="29" state={bitNumber & 0x20000000} onClick={(e) => {setBit(0x20000000)}} /></td>
                    <td><BitButton name="28" state={bitNumber & 0x10000000} onClick={(e) => { setBit(0x10000000) }} /></td>
                    <td class="bit-space"></td>
                    <td><BitButton name="27" state={bitNumber & 0x08000000} onClick={(e) => {setBit(0x08000000)}} /></td>
                    <td><BitButton name="26" state={bitNumber & 0x04000000} onClick={(e) => {setBit(0x04000000)}} /></td>
                    <td><BitButton name="25" state={bitNumber & 0x02000000} onClick={(e) => {setBit(0x02000000)}} /></td>
                    <td><BitButton name="24" state={bitNumber & 0x01000000} onClick={(e) => { setBit(0x01000000) }} /></td>
                    <td class="bit-space"></td>
                    <td><BitButton name="23" state={bitNumber & 0x00800000} onClick={(e) => {setBit(0x00800000)}} /></td>
                    <td><BitButton name="22" state={bitNumber & 0x00400000} onClick={(e) => {setBit(0x00400000)}} /></td>
                    <td><BitButton name="21" state={bitNumber & 0x00200000} onClick={(e) => {setBit(0x00200000)}} /></td>
                    <td><BitButton name="20" state={bitNumber & 0x00100000} onClick={(e) => { setBit(0x00100000) }} /></td>
                    <td class="bit-space"></td>
                    <td><BitButton name="19" state={bitNumber & 0x00080000} onClick={(e) => {setBit(0x00080000)}} /></td>
                    <td><BitButton name="18" state={bitNumber & 0x00040000} onClick={(e) => {setBit(0x00040000)}} /></td>
                    <td><BitButton name="17" state={bitNumber & 0x00020000} onClick={(e) => {setBit(0x00020000)}} /></td>
                    <td><BitButton name="16" state={bitNumber & 0x00010000} onClick={(e) => { setBit(0x00010000) }} /></td>
                    <td class="bit-space"></td>
                    <td><BitButton name="15" state={bitNumber & 0x00008000} onClick={(e) => {setBit(0x00008000)}} /></td>
                    <td><BitButton name="14" state={bitNumber & 0x00004000} onClick={(e) => {setBit(0x00004000)}} /></td>
                    <td><BitButton name="13" state={bitNumber & 0x00002000} onClick={(e) => {setBit(0x00002000)}} /></td>
                    <td><BitButton name="12" state={bitNumber & 0x00001000} onClick={(e) => { setBit(0x00001000) }} /></td>
                    <td class="bit-space"></td>
                    <td><BitButton name="11" state={bitNumber & 0x00000800} onClick={(e) => {setBit(0x00000800)}} /></td>
                    <td><BitButton name="10" state={bitNumber & 0x00000400} onClick={(e) => {setBit(0x00000400)}} /></td>
                    <td><BitButton name="9"  state={bitNumber & 0x00000200} onClick={(e) => {setBit(0x00000200)}} /></td>
                    <td><BitButton name="8" state={bitNumber & 0x00000100} onClick={(e) => { setBit(0x00000100) }} /></td>
                    <td class="bit-space"></td>
                    <td><BitButton name="7"  state={bitNumber & 0x00000080} onClick={(e) => {setBit(0x00000080)}} /></td>
                    <td><BitButton name="6"  state={bitNumber & 0x00000040} onClick={(e) => {setBit(0x00000040)}} /></td>
                    <td><BitButton name="5"  state={bitNumber & 0x00000020} onClick={(e) => {setBit(0x00000020)}} /></td>
                    <td><BitButton name="4" state={bitNumber & 0x00000010} onClick={(e) => { setBit(0x00000010) }} /></td>
                    <td class="bit-space"></td>
                    <td><BitButton name="3"  state={bitNumber & 0x00000008} onClick={(e) => {setBit(0x00000008)}} /></td>
                    <td><BitButton name="2"  state={bitNumber & 0x00000004} onClick={(e) => {setBit(0x00000004)}} /></td>
                    <td><BitButton name="1"  state={bitNumber & 0x00000002} onClick={(e) => {setBit(0x00000002)}} /></td>
                    <td><BitButton name="0"  state={bitNumber & 0x00000001} onClick={(e) => {setBit(0x00000001)}} /></td>
                </tr>
            </div>
        </div>
    )
}

export default BitNumber