/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Button from "../Button/Button";
import CustomerSupportIcon from "../CustomerSupportIcon/CustomerSupportIcon";
import styles from "./Thumbnail.module.css";
import { IThumbnail, ThumbnailItemType } from "./types";

const ThumbnailItem: React.FC<ThumbnailItemType> = ({
  title,
  customTitle,
  text,
  image,
  showButton,
  onButtonClick,
  buttonTitle,
  isSvg,
  imageFull,
  backgroundColor,
  color,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div
      // onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        backgroundColor: showButton
          ? "white"
          : backgroundColor
          ? backgroundColor
          : !isHover
          ? "#F9F9F9"
          : "#2356E7",
        position: imageFull ? "relative" : "inherit",
      }}
      className={styles.ThumbnailItem}
    >
      {customTitle ? (
        title
      ) : (
        <h3
          style={{ color: color ? color : isHover ? "white" : "black" }}
          className={styles.Title}
        >
          {title}
        </h3>
      )}
      <p
        className={styles.Text}
        style={{
          textAlign: showButton ? "left" : "center",
          color: color ? color : isHover && !showButton ? "white" : "black",
        }}
      >
        {text}
      </p>
      {showButton ? (
        <div className={styles.ButtonContainer}>
          <Button
            outlined
            isHover={isHover}
            onClick={onButtonClick}
            title={buttonTitle}
          />
        </div>
      ) : !isSvg ? (
        <img
          src={image}
          style={{
            transform: isHover ? "scale(1.5, 1.5)" : "scale(1, 1)",
            marginBottom: imageFull ? "-5%" : 0,
          }}
          alt={String(title)}
          className={styles.Image}
        />
      ) : (
        <CustomerSupportIcon
          isHover={isHover}
          color={isHover ? "white" : "#2356E7"}
        />
      )}
    </div>
  );
};

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
          isSvg={item.isSvg}
          imageFull={item.imageFull}
          customTitle={item.customTitle}
          backgroundColor={item.backgroundColor}
          color={item.color}
        />
      ))}
    </section>
  );
};

export default Thumbnail;
