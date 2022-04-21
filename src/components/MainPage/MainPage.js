import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import s from './styleMainPage.module.css'
import Footer from '../Footer/Footer';
import ModalEmail from "../ModalEmail/ModalEmail";
import { useState } from 'react'
import SectionWindow from "../SectionWindow/SectionWindow";
import { windowText } from "../../contentForComponents/mainPageContent/mainPageContent"
import ModalMessage from "../ModalMessage/ModalMessage";

const MainPage = () => {
    const [activeModal, setActiveModal] = useState(false);

    function changeActiveModal() {
        setActiveModal(!activeModal)
        // if (activeModal === false) {
        //     document.body.style.overflow = "hidden"
        // } else {
        //     document.body.style.overflow = "auto"
        // }
    }

    return (
        <>
            <ModalEmail activeModal={activeModal} setActiveModal={setActiveModal} changeActiveModal={changeActiveModal}/>
            <Header activePage={1}/>
            <div className={s.container}>
                <div className={s.windows}>
                    <Logo changeActiveModal={changeActiveModal}/>
                    <section className={s.windowLeft}>
                        <div className={s.windowLeftContent}>
                            <SectionWindow paddingButton={"10px 40px"} alignStart={true} windowText={windowText['text1']}>
                                <span>Почему <b>Albero D’oro</b>?</span>
                            </SectionWindow>
                        </div>
                    </section>
                    <section className={s.windowRight}>
                        <div className={s.windowRightContent}>
                            <SectionWindow paddingButton={"10px 40px"} alignStart={false} windowText={windowText['text2']}>
                                <span>Почему с <b>Albero D’oro</b> выгодно <b>сотрудничать</b>?</span>
                            </SectionWindow>
                        </div>
                    </section>
                </div>
            </div>
            <div className={s.footer}>
                <Footer/>
            </div>
        </>
    )
}

export default MainPage;