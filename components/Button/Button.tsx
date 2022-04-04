import React from "react";
import styles from "./Button.module.css";
import { IButton } from "./types";

const Button: React.FC<IButton> = ({ title, onClick, outlined }) => {
  return (
    <button
      className={styles.Button}
      style={{
        backgroundColor: outlined ? "#FFFFF" : "#2356E7",
        color: outlined ? "#2356E7" : "#FFFFFF",
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
