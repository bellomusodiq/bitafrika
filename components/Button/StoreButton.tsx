/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import styles from "./Button.module.css";
import { IButton } from "./types";

const StoreButton: React.FC<IButton> = ({ onClick, store }) => (
  <button onClick={onClick} className={styles.StoreButton}>
    <img
      className={styles.StoreImage}
      src={
        store === "apple" ? "/icons/app-store.svg" : "/icons/google-play.svg"
      }
    />
  </button>
);

export default StoreButton;
