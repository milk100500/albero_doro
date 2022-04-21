import MainPage from "../../components/MainPage/MainPage";
import Products from "../../components/Products/Products";
import Certificates from "../../components/Certificates/Certificates";
import Cooperation from "../../components/Cooperation/Cooperation";

export const routes = [
    {
        path: '/',
        Component: MainPage
    },
    {
        path: '/products',
        Component: Products
    },
    {
        path: '/cooperation',
        Component: Cooperation
    },
    {
        path: '/certificatesContent',
        Component: Certificates
    }
]