import Header from "@/components/UI/Header/Header";
import styles from "./NewDrops.module.css";
import Product from "@/components/UI/Product/Product";
import useFetchShoes from "@/hooks/useFetchShoes";

const NewDrops = () => {
  return (
    <section className={styles.newDrops}>
      <Header
        title="Don't miss out"
        colored="new drops"
        buttonText="shop new drops"
      />
      <NewDropsContainer />
    </section>
  );
};

export default NewDrops;

function NewDropsContainer() {
  const { shoes, loading, error } = useFetchShoes()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <section className={styles.newDropProducts}>
      {shoes.slice(0, 8).map(({ name, price, tag, imgSrc }, index) => (
        <Product key={index} name={name} price={price} tag={tag} imgSrc={imgSrc} />
      ))}
    </section>
  );
}
