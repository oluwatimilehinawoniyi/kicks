import Button from "@/components/common/Button/Button";
import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";
import Layout from "@/Layout";
import { ArrowRight } from "lucide-react";
import styles from "./auth.module.css";

export default function SignUp() {
  return (
    <Layout>
      <AuthLayout>
        <div className={styles.auth}>
          <h1>Register</h1>
          <div>
            <p>Sign up with</p>
            <div className={styles.social_signs}>
              {Array.from({ length: 3 }, (_, index) => (
                <div key={index} className="">
                  <img
                    src={`/src/assets/svgs/socials/signUpSocial-${index + 1
                      }.svg`}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <p className={styles.or}>OR</p>
          </div>

          <p className={styles.label_legend}>Your Name</p>

          <input type="text" name="" id="" placeholder="First Name" />
          <input type="text" name="" id="" placeholder="Last Name" />

          <p className={styles.label_legend}>Gender</p>

          <p className={styles.label_legend}>Login Details</p>

          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />

          <p className={styles.password_hint}>
            Minimum 8 characheters with at least one uppercase, one lowercase,
            one special character and a number.
          </p>

          <Button style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: 'var(--dark-gray)'
            , gap: "1rem"
          }}>
            <p>REGISTER</p>
            <ArrowRight />
          </Button>

          <p className={styles.caveat}>
            By clicking 'Register', you agree to our website KicksClub Terms &
            Conditions, Kicks Privacy Notice and Terms & Conditions.
          </p>
        </div>
      </AuthLayout>
    </Layout>
  );
}
