import Header from "@/components/UI/Header/Header";
import styles from "./NewDrops.module.css";
import Product from "@/components/UI/Product/Product";

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
  const newDrops = [
    {
      title: "adidas 4wd parley",
      price: 125,
      tag: "new",
      imgSrc: "src/assets/images/new drops/product-1.png",
    },
    {
      title: "Nike Air Force 1 '07",
      price: 120,
      tag: "new",
      imgSrc: "src/assets/images/new drops/product-2.png",
    },
    {
      title: "Puma Predator pro 1",
      price: 175,
      tag: "10% off",
      imgSrc: "src/assets/images/new drops/product-3.png",
    },
    {
      title: "reebok mini xplorer",
      price: 135,
      tag: "new",
      imgSrc: "src/assets/images/new drops/product-4.png",
    },
  ];
  return (
    <section className={styles.newDropProducts}>
      {newDrops.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </section>
  );
}
