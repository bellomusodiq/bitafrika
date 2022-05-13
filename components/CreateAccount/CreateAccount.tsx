/* eslint-disable @next/next/no-img-element */
import MobileDetect from "mobile-detect";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./CreateAccount.module.css";

const CreateAccount: React.FC = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
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
    <section
      // onMouseEnter={() => setIsHover(true)}
      // onMouseLeave={() => setIsHover(false)}
      className={styles.CreateAccount}
      style={{ background: isHover ? "#2356E7" : "#F9F9F9" }}
    >
      <div className={styles.TextContainer}>
        <h4
          className={styles.Header}
          style={{ color: isHover ? "white" : "black" }}
        >
          Create an account
        </h4>
        <p
          style={{ color: isHover ? "white" : "black" }}
          className={styles.Text}
        >
          {
            "Download and sign up on our mobile app for android or iOS. It’s that easy !!!"
          }
        </p>
        <div className={styles.ButtonContainer}>
          <Button
            outlined
            title="Download"
            url={
              os === "iOS"
                ? "https://apps.apple.com/ng/app/bitafrika-buy-sell-crypto/id1577083741"
                : "https://play.google.com/store/apps/details?id=app.bitafrika.com"
            }
          />
        </div>
        <div className={styles.ButtonContainerMobile}>
          <Button
            title="Download"
            url={
              os === "iOS"
                ? "https://apps.apple.com/ng/app/bitafrika-buy-sell-crypto/id1577083741"
                : "https://play.google.com/store/apps/details?id=app.bitafrika.com"
            }
          />
        </div>
      </div>
      <div className={styles.ImageContainer}>
        <img
          src="/images/get-started.svg"
          alt="Get Started Image"
          className={styles.GetStartedImage}
          style={{
            transform: isHover
              ? "scale(1.4, 1.5) translateY(20%)"
              : "scale(1, 1) translateY(0)",
          }}
        />
      </div>
    </section>
  );
};
export default CreateAccount;
