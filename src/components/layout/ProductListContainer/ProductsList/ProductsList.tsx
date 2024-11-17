import Product from "@/components/UI/Product/Product";
import styles from "./productsList.module.css";

interface ProductProps {
  name: string;
  price: number;
  imgSrc: string;
  tag: string

  id: number;
  category: string[];
  colors: string[];
  gender: string;
  size: number[];
}


export default function ProductsList({
  products,
}: { products: ProductProps[] }) {


  return (
    <ul className={styles.productsList}>
      {products?.map((product, index) => (
        <Product key={index}
          name={product.name}
          price={product.price}
          tag={product.tag}
          imgSrc={product.imgSrc} />
      ))}
    </ul>
  );
}
