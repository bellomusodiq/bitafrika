import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";
import { IFooterItem, IFooterItemLink } from "./types";

const FOOTER_LINKS: { [k: string]: IFooterItemLink[] } = {
  POLICY: [
    {
      title: "Privacy Policy",
      url: "/privacy-policy",
    },
    {
      title: "Refund Policy",
      url: "/refund-policy",
    },
    {
      title: "Cookies",
      url: "/cookies",
    },
  ],
  LEGAL: [
    {
      title: "Terms & Condition",
      url: "/terms-and-condition",
    },
    {
      title: "AML/KYC",
      url: "/aml-kyc",
    },
    {
      title: "Declaration of Risk",
      url: "risks",
    },
  ],
  SOCIALS: [
    {
      title: "Facebook",
      url: "https://facebook.com",
    },
    {
      title: "Instagram",
      url: "https://instagram.com",
    },
    {
      title: "Twitter",
      url: "https://twitter.com",
    },
  ],
};

const FooterItem: React.FC<IFooterItem> = ({ title, items }) => (
  <nav className={styles.FooterItem}>
    <h3 className={styles.FooterItemTitle}>{title}</h3>
    {items.map(({ title, url }, i) => (
      <Link href={url || "/"} key={`${title}-${i}`}>
        {title}
      </Link>
    ))}
  </nav>
);

const Footer: React.FC = () => (
  <footer className={styles.FooterContainer}>
    <div className={styles.Footer}>
      <div className={styles.Logo}>
        <Image src="/icons/logo-white.svg" alt="logo" width={120} height={30} />
      </div>
      {Object.keys(FOOTER_LINKS).map((linkTitle: string) => (
        <FooterItem
          title={linkTitle}
          key={linkTitle}
          items={FOOTER_LINKS[linkTitle]}
        />
      ))}
    </div>
    <p className={styles.FooterText}>
      **WARNING** Trading in cryptocurrencies are connected with the possibility
      of a loss for the Users, even with a small change in the price of the
      underlying instrument in the form of cryptocurrency. It is not possible to
      make a profit on cryptocurrencies without exposing yourself to the risk of
      incurring a loss. When making trade decisions, the User should be guided
      by his own judgment. More information is available in the Declaration of
      Risk.
    </p>
    <p className={styles.RightText}>
      BitAfrika &copy; {new Date().getFullYear()}. All Rights Reserved.
    </p>
  </footer>
);

export default Footer;
