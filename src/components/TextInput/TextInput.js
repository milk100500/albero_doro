import s from './styleTextInput.module.css'
import {useEffect, useState} from 'react'

const TextInput = (props) => {
    const [valueInput, setValueInput] = useState(null);

    function newValue(event){
        props.changeElem(props.type, event.target.value)
        setValueInput(event.target.value)
    }

    function renderInput(a, height) {
        if (a === 'input'){
            return <div className={s.border}><input value={valueInput} onChange={newValue} style={{height: height}}/></div>
        } else return <div style={{height: '200px'}} value={valueInput} className={s.border}><textarea onChange={newValue} style={{height: height, resize: 'none'}}/></div>
    }

    return (
        <div className={s.main}>
            <div className={s.name}>
                <span>{props.children}</span>
            </div>
            <div className={s.input}>
                {renderInput(props.el, props.height)}
            </div>
        </div>
    )
}

export default TextInput;