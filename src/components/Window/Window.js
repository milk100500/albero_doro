import s from './styleWindow.module.css'
import { circle } from "../../contentForComponents/svg/ExportSVG";

const Window = ({windowText}) => {
    return (
        <div className={s.container}>
            <div className={s.text}>
                { windowText.map((obj, index) => <div key={ index }><span>{circle}</span><span>{obj}</span></div>)}
            </div>
        </div>
    )
}

export default Window;