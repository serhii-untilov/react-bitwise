import { useState } from "react"

function BitNumber(props) {
    const [bitNumber, setBitNumber] = useState(0)
    const caption = props.caption

    return (
        <div>
            <tr>
                <th>{caption}</th>
                <th>31&nbsp;</th>
                <th>30&nbsp;</th>
                <th>29&nbsp;</th>
                <th>28&nbsp;</th>
                <th>27&nbsp;</th>
                <th>26&nbsp;</th>
                <th>25&nbsp;</th>
                <th>24&nbsp;</th>
                <th>23&nbsp;</th>
                <th>22&nbsp;</th>
                <th>21&nbsp;</th>
                <th>20&nbsp;</th>
                <th>19&nbsp;</th>
                <th>18&nbsp;</th>
                <th>17&nbsp;</th>
                <th>16&nbsp;</th>
                <th>15&nbsp;</th>
                <th>14&nbsp;</th>
                <th>13&nbsp;</th>
                <th>12&nbsp;</th>
                <th>11&nbsp;</th>
                <th>10&nbsp;</th>
                <th>&nbsp;9&nbsp;</th>
                <th>&nbsp;8&nbsp;</th>
                <th>&nbsp;7&nbsp;</th>
                <th>&nbsp;6&nbsp;</th>
                <th>&nbsp;5&nbsp;</th>
                <th>&nbsp;4&nbsp;</th>
                <th>&nbsp;3&nbsp;</th>
                <th>&nbsp;2&nbsp;</th>
                <th>&nbsp;1&nbsp;</th>
                <th>&nbsp;0&nbsp;</th>
            </tr>
            <tr>
                <td><input type="text" value={bitNumber} onInput={(e) => {setBitNumber(e.target.value)}} /></td>
                <td>{bitNumber & 0x80000000 ? 1 : 0}</td>
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
    )
}

export default BitNumber