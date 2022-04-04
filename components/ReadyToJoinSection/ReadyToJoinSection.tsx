/* eslint-disable @next/next/no-img-element */
import React from "react";
import StoreButton from "../Button/StoreButton";
import styles from "./ReadyToJoinSection.module.css";

const ReadyToJoinSection: React.FC = () => {
  return (
    <section className={styles.ReadyToJoinSection}>
      <div className={styles.TextContainer}>
        <h3 className={styles.Header}>
          Ready to join
          <br />
          the future of money?
        </h3>
        <p className={styles.Text}>
          Download the bitafrika app to buy, sell, and store your bitcoin on the
          go.
        </p>
        <div className={styles.DownloadContainer}>
          <StoreButton store="apple" />
          <StoreButton store="google" />
        </div>
      </div>
      <img
        src="/images/bitcoins.png"
        alt="bitcoin images"
        className={styles.Image}
      />
    </section>
  );
};

export default ReadyToJoinSection;
