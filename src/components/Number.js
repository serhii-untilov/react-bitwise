import Bits from './Bits'
import { toString, toNumber } from './Notation'

function Number(props) {
    return (
        <div className="column">
            <div className="row">
                <div className="row">
                    <label className="number__label"><h2>{props.caption}</h2></label>
                    <h2><input className="number__input"
                        type="text"
                        value={ toString((props.number) >>> 0, props.notation) }
                        onInput={ (e) => props.onChange(toNumber(e.target.value, props.notation)) }
                        onFocus={ (e) => e.target.select() }
                    /></h2>
                </div>
                <div className="row">
                    <button className="number__operation" onClick={(e) => { props.onChange(props.number - 1) }}>-</button>
                    <button className="number__operation" onClick={(e) => { props.onChange(props.number + 1) }}>+</button>
                    <button className="number__operation" onClick={(e) => { props.onChange(~props.number) }}>i</button>
                    <button className="number__operation" onClick={(e) => { props.onChange(0) }}>c</button>
                    <button className="number__operation" onClick={(e) => { props.onChange(props.number << 1) }}>&lt;</button>
                    <button className="number__operation" onClick={(e) => { props.onChange(props.number >>> 1) }}>&gt;</button>
                </div>
            </div>
            <div className="column">
                <div className="row">
                    <Bits number={props.number} onChange={props.onChange}/>
                </div>
            </div>
        </div>
    )
}

export default Number