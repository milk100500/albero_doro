import s from './styleCertificates.module.css'
import Header from "../Header/Header";
import { certificates } from '../../contentForComponents/certificatesContent/certificatesInfo'
import { certificate, arrow } from '../../contentForComponents/svg/ExportSVG'


const Certificates = () => {
    return (
        <>
            <Header activePage={4}/>
            <div className={s.certificates}>
                <div className={s.content}>
                    <section className={s.certificateSvg}>
                        {certificate}
                    </section>
                    <section className={s.files}>
                        {certificates.map(({src, name}, index) => <p key={index}>{arrow}<a href={src} download>{name}</a></p>)}
                    </section>
                </div>
            </div>
        </>
    )
}

export default Certificates;