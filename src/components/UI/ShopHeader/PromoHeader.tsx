import promoImage from "@assets/images/shop_header.png";
import styles from "./PromoHeader.module.css";

export default function PromoHeaderImage() {
  return (
    <section className={styles.promoHeader}>
      <div
        className=""
        style={{
          backgroundImage: `url(${promoImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p>limited time only</p>
        <h1>Get 30% off</h1>
        <p>
          Sneakers made with your comfort in mind so you can put all of your
          focus into your next session.
        </p>
      </div>
    </section>
  );
}
