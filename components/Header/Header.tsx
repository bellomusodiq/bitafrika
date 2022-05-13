import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./Header.module.css";
import { IHeader } from "./types";
import MobileDetect from "mobile-detect";

const Header: React.FC<IHeader> = ({ toggleSideDrawer }) => {
  const [os, setOS] = useState<string>("");
  useEffect(() => {
    if (window) {
      const md = new MobileDetect(window.navigator.userAgent);
      if (md.os() === "AndroidOS" || md.os() === "iOS") {
        setOS(md.os());
      }
    }
  }, []);
  return (
    <header className={styles.Header}>
      <div className={styles.LogoContainer}>
        <Link passHref href="/" as="/">
          <Image
            alt="logo"
            src="/icons/logo.svg"
            width={170}
            height={40}
            className={styles.Logo}
          />
        </Link>
      </div>
      <button onClick={toggleSideDrawer} className={styles.NavButton}>
        <Image src="/icons/menu.svg" alt="menu button" width={35} height={35} />
      </button>
      <nav className={styles.Nav}>
        <Link href="/b2b">B2B</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </nav>
      <div className={styles.HeaderButton}>
        <Button
          title="Download"
          url={
            os === "iOS"
              ? "https://apps.apple.com/ng/app/bitafrika-buy-sell-crypto/id1577083741"
              : "https://play.google.com/store/apps/details?id=app.bitafrika.com"
          }
          outlined
        />
      </div>
    </header>
  );
};

export default Header;
