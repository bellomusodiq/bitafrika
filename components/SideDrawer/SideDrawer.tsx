import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import styles from "./SideDrawer.module.css";
import { ISideDrawer } from "./types";

const SideDrawer: React.FC<ISideDrawer> = ({ closeSideDrawer, open }) => (
  <>
    {open && <div onClick={closeSideDrawer} className={styles.Backdrop} />}
    <div
      style={{ transform: open ? "translateX(0)" : "translateX(-100vw)" }}
      className={styles.SideDrawerContainer}
    >
      <nav className={styles.SideDrawer}>
        <Link href="/">B2B</Link>
        <Link href="/">Privacy Policy</Link>
      </nav>
      <div className={styles.SideDrawerButton}>
        <Button title="Download" outlined />
      </div>
    </div>
  </>
);

export default SideDrawer;
