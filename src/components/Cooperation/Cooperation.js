import s from './styleCooperation.module.css'
import Header from "../Header/Header";
import Button from "../Button/Button";
import SectionWindow from "../SectionWindow/SectionWindow";
import { windowText } from "../../contentForComponents/mainPageContent/mainPageContent";
import { typeText, cooperationCityText } from "../../contentForComponents/cooperationContent/cooperationContent";

const Cooperation = () => {
    return (
        <>
            <Header activePage={3}/>
            <div className={s.container}>
                <div className={s.head_text}>
                    <span>Приглашаем к сотрудничеству</span>
                </div>
                <div className={s.content_top}>
                    <section className={s.window}>
                        <SectionWindow paddingButton={'20px 40px'} alignStart={true} windowText={windowText['text3']}>
                            Вы можете стать <b>партнером</b> НПК ООО “Альберо Доро”, если:
                        </SectionWindow>
                    </section>
                    <section className={s.dealers}>
                        <div className={s.button}>
                            <Button pad={'25px'}><b>Наши дилеры</b></Button>
                        </div>
                        <div className={s.info}>
                            <p>ООО “Торговый дом НАВИ”, г. Липецк, ул. Опытная, д. 8, оф. 302</p>
                            <p><b>тел</b>: <a href="tel:+79002842226">+7 (900) 284-22-26</a>, <a
                                href="tel:+79042842226">+7 (900) 284-22-26</a></p>
                            <p><b>tdnavi@mail.ru</b></p>
                        </div>
                    </section>
                </div>
                <div className={s.company}>
                    <div className={s.companyText}>
                        <span>Компания "Альберо Доро" заинтересована в развитии сети дилеров по направлениям:</span>
                    </div>
                    <ul className={s.companyList}>
                        {typeText.map((obj, index) => <li key={ index }><span>{ obj }</span></li>)}
                    </ul>
                </div>
                <div className={s.contentBottom}>
                    <div className={s.textBottom}>
                        { cooperationCityText.map((obj,index) => <p key={index}>{ obj }</p>) }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cooperation;