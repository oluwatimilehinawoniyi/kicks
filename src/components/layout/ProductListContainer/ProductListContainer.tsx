import FilterTab, { FilterTabModal } from "@/components/UI/FilterTab/FilterTab";
import FilterController from "../../UI/FilterButton/FilterController";
import ProductsList from "./ProductsList/ProductsList";

import styles from "./productListContainer.module.css";
import { ProductProps } from "./ProductLayout";
import { useEffect, useState } from "react";

export default function ProductListContainer({ products }: {
  products: ProductProps[];
}) {
  const repeatedProducts = Array.from({ length: 4 }, () => products).flat();

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isFilterOpen]);



  return (
    <section className={styles.productListContainer}>
      <div className={styles.header_tab_section}>
        <h1>Shoes ({repeatedProducts.length} items)</h1>
        <div className={styles.filter_btn} onClick={handleFilterToggle}>
          <FilterController handleFilterToggle={handleFilterToggle} />
        </div>
      </div>
      <div className={styles.filter_tab_section}>
        <FilterTab handleFilterToggle={handleFilterToggle} />
      </div>
      <div className={styles.products_tab_section}>
        <ProductsList products={repeatedProducts} />
      </div>


      {/* filter control */}
      {isFilterOpen && (
        <FilterTabModal>
          <FilterTab handleFilterToggle={handleFilterToggle} />
        </FilterTabModal>
      )}
    </section>
  );
}
