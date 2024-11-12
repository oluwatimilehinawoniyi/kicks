import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "@/components/common/Button/Button";

interface HeaderProps {
  title: string;
  colored?: string;
  buttonText?: string;
}

function Header({ title, colored, buttonText }: HeaderProps) {
  return (
    <div className={styles.header}>
      <h2>
        {title} <span>{colored}</span>
      </h2>
      {buttonText && <Link to={"/shoes"}>
        <Button style={{ backgroundColor: "var(--blue)" }}>{buttonText}</Button>
      </Link>}
    </div>
  );
}

export default Header;
