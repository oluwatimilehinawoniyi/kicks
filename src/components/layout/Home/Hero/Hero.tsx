import Button from "@/components/common/Button/Button";
import styles from "./Hero.module.css";
import heroImage from "@assets/images/hero.png";
import miniheroImage1 from "@assets/images/mini-hero-image-1.png";
import miniheroImage2 from "@assets/images/mini-hero-image-2.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <HeroHeader />
      <HeroImage />
    </div>
  );
}

function HeroHeader() {
  return (
    <h1 className={styles.hero_title}>
      do it <span>right</span>
    </h1>
  );
}

function HeroImage() {
  return (
    <div
      className={styles.hero_image}
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <HeroTag />
      <div className={styles.hero_text}>
        <h2>nike air max</h2>
        <p>Nike introducing the new Air Max for everyone's comfort</p>
        <Link to={'/shoes'}>
          <Button style={{
            backgroundColor: "var(--blue)"
          }}>shop now</Button>
        </Link>
      </div>
      <div className={styles.images_stack}>
        <img src={miniheroImage1} alt="image of a Nike air max shoe" />
        <img src={miniheroImage2} alt="image of a Nike air max shoe" />
      </div>
    </div>
  );
}

function HeroTag() {
  return (
    <div className={styles.hero_tag}>
      <p>Nike product of the year</p>
    </div>
  );
}
