import s from './styleFooter.module.css'

const Footer = () => {

    return (
        <footer className={s.footer}>
            <div className={s.questions}>
                <span>Остались вопросы? Затрудняетесь с выбором?</span>
            </div>
            <div className={s.content}>
                <div className={s.info}>
                    <p><b>отдел продаж:</b> snellee@mail.ru, <a href="tel:89056518547">8-905-651-85-47</a>, <a href="tel:89102408430">8-910-240-84-30</a></p>
                    <p><b>производство:</b> lev_vrn@mail.ru, <a href="tel:89601057179">8-960-105-71-79</a>, <a href="tel:89102455799">8-910-245-57-99</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;