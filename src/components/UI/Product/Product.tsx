import Button from "@/components/common/Button/Button";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";

interface ProductProps {
  title: string;
  price: number;
  tag: string;
  imgSrc: string;
}

export default function Product({ title, price, tag, imgSrc }: ProductProps) {
  return (
    <li className={styles.product}>
      <Link to={`/shoes/${title.split(' ').join('-')}`}>
        <div className={styles.product_image}>
          <div
            className={styles.product_tag}
            style={{
              backgroundColor: tag === "new" ? "var(--blue)" : "var(--yellow)",
              color: tag !== "new" ? "var(--dark-gray)" : "white",
            }}
          >
            <p>{tag}</p>
          </div>
          <img src={imgSrc} alt={title} />
        </div>
        <h3>{title}</h3>
        <Button style={{
          width: "100%",
          backgroundColor: "var(--dark-gray)"
        }}>
          view product - &nbsp;
          <span style={{ color: "var(--yellow)", fontFamily: "inherit" }}>
            ${price}
          </span>
        </Button>
      </Link>
    </li>
  );
}
