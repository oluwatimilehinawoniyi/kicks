import Product from "@/components/UI/Product/Product";
import styles from "./productsList.module.css";
import { ProductProps } from "../ProductLayout";

export default function ProductsList({
  products,
}: {
  products: ProductProps[];
}) {
  return (
    <ul className={styles.productsList}>
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </ul>
  );
}
