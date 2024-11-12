import Button from "@/components/common/Button/Button";
import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";
import Layout from "@/Layout";
import { ArrowRight } from "lucide-react";
import styles from "./auth.module.css";

export default function Login() {
  return (
    <Layout>
      <AuthLayout>
        <div className={styles.auth}>
          <h1>Login</h1>
          <p className={styles.forgot_password}>Forgot your password?</p>

          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />

          <Button style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: 'var(--dark-gray)'
            , gap: "1rem"
          }}>
            <p>JOIN THE CLUB</p>
            <ArrowRight />
          </Button>

          <div className={styles.social_signs}>
            {Array.from({ length: 3 }, (_, index) => (
              <div key={index} className="">
                <img
                  src={`/src/assets/svgs/socials/signUpSocial-${index + 1}.svg`}
                  alt=""
                />
              </div>
            ))}
          </div>

          <p className={styles.caveat}>
            By clicking 'Log In', you agree to our website KicksClub Terms &
            Conditions, Kicks Privacy Notice and Terms & Conditions.
          </p>
        </div>
      </AuthLayout>
    </Layout>
  );
}
