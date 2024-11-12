import styles from "./Categories.module.css";
import category1 from "@assets/images/categories/image 31-1.png";
import category2 from "@assets/images/categories/image 31.png";
import { ArrowUpRight } from "lucide-react";

const Categories = () => {
  return (
    <section className={styles.categories}>
      <h2>Categories</h2>

      <div className={styles.categories_container}>
        <ShoeCategory title="basketball" imgSrc={category1} />
        <ShoeCategory title="lifestyle" imgSrc={category2} />
      </div>
    </section>
  );
};

export default Categories;

function ShoeCategory({ imgSrc, title }: { imgSrc: string; title: string }) {
  return (
    <div
      className={styles.category}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h3>
          {title} <br /> shoes
        </h3>
        <span>
          <ArrowUpRight />
        </span>
      </div>
    </div>
  );
}
