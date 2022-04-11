import React from "react";
import styles from "./Button.module.css";
import { IButton } from "./types";

const Button: React.FC<IButton> = ({ title, onClick, outlined, isHover }) => {
  return (
    <button
      className={styles.Button}
      style={{
        backgroundColor: outlined && !isHover ? "#FFFFFF" : "#2356E7",
        color: outlined && !isHover ? "#2356E7" : "#FFFFFF",
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
