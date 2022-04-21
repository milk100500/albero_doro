import s from './styleButton.module.css'

const Button = ({pad, cursor='auto', changeActiveModalMessage, changeMoveHover, children}) => {
    return (
        <div onClick={changeActiveModalMessage} onMouseEnter={changeMoveHover} onMouseLeave={changeMoveHover} className={s.button} style={{padding: pad, cursor: cursor}}>
            <span className={s.text}>{children}</span>
        </div>
    )
}

export default Button;