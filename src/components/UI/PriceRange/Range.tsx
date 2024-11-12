import styles from "./Range.module.css";

export default function PriceRange() {
  return (
    <div className={styles.range}>
      <input type="range" min={0} max={1000} />
    </div>
  );
}
