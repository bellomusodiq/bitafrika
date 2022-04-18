/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import StoreButton from "../Button/StoreButton";
import styles from "./ReadyToJoinSection.module.css";

const ReadyToJoinSection: React.FC = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <>
      <section
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={styles.ReadyToJoinSection}
        style={{
          backgroundColor: isHover ? "#2356E7" : "#F9F9F9",
        }}
      >
        <div
          className={styles.TextContainer}
          style={{
            color: isHover ? "white" : "black",
          }}
        >
          <h3 className={styles.Header}>
            Ready to join
            <br />
            the future of money?
          </h3>
          <p className={styles.Text}>
            Download the bitafrika app to buy, sell, and store your bitcoin on
            the go.
          </p>
          <div className={styles.DownloadContainer}>
            <StoreButton isHover={isHover} store="apple" />
            <StoreButton isHover={isHover} store="google" />
          </div>
        </div>
        <img
          src="/images/bitcoins.png"
          alt="bitcoin images"
          className={styles.Image}
          style={{
            transform: isHover
              ? "scale(1.5, 1.5) translate(-15%, 35%)"
              : "scale(1, 1) translate(0%, 0%)",
          }}
        />
        <img
          src="/icons/logo-white.svg"
          alt="logo"
          className={styles.Logo}
          style={{
            opacity: isHover ? 1 : 0,
          }}
        />
      </section>
      <div className={styles.DownloadContainerMobile}>
        <StoreButton isHover={isHover} store="apple" />
        <StoreButton isHover={isHover} store="google" />
      </div>
    </>
  );
};

export default ReadyToJoinSection;
