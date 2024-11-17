import FilterTab, { FilterTabModal } from "@/components/UI/FilterTab/FilterTab";
import FilterController from "../../UI/FilterButton/FilterController";
import ProductsList from "./ProductsList/ProductsList";

import styles from "./productListContainer.module.css";
import { useEffect, useState } from "react";
import useFetchShoes from "@/hooks/useFetchShoes";

export default function ProductListContainer() {
  const { shoes, loading, error } = useFetchShoes();


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
        <h1>Shoes ({shoes.length} items)</h1>
        <div className={styles.filter_btn} onClick={handleFilterToggle}>
          <FilterController handleFilterToggle={handleFilterToggle} />
        </div>
      </div>
      <div className={styles.filter_tab_section}>
        <FilterTab handleFilterToggle={handleFilterToggle} />
      </div>
      <div className={styles.products_tab_section}>
        {
          loading ? <p>Loading...</p> : error ? <p>{error}</p> :
            <ProductsList products={shoes} />
        }
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
