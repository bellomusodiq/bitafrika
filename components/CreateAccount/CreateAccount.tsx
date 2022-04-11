/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./CreateAccount.module.css";

const CreateAccount: React.FC = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <section
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={styles.CreateAccount}
      style={{ background: isHover ? "#E4ECFF" : "#F9F9F9" }}
    >
      <div className={styles.TextContainer}>
        <h4
          className={styles.Header}
          style={{ color: isHover ? "#2356E7" : "black" }}
        >
          Create an account
        </h4>
        <p className={styles.Text}>
          {
            "Sign up for an account on our mobile apps for Android and iOS with your basic info. It's that easy"
          }
        </p>
        <div className={styles.ButtonContainer}>
          <Button isHover={isHover} outlined title="Download" />
        </div>
      </div>
      <div className={styles.ImageContainer}>
        <img
          src="/images/get-started.png"
          alt="Get Started Image"
          className={styles.GetStartedImage}
          style={{
            transform: isHover
              ? "scale(1.4, 1.5) translateY(20%)"
              : "scale(1, 1) translateY(0)",
          }}
        />
      </div>
    </section>
  );
};
export default CreateAccount;
