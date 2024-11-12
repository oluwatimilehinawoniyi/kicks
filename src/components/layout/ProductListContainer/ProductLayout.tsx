import DesktopFilterTab from '@/components/UI/FilterTab/DesktopFilterTab'
import styles from './productLayout.module.css'
import ProductListContainer from './ProductListContainer'


export interface ProductProps {
    title: string;
    price: number;
    tag: string;
    imgSrc: string;
}

const products: ProductProps[] = [
    {
        title: "adidas 4wd parley",
        price: 125,
        tag: "new",
        imgSrc: "/src/assets/images/new drops/product-1.png",
    },
    {
        title: "Nike Air Force 1 '07",
        price: 120,
        tag: "new",
        imgSrc: "/src/assets/images/new drops/product-2.png",
    },
    {
        title: "Puma Predator pro 1",
        price: 175,
        tag: "10% off",
        imgSrc: "/src/assets/images/new drops/product-3.png",
    },
    {
        title: "reebok mini xplorer",
        price: 135,
        tag: "new",
        imgSrc: "/src/assets/images/new drops/product-4.png",
    },
];

export default function ProductLayout() {

    return (
        <section className={styles.productLayout}>
            <DesktopFilterTab />
            <ProductListContainer
                products={products}
            />
        </section>
    )
}
