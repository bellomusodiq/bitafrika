/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../Button/Button";
import styles from "./CreateAccount.module.css";

const CreateAccount: React.FC = () => (
  <section className={styles.CreateAccount}>
    <div className={styles.TextContainer}>
      <h4 className={styles.Header}>Create an account</h4>
      <p className={styles.Text}>
        {
          "Sign up for an account on our mobile apps for Android and iOS with your basic info. It's that easy"
        }
      </p>
      <div className={styles.ButtonContainer}>
        <Button outlined title="Download" />
      </div>
    </div>
    <div className={styles.ImageContainer}>
      <img
        src="/images/get-started.png"
        alt="Get Started Image"
        className={styles.GetStartedImage}
      />
    </div>
  </section>
);
export default CreateAccount;
