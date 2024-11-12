import Button from "@/components/common/Button/Button";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import styles from "./AuthLayout.module.css";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section className={styles.authLayout}>
      <div className={styles.content}>{children}</div>
      <JoinUs />
    </section>
  );
}

function JoinUs() {
  return (
    <div className={styles.joinUs}>
      <h1>Join Kicks Club Get Rewarded Today.</h1>
      <p>
        As kicks club member you get rewarded with what you love for doing what
        you love. Sign up today and receive immediate access to these Level 1
        benefits:
      </p>

      <ul>
        <li>Free shipping</li>
        <li>A 15% off voucher for your next purchase</li>
        <li>Access to Members Only products and sales</li>
        <li>Access to adidas Running and Training apps</li>
        <li>Special offers and promotions</li>
      </ul>

      <p>
        Join now to start earning points, reach new levels and unlock more
        rewards and benefits from adiClub.
      </p>

      <Button style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: 'var(--dark-gray)'
      }}>
        <p>JOIN THE CLUB</p>
        <ArrowRight />
      </Button>
    </div>
  );
}
