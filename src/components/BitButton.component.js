import { useEffect, useState } from "react"

function BitButton(props) {
    const [state, setState] = useState(props.state)

    useEffect(() => {
        if (props.setBit) {
            props.setBit(state)
        }
    })
    return <button class={state ? 'bit-on' : 'bit-off' } onClick={e => {setState(!state)}}>{props.name}</button>
}

export default BitButton