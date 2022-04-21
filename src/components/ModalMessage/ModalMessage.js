import s from './styleModalMessage.module.css'
import sadEmoji from '../../contentForComponents/contentModalMessage/pngwing.com.png'
import Button from "../Button/Button";
import {useState} from "react";

const ModalMessage = (props) => {
    const styleActive = s.container + ' ' + s.active
    const styleActiveWindow = s.content + ' ' + s.activeWindow
    const [moveHover, setMoveHover] = useState(false)

    function changeMoveHover() {
        setMoveHover(!moveHover)
    }

    return (
        <div onClick={e => {
            e.stopPropagation()
        }} className={props.activeModalMessage ? styleActive : s.container}>
            <div className={props.activeModalMessage ? styleActiveWindow : s.content}>
                <div className={s.image}>
                    <img style={{transform: moveHover ? 'rotate(180deg)' : 'none'}} src={sadEmoji}/>
                </div>
                <div className={s.message}>
                    <h2>Что-то пошло не так...</h2>
                    <span>{ props.message }</span>
                </div>
                <div className={s.button}>
                    <Button changeActiveModalMessage={props.changeActiveModalMessage} cursor={'pointer'}
                            changeMoveHover={changeMoveHover} pad={'15px 45px'}>
                        Понятно
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ModalMessage