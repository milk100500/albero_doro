import s from './styleProducts.module.css'
import Header from "../Header/Header";
import ProductWindow from "../ProductWindow/ProductWindow";
import ModalProduct from '../ModalProduct/ModalProduct'
import products from '../../contentForComponents/productsContent/products.json'
import {useState, useEffect} from 'react'
import ModalEmail from "../ModalEmail/ModalEmail";

const Products = (props) => {
    const [productsType, setProductsType] = useState(props.location.productsType);
    const [productsList, setProductsList] = useState(products.household);
    const [modalProductDescription, setModalProductDescription] = useState({});
    const [activeModalProduct, setActiveModalProduct] = useState(false);
    const [activeModal, setActiveModal] = useState(false);

    function changeActiveModalProduct() {
        setActiveModalProduct(!activeModalProduct)
    }
    function changeActiveModal() {
        setActiveModal(!activeModal)
    }

    function productsRender() {
        if (productsType === 'Бытовая химия'){
            setProductsList(products.household)
        }
        if (productsType === 'Профессиональная химия'){
            setProductsList(products.professional)
        }
        if (productsType === 'Автохимия'){
            setProductsList(products.auto)
        }
    }
    useEffect(() => {
        setProductsType(props.location.productsType ? props.location.productsType : 'Бытовая химия')
        productsRender()
    })
    return (
        <>
            <ModalProduct changeActiveModal={changeActiveModal} modalProductDescription={modalProductDescription} activeModalProduct={activeModalProduct} changeActiveModalProduct={changeActiveModalProduct}/>
            <ModalEmail activeModal={activeModal} setActiveModal={setActiveModal} changeActiveModal={changeActiveModal}/>
            <Header activePage={2}/>
            <div className={s.content}>
                <div className={s.head_text}>
                    <span>{productsType}</span>
                </div>
                <section className={s.down_content}>
                    <div className={s.products}>
                        {
                            productsList.map((obj, index) => <ProductWindow  changeActiveModalProduct={changeActiveModalProduct} setModalProductDescription={setModalProductDescription}
                            key={index} src={obj.src} name={obj.name} description={obj.description} fullDescription={obj.fullDescription}/>)
                        }
                    </div>
                </section>
            </div>
        </>
    )
}

export default Products;