import s from './styleModalProduct.module.css'
import {mail} from "../../contentForComponents/svg/ExportSVG";
import Phones from "../Phones/Phones";

const ModalProduct = ({activeModalProduct, changeActiveModalProduct, modalProductDescription, changeActiveModal}) => {
    const styleActive = s.container + ' ' + s.active
    const styleActiveWindow = s.content + ' ' + s.active_window

    function closeAndOpen() {
        changeActiveModalProduct()
        changeActiveModal()
    }

    return (
        <div onClick={changeActiveModalProduct} className={activeModalProduct ? styleActive : s.container}>
            <div onClick={e => {
                e.stopPropagation()
            }} className={activeModalProduct ? styleActiveWindow : s.content}>
                <div className={s.upContent}>
                    <div className={s.image}>
                        <img src={modalProductDescription['src']}/>
                    </div>
                    <div className={s.right}>
                        <section className={s.head}>
                            <div className={s.name}>
                                <div className={s.product}>
                                    <span>{modalProductDescription['name'] ? modalProductDescription['name'] : null}</span>
                                    <span>{modalProductDescription['description']}</span>
                                </div>
                            </div>
                            <div className={s.phones}>
                                <div className={s.top_content}>
                                    <Phones/>
                                    <div className={s.email}>
                                        {mail}
                                        <span>snellee@mail.ru</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className={s.down}>
                            <div onClick={closeAndOpen} className={s.send}>
                                <span>Оставить заявку</span>
                            </div>
                            <div className={s.fullDescription}>
                                <span>{modalProductDescription['fullDescription']}</span>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={s.downContent}>
                    <span>{modalProductDescription['fullDescription']}</span>
                </div>
            </div>
        </div>
    )
}

export default ModalProduct;