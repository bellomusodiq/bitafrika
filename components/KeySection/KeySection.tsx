/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./KeySection.module.css";

const KeySection: React.FC = () => {
  return (
    <>
      <section className={styles.KeySection}>
        <img
          src="/images/sign-up.svg"
          alt="signup image"
          className={styles.Image}
        />
        <div className={styles.TextContainer}>
          <h3 className={styles.Title}>
            <span className={styles.BlueText}>Remember</span>, we will <br />{" "}
            always keep your funds <span className={styles.BlueText}>safe</span>
          </h3>
          <p className={styles.Text}>
            Send and receive bitcoin from friends and family anywhere in the
            world in seconds. No cross-border control and fees. Storage is
            secure and free. No payment limits; no maximum daily or monthly
            amounts.
          </p>
        </div>
      </section>
      <section className={styles.KeySectionMobile}>
        <h3 className={styles.TitleMobile}>
          <span className={styles.BlueText}>Remember</span>, we will always keep
          your funds <span className={styles.BlueText}>safe</span>
        </h3>
        <img
          src="/images/sign-up.svg"
          alt="signup image"
          className={styles.ImageMobile}
        />

        <p className={styles.TextMobile}>
          Send and receive bitcoin from friends and family anywhere in the world
          in seconds. No cross-border control and fees. Storage is secure and
          free. No payment limits; no maximum daily or monthly amounts.
        </p>
      </section>
    </>
  );
};

export default KeySection;
