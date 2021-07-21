function BitButton(props) {
    return <button
        class={props.state ? 'bit-button bit-on' : 'bit-button bit-off'}
        onClick={props.onClick}>
        {props.name}
    </button>
}

export default BitButton