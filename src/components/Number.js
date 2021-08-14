import Bits from "./Bits"

function Number(props) {
    return (
        <div className="column">
            <div className="row">
                <div className="row">
                    <label className="number__label">{props.caption}</label>
                    <input className="number__input" type="text" value={props.number} onInput={(e) => { props.onChange(e.target.value) }} />
                </div>
                <div className="row">
                    <button className="number__operation" onClick={(e) => { props.onChange(props.number - 1) }}>-</button>
                    <button className="number__operation" onClick={(e) => { props.onChange(props.number + 1) }}>+</button>
                    <button className="number__operation" onClick={(e) => { props.onChange(~props.number) }}>i</button>
                    <button className="number__operation" onClick={(e) => { props.onChange(0) }}>c</button>
                    <button className="number__operation" onClick={(e) => { props.onChange(props.number << 1) }}>&lt;</button>
                    <button className="number__operation" onClick={(e) => { props.onChange(props.number >> 1) }}>&gt;</button>
                </div>
            </div>
            <div className="column">
                <tr className="row">
                    <Bits number={props.number} onChange={props.onChange}/>
                </tr>
            </div>
        </div>
    )
}

export default Number