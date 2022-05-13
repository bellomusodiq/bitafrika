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
        <img className={styles.Bitcoins} src="/images/bitcoins.svg" />
      </div>
      <div className={styles.ButtonContainer}>
        <div className={styles.Button}>
          <StoreButton
            url="https://apps.apple.com/ng/app/bitafrika-buy-sell-crypto/id1577083741"
            store="apple"
          />
        </div>
        <div className={styles.Button}>
          <StoreButton
            url="https://play.google.com/store/apps/details?id=app.bitafrika.com"
            store="google"
          />
        </div>
      </div>
    </section>
  );
};

export default ReadyToJoinMobile;
