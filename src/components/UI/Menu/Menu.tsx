import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <Link to="/shoes" className={styles.menu}>
      <p>shoes</p>
    </Link>
  );
}
