/* eslint-disable @next/next/no-img-element */
import MobileDetect from "mobile-detect";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./FundBuySection.module.css";
import { IFundBuyItem } from "./types";

const FundBuyItem: React.FC<IFundBuyItem> = ({
  title,
  text,
  onButtonClick,
  image,
  backgroundColor,
  color,
  centerText,
  buttonType,
}) => {
  const [isHover, setIsHover] = useState<boolean>(true);
  const [os, setOS] = useState<string>("");
  useEffect(() => {
    if (window) {
      const md = new MobileDetect(window.navigator.userAgent);
      if (md.os() === "AndroidOS" || md.os() === "iOS") {
        setOS(md.os());
      }
    }
  }, []);
  return (
    <>
      <div
        // onMouseEnter={() => setIsHover(true)}
        // onMouseLeave={() => setIsHover(false)}
        className={styles.FundBuyItem}
        style={{
          background: backgroundColor
            ? backgroundColor
            : isHover
            ? "#2356E7"
            : "#F9F9F9",
        }}
      >
        <div className={styles.TextContainer}>
          <h4
            style={{
              color: color ? color : isHover ? "white" : "black",
              textAlign: centerText ? "center" : "left",
            }}
            className={styles.Header}
          >
            {title}
          </h4>
          <p
            style={{
              color: color ? color : isHover ? "white" : "black",
              textAlign: centerText ? "center" : "left",
            }}
            className={styles.Text}
          >
            {text}
          </p>
        </div>
        <div className={styles.ButtonImageContainer}>
          <div className={styles.ButtonContainer}>
            <Button
              url={
                os === "iOS"
                  ? "https://apps.apple.com/ng/app/bitafrika-buy-sell-crypto/id1577083741"
                  : "https://play.google.com/store/apps/details?id=app.bitafrika.com"
              }
              outlined
              title="Download"
            />
          </div>
          <img
            style={{
              transform: isHover ? "scale(1, 1)" : "scale(1, 1)",
            }}
            src={image}
            alt={title}
            className={styles.Image}
          />
        </div>
      </div>
      <div className={styles.ButtonContainerMobile}>
        <Button
          url={
            os === "iOS"
              ? "https://apps.apple.com/ng/app/bitafrika-buy-sell-crypto/id1577083741"
              : "https://play.google.com/store/apps/details?id=app.bitafrika.com"
          }
          stretch
          outlined={false}
          title="Download"
        />
      </div>
    </>
  );
};

const FundBuySection: React.FC = () => {
  return (
    <>
      <section className={styles.FundBuySection}>
        <FundBuyItem
          title="Fund your account"
          text="Great !! it's now time to fund your account. 
              You can buy with Mobile Money or 
              receive from an external wallet"
          image="/images/fund.svg"
        />
        <FundBuyItem
          title="Start buying & selling"
          text="With your account funded, you can send crypto to any merchant/friend or sell your crypto for cash"
          image="/images/buy.svg"
        />
      </section>
      <section className={styles.FundBuySectionMobile}>
        <FundBuyItem
          title="Fund your account"
          text="Great !! it's now time to fund your account. 
              You can buy with Mobile Money or 
              receive from an external wallet"
          image="/images/fund.svg"
          backgroundColor="#2356e7"
          color="white"
          centerText
          buttonType="outlined"
        />
        <FundBuyItem
          title="Start buying & selling"
          text="With your account funded, you can 
              send bitcoin to any merchant/friend 
              or sell your bitcoin for cash"
          image="/images/buy.svg"
          backgroundColor="#2356e7"
          color="white"
          centerText
        />
      </section>
    </>
  );
};

export default FundBuySection;
