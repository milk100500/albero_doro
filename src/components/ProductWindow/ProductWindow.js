import s from './styleProductWindow.module.css'

const ProductWindow = (props) => {
    return (
        <div className={s.product}>
            <div className={s.image}>
                <img src={props.src ? props.src : "/photo/nophoto.png"} alt/>
            </div>
            <div onClick={()=>{props.setModalProductDescription({'name':props.name,'src': props.src ? props.src : "/photo/nophoto.png",'description': props.description,'price': props.price,'fullDescription': props.fullDescription}); props.changeActiveModalProduct()}} className={s.name}>
                <span>{props.name}</span>
            </div>
            <div className={s.description}>
                <span>{props.description}</span>
            </div>
        </div>
    )
}

export default ProductWindow;