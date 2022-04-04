/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../Button/Button";
import styles from "./TransactionSection.module.css";

const TransactionSection: React.FC = () => {
  return (
    <section className={styles.TransactionSection}>
      <div className={styles.TextContainer}>
        <h4 className={styles.Title}>Borderless Transactions</h4>
        <p className={styles.Text}>
          Send and receive bitcoin from friends and family anywhere in the world
          in seconds. No cross-border control and fees. Storage is secure and
          free. No payment limits; no maximum daily or monthly amounts.
        </p>
        <div className={styles.ButtonContainer}>
          <Button title="Download" />
        </div>
      </div>
      <img
        src="/images/easy-money.png"
        alt="Borderless Transaction Image"
        className={styles.Image}
      />
    </section>
  );
};

export default TransactionSection;
