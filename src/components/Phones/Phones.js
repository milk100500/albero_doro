import s from './stylePhones.module.css'
import { phoneIcon } from "../../contentForComponents/svg/ExportSVG";

const Phones = () => {
    return (
        <div className={s.phones}>
            <div className={s.phones_content}>
                {phoneIcon}
                <div className={s.numbers}>
                    <a href="tel:89056518547">8 (905) 651-85-47</a>
                    <a href="tel:89102408430">8 (910) 240-84-30</a>
                </div>
            </div>
        </div>
    )
}

export default Phones;