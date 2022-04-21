import s from './styleLogo.module.css'
import Button from "../Button/Button";



const Logo = ({changeActiveModal}) => {
    return (
        <section className={s.container}>
            <section className={s.top}>
                <div className={s.albero}>
                    <h1>Albero D’oro</h1>
                </div>
                <div onClick={changeActiveModal} className={s.send}>
                    <span>Оставить заявку</span>
                </div>
            </section>
            <section className={s.bottom}>
                <div className={s.spray}>
                    <Button pad="23px 40px">
                        <span>Более <b>10</b> лет</span>
                    </Button>
                    <span className={s.textSpray}>производим лучшие средства профессиональной,<br/>бытовой химии и автохимии</span>
                </div>
                <svg className={s.figure} viewBox="0 0 1644 848" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 328C0 300.386 22.3858 278 50 278H686.968C907.882 278 1086.97 457.086 1086.97 678V797C1086.97 824.614 1064.58 847 1036.97 847H50C22.3857 847 0 824.614 0 797V328Z" fill="#BFFFE0" fill-opacity="0.66"/>
                    <path d="M1350.3 760C1290.87 760 1281 848 1122.61 848V646C1122.61 478 963.905 326.512 928.576 310C1158.24 328 1267.14 596 1350.3 596C1416.82 596 1399.79 426 1399.79 356H1447.31V278H1556.21V356H1599.76V848H1399.79C1399.79 813.5 1399.79 760 1350.3 760Z" fill="#BFFFE0" fill-opacity="0.75"/>
                    <path d="M1491.74 233.569C1495.68 240.065 1505.14 239.962 1508.95 233.382L1634.83 15.5028C1638.68 8.83612 1633.87 0.5 1626.17 0.5H1368.01C1360.22 0.5 1355.42 9.02524 1359.47 15.6895L1491.74 233.569Z" fill="#BFFFE0" fill-opacity="0.66"/>
                </svg>
            </section>
        </section>
    )
}

export default Logo;