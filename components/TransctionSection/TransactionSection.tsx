/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./TransactionSection.module.css";

const TransactionSection: React.FC = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <section
      // onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={styles.TransactionSection}
      style={{
        backgroundColor: isHover ? "#2356E7" : "#F9F9F9",
      }}
    >
      <div
        className={styles.TextContainer}
        style={{ color: isHover ? "white" : "black" }}
      >
        <h4 className={styles.Title}>Borderless Transactions</h4>
        <p className={styles.Text}>
          Send and receive cryptocurrency from friends and family anywhere in
          the world in seconds. No cross-border control and fees. Storage is
          secure and free. No payment limits; no maximum daily or monthly
          amounts.
        </p>
        <div className={styles.ButtonContainer}>
          <Button isHover={isHover} title="Download" />
        </div>
      </div>
      <img
        src="/images/easy-money.png"
        alt="Borderless Transaction Image"
        className={styles.Image}
        style={{
          transform: isHover
            ? "scale(1.5, 1.5) translate(-10%, 10%)"
            : "scale(1, 1) translate(0, 0)",
        }}
      />
    </section>
  );
};

export default TransactionSection;
