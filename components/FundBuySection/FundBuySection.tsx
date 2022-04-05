/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../Button/Button";
import styles from "./FundBuySection.module.css";
import { IFundBuyItem } from "./types";

const FundBuyItem: React.FC<IFundBuyItem> = ({
  title,
  text,
  onButtonClick,
  image,
}) => (
  <div className={styles.FundBuyItem}>
    <div className={styles.TextContainer}>
      <h4 className={styles.Header}>{title}</h4>
      <p className={styles.Text}>{text}</p>
    </div>
    <div className={styles.ButtonImageContainer}>
      <Button outlined title="Download" />
      <img src={image} alt={title} className={styles.Image} />
    </div>
  </div>
);

const FundBuySection: React.FC = () => {
  return (
    <section className={styles.FundBuySection}>
      <FundBuyItem
        title="Fund your account"
        text="Great !! it's now time to fund your account. 
              You can buy with Mobile Money or 
              receive from an external wallet"
        image="/images/fund.png"
      />
      <FundBuyItem
        title="Start buying & selling"
        text="With your account funded, you can 
              send bitcoin to any merchant/friend 
              or sell your bitcoin for cash"
        image="/images/buy.png"
      />
    </section>
  );
};

export default FundBuySection;