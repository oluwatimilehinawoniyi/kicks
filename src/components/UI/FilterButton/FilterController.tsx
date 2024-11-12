import { ListFilter } from "lucide-react";
import styles from "./filterController.module.css";

export default function FilterController({
  handleFilterToggle,
}: {
  handleFilterToggle: () => void;
}) {
  return (
    <section onClick={handleFilterToggle}>
      <div className={styles.filter_button}>
        <p>Filters</p>
        <ListFilter height={12} />
      </div>
    </section>
  );
}
