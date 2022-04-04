/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Thumbnail.module.css";
import { IThumbnail, ThumbnailItemType } from "./types";

const ThumbnailItem: React.FC<ThumbnailItemType> = ({ title, text, image }) => (
  <div className={styles.ThumbnailItem}>
    <h3 className={styles.Title}>{title}</h3>
    <p className={styles.Text}>{text}</p>
    <img src={image} alt={title} className={styles.Image} />
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
        />
      ))}
    </section>
  );
};

export default Thumbnail;
