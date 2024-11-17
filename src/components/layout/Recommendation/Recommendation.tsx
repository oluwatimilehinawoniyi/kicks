import useFetchShoes from '@/hooks/useFetchShoes';
import ProductsList from '../ProductListContainer/ProductsList/ProductsList';
import styles from './Recommendation.module.css'
import { getRandomProducts } from '@/utils';


export default function Recommendation() {
  const { shoes } = useFetchShoes()
  const products = getRandomProducts(shoes, 8);

  return (
    <section className={styles.recommendation}>
      <div className="">
        <h1>you may also like</h1>
      </div>

      <ProductsList products={products} />
    </section>
  )
}
