import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import styles from "./Header.module.css";
import { IHeader } from "./types";

const Header: React.FC<IHeader> = ({ toggleSideDrawer }) => (
  <header className={styles.Header}>
    <div className={styles.LogoContainer}>
      <Image
        alt="logo"
        src="/icons/logo.svg"
        width={170}
        height={40}
        className={styles.Logo}
      />
    </div>
    <button onClick={toggleSideDrawer} className={styles.NavButton}>
      <Image src="/icons/menu.svg" alt="menu button" width={35} height={35} />
    </button>
    <nav className={styles.Nav}>
      <Link href="/b2b">B2B</Link>
      <Link href="/privacy-policy">Privacy Policy</Link>
    </nav>
    <div className={styles.HeaderButton}>
      <Button title="Download" outlined />
    </div>
  </header>
);

export default Header;
