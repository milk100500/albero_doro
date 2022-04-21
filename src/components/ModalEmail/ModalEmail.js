import s from './styleModalEmail.module.css'
import TextInput from '../TextInput/TextInput'
import { mail } from "../../contentForComponents/svg/ExportSVG";
import Phones from "../Phones/Phones";
import { useState, useEffect } from 'react';
import ModalMessage from "../ModalMessage/ModalMessage";
import { messages } from '../../contentForComponents/messageContent/messageContent'

const ModalEmail = ({activeModal, changeActiveModal}) => {
    const styleActive = s.container + ' ' + s.active
    const styleActiveWindow = s.content + ' ' + s.active_window
    const [sendData, setSendData] = useState({"name": undefined, "email": undefined, "phone": undefined, "message": undefined})
    const [activeModalMessage, setActiveModalMessage] = useState(false)
    const [message, setMessage] = useState(undefined)

    function changeActiveModalMessage() {
        setActiveModalMessage(!activeModalMessage)
    }

    function changeElem(elem, newElem){
        sendData[elem] = newElem;
    }


    function sendEmail () {
        fetch('http://albero-doro.ru:3000/api/send', {
            method: 'POST',
            body: JSON.stringify(sendData)
        }).then((response) => {
            if (response.status !== 200){
                changeActiveModal()
            } else {
                setMessage(messages['noServer'])
                changeActiveModalMessage()
            }
        }).catch(() => {
            setMessage(messages['noServer'])
            changeActiveModalMessage()
        })
    }

    return (

        <div onClick={changeActiveModal} className={activeModal ? styleActive : s.container} style={{cursor: activeModalMessage ? 'auto' : 'pointer'}}>
            <ModalMessage message={message} activeModalMessage={activeModalMessage} changeActiveModalMessage={changeActiveModalMessage}/>
            <div onClick={e => {e.stopPropagation()}} className={activeModal ? styleActiveWindow : s.content}>
                <div className={s.inputs}>
                    <TextInput sendData={sendData['name']} changeElem={changeElem} type={'name'} el={'input'} height={40}>
                        Имя
                    </TextInput>
                    <TextInput changeElem={changeElem} type={'email'} el={'input'} height={40}>
                        Почта
                    </TextInput>
                    <TextInput changeElem={changeElem} type={'phone'} el={'input'} height={40}>
                        Телефон
                    </TextInput>
                    <TextInput changeElem={changeElem} type={'message'} el={'textarea'} height={175}>
                        *Сообщение
                    </TextInput>
                </div>
                <div className={s.right}>
                    <div className={s.top_content}>
                        <Phones/>
                        <div className={s.email}>
                            {mail}
                            <span>snellee@mail.ru</span>
                        </div>
                    </div>
                    <div className={s.bottom_content}>
                        <span onClick={sendEmail} className={s.send}>Отправить</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalEmail;