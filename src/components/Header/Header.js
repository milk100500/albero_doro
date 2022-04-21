import s from './styleHeader.module.css'
import Phones from "../Phones/Phones";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';


const Header = ({activePage}) => {
    const [activePopUp, setActivePopUp] = useState(false);
    const styleStandart = s.active + ' ' + s.standart_a
    const [activeBurger, setActiveBurger] = useState(false)

    const changeMobileVersion = () => {
        setActiveBurger(!activeBurger)
    }

    const toggleActivePopUp = () => {
        setActivePopUp(!activePopUp)
    }
    function bacgroundColor() {
        if (activePage === 1){
            document.querySelector('body').style.background = 'linear-gradient(0deg, #C1F499 0%, #6FF0D1 104.71%)'
        }
        if (activePage === 2){
            document.querySelector('body').style.background = 'linear-gradient(180deg, #8EEABE 0%, #6FF0B2 109.21%)'
        }
        if (activePage === 3){
            document.querySelector('body').style.background = 'linear-gradient(180deg, #8EEABE 0%, #B5F4A2 100%)'
        }
        if (activePage === 4){
            document.querySelector('body').style.background = 'linear-gradient(180deg, #B6F4A1 -43.33%, #6FF0B2 109.21%)'
        }
    }

    useEffect(bacgroundColor)

    return (
        <header className={s.header}>
                <div onClick={changeMobileVersion} className={s.burger} style={{background: activeBurger ? '#6FF0D1' : 'none'}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={s.menu} style={{opacity: activeBurger ? '1' : '0'}}>
                    <li>
                        <Link to={'/'} className={activePage === 1 ? styleStandart : s.standart_a}>Главная</Link>
                    </li>
                    <li className={s.list}>
                        <Link onMouseEnter={toggleActivePopUp} to={{pathname: "/products", productsType: 'Бытовая химия'}} className={activePage === 2 ? styleStandart : s.standart_a}>Продукция</Link>
                        { activePopUp ?
                            <div onMouseLeave={toggleActivePopUp} className={s.popup}>
                                <Link to={{pathname: "/products", productsType: 'Бытовая химия'}} className={s.type}><span>Бытовая</span><span>химия</span></Link>
                                <Link to={{pathname: "/products", productsType: 'Профессиональная химия'}} className={s.type}><span>Профессиональная</span><span>химия</span></Link>
                                <Link to={{pathname: "/products", productsType: 'Автохимия'}} className={s.type}><span>Автохимия</span></Link>
                            </div>
                            : null
                        }
                    </li>
                    <li>
                        <Link to={"/cooperation"} className={activePage === 3 ? styleStandart : s.standart_a}>Сотрудничество</Link>
                    </li>
                    <li>
                        <Link to={'/certificatesContent'} className={activePage === 4 ? styleStandart : s.standart_a}>Сертификаты</Link>
                    </li>
                </ul>
                <Phones/>
        </header>
    )
}

export default Header