import React from "react";
import StoreButton from "../Button/StoreButton";
import styles from "./ReadyToJoinMobile.module.css";

const ReadyToJoinMobile: React.FC = () => {
  return (
    <section className={styles.Container}>
      <div className={styles.Main}>
        <h3 className={styles.Title}>Ready to join the future of money?</h3>
        <p className={styles.Text}>
          Download the bitafrika app to buy, sell, and store your bitcoin on the
          go.
        </p>
        <img className={styles.Logo} src="/icons/logo-white.svg" />
        <img className={styles.Bitcoins} src="/images/bitcoins.png" />
      </div>
      <div className={styles.ButtonContainer}>
        <div className={styles.Button}>
          <StoreButton store="apple" />
        </div>
        <div className={styles.Button}>
          <StoreButton store="google" />
        </div>
      </div>
    </section>
  );
};

export default ReadyToJoinMobile;
