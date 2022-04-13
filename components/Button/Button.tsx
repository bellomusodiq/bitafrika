import React, { useMemo } from "react";
import styles from "./Button.module.css";
import { IButton } from "./types";

const Button: React.FC<IButton> = ({ title, onClick, outlined, isHover }) => {
  const { backgroundColor, color } = useMemo(() => {
    let backgroundColor = "#FFFFFF";
    let color = "#2356E7";
    if ((isHover && outlined) || (!isHover && !outlined)) {
      backgroundColor = "#2356E7";
      color = "#FFFFFF";
    }
    if ((isHover && !outlined) || (!isHover && outlined)) {
      backgroundColor = "#FFFFFF";
      color = "#2356E7";
    }
    return { backgroundColor, color };
  }, [outlined, isHover]);
  return (
    <button
      className={styles.Button}
      style={{
        backgroundColor,
        color,
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
