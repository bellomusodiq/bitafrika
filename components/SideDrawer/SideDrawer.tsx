import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Button from "../Button/Button";
import styles from "./SideDrawer.module.css";
import { ISideDrawer } from "./types";

const SideDrawer: React.FC<ISideDrawer> = ({ closeSideDrawer, open }) => {
  const { pathname } = useRouter();

  return (
    <>
      {open && <div onClick={closeSideDrawer} className={styles.Backdrop} />}
      <div
        style={{ transform: open ? "translateX(0)" : "translateX(100vw)" }}
        className={styles.SideDrawerContainer}
      >
        <nav className={styles.SideDrawer}>
          <div
            className={
              pathname === "/"
                ? styles.LinkContainerActive
                : styles.LinkContainer
            }
          >
            <Link href="/">Home</Link>
          </div>
          <div
            style={{
              backgroundColor:
                pathname === "/" ? "#2356e7" : "rgba(0, 0, 0, 0.08)",
            }}
            className={styles.Divider}
          ></div>
          <div
            className={
              pathname === "/b2b"
                ? styles.LinkContainerActive
                : styles.LinkContainer
            }
          >
            <Link href="/b2b">B2B</Link>
          </div>
          <div
            style={{
              backgroundColor:
                pathname === "/b2b" ? "#2356e7" : "rgba(0, 0, 0, 0.08)",
            }}
            className={styles.Divider}
          ></div>
          <div
            className={
              pathname === "/privacy-policy"
                ? styles.LinkContainerActive
                : styles.LinkContainer
            }
          >
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
