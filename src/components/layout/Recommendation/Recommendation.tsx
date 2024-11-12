import { ProductProps } from '../ProductListContainer/ProductLayout';
import ProductsList from '../ProductListContainer/ProductsList/ProductsList';
import styles from './Recommendation.module.css'


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

export default function Recommendation() {
  return (
    <section className={styles.recommendation}>
      <div className="">
        <h1>you may also like</h1>
        <div></div>
      </div>

      <ProductsList products={products} />
    </section>
  )
}
