import Logo from "@/components/common/Logo/Logo";
import Cart from "@/components/UI/Cart/CartIcon";
import Menu from "@/components/UI/Menu/Menu";
import styles from "./Navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navItems}>
        <div className={styles.navMenu}>
          <Menu />
        </div>
        <div className={styles.navLogo}>
          <Logo width={90} />
        </div>
        <div className={styles.navCart}>
          <Cart />
        </div>
      </div>
    </nav>
  );
}
