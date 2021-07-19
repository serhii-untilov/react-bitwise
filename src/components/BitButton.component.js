import { useState } from "react"

function BitButton(props) {
    const [state, setState] = useState(props.state)
    return <button class={state ? 'bit-on' : 'bit-off' } onClick={e => {setState(!state)}}>{state ? 1 : 0}</button>
}

export default BitButton