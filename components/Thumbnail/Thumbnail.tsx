/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../Button/Button";
import styles from "./Thumbnail.module.css";
import { IThumbnail, ThumbnailItemType } from "./types";

const ThumbnailItem: React.FC<ThumbnailItemType> = ({
  title,
  text,
  image,
  showButton,
  onButtonClick,
  buttonTitle,
}) => (
  <div
    style={{ backgroundColor: showButton ? "white" : "#F9F9F9" }}
    className={styles.ThumbnailItem}
  >
    <h3 className={styles.Title}>{title}</h3>
    <p
      className={styles.Text}
      style={{ textAlign: showButton ? "left" : "center" }}
    >
      {text}
    </p>
    {showButton ? (
      <div className={styles.ButtonContainer}>
        <Button outlined onClick={onButtonClick} title={buttonTitle} />
      </div>
    ) : (
      <img src={image} alt={String(title)} className={styles.Image} />
    )}
  </div>
);

const Thumbnail: React.FC<IThumbnail> = ({ items }) => {
  return (
    <section className={styles.Thumbnail}>
      {items.map((item) => (
        <ThumbnailItem
          key={item.id}
          title={item.title}
          text={item.text}
          image={item.image}
          showButton={item.showButton}
          buttonTitle={item.buttonTitle}
          onButtonClick={item.onButtonClick}
        />
      ))}
    </section>
  );
};

export default Thumbnail;
