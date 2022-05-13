/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import StoreButton from "../components/Button/StoreButton";
import CreateAccount from "../components/CreateAccount/CreateAccount";
import FundBuySection from "../components/FundBuySection/FundBuySection";
import KeySection from "../components/KeySection/KeySection";
import ReadyToJoinMobile from "../components/ReadyToJoinMobile/ReadyToJoinMobile";
import ReadyToJoinSection from "../components/ReadyToJoinSection/ReadyToJoinSection";
import Thumbnail from "../components/Thumbnail/Thumbnail";
import { ThumbnailItemType } from "../components/Thumbnail/types";
import TransactionSection from "../components/TransctionSection/TransactionSection";
import styles from "../styles/Home.module.css";
import PageLayout from "../templates/PageLayout/PageLayout";

const HEADER_TEXT_OPTIONS: string[] = ["Easiest", "Safest", "Fastest"];

const THUMBNAIL_DATA: ThumbnailItemType[] = [
  {
    id: "1",
    title: "Easy and convenient",
    text: "Navigate through the app with ease and perform your transactions without hassle",
    image: "/images/easy.svg",
    imageFull: true,
    backgroundColor: "#2356E7",
    color: "white",
  },
  {
    id: "2",
    title: "Safe & Secure",
    text: "Our platform is securely enveloped with end to end encryption",
    image: "/images/locked.svg",
  },
  {
    id: "3",
    title: "Great customer support",
    text: "Having trouble with transactions or operation, our support team are on standby to help you",
    // isSvg: true,
    image: "/images/customer-support.svg",
  },
  {
    id: "4",
    title: "Simple and fast withdrawals",
    text: "We do not delay payment as we understand how brisk withdrawals gives our users joy",
    image: "/images/money-transfer.svg",
    backgroundColor: "#2356E7",
    color: "white",
    midImage: true,
  },
];
const THUMBNAIL_DATA_MOBILE: ThumbnailItemType[] = [
  {
    id: "1",
    title: "Easy and convenient",
    text: "Navigate through the app with ease and perform your transactions without hassle",
    image: "/images/easy.svg",
    imageFull: true,
    backgroundColor: "#2356E7",
    color: "white",
  },
  {
    id: "2",
    title: "Safe & Secure",
    text: "Our platform is securely enveloped with end to end encryption",
    image: "/images/locked.svg",
    backgroundColor: "rgba(35, 86, 231, 0.1)",
    color: "black",
  },
  {
    id: "3",
    title: "Great customer support",
    text: "Having trouble with transactions or operation, our support team are on standby to help you",
    image: "/images/customer-support.svg",
    backgroundColor: "rgba(35, 86, 231, 0.1)",
    color: "black",
  },
  {
    id: "4",
    title: "Simple and fast withdrawals",
    text: "We do not delay payment as we understand how brisk withdrawals gives our users joy",
    image: "/images/money-transfer.svg",
    backgroundColor: "#2356E7",
    color: "white",
    imageFullSpecial: true,
  },
];

const Home: NextPage = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [choiceIndex, setChoiceIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setChoiceIndex((currentIndex) => {
        if (currentIndex === 2) return 0;
        return currentIndex + 1;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [choiceIndex]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        return setIsMobile(true);
      }
      setIsMobile(false);
    };
    if (window) window.addEventListener("resize", handleResize);

    return () => window && window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      <Head>
        <title>Bit Afrika | Home</title>
        <meta name="description" content="Bit Afrika" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout
        // heroSection={
        //   <section className={styles.Banner}>
        //     {/* <Image
        //     src="/images/background.svg"
        //     alt="background image"
        //     // className={styles.BackgroundImage}
        //     objectFit="cover"
        //     width={"100%"}
        //     height="80vh"
        //   /> */}
        //     <img
        //       className={styles.LeftCoins}
        //       alt="left coin"
        //       src={
        //         !isMobile
        //           ? "/images/left-coins.svg"
        //           : "/images/left-coins-mobile.png"
        //       }
        //     />
        //     <img
        //       src={
        //         !isMobile
        //           ? "/images/phone-banner.svg"
        //           : "/images/phone-banner-mobile.svg"
        //       }
        //       alt="bitafika phone image"
        //       className={styles.PhoneBanner}
        //       style={{
        //         transform: isHover
        //           ? "scale(1.2,1.2) translateY(-5%)"
        //           : "scale(1, 1) translateY(0)",
        //       }}
        //       // onMouseEnter={() => setIsHover(true)}
        //       // onMouseLeave={() => setIsHover(false)}
        //     />
        //     <img
        //       className={styles.RightCoins}
        //       alt="left coin"
        //       src={
        //         !isMobile
        //           ? "/images/right-coins.svg"
        //           : "/images/right-coins-mobile.png"
        //       }
        //     />
        //   </section>
        // }
        heroSection={
          <section className={styles.HeroSection}>
            <div className={styles.HeroLeft}>
              <section className={styles.IntroText}>
                <h1 className={styles.Header}>
                  The{" "}
                  <span className={styles.BlueText}>
                    {HEADER_TEXT_OPTIONS[choiceIndex]}
                  </span>{" "}
                  way <br /> to buy and sell{" "}
                  <span className={styles.YellowText}>cryptocurrencies</span>
                </h1>
                <p className={styles.SubHeader}>
                  Buy, sell, send or receive cryptocurrency with ease. Fast,
                  secure and 24/7. No hidden Fees
                </p>
                <p className={styles.DownloadText}>Available on the</p>
                <section className={styles.DownloadButtons}>
                  <div className={styles.AppleButton}>
                    <StoreButton
                      url="https://apps.apple.com/ng/app/bitafrika-buy-sell-crypto/id1577083741"
                      noBackground
                      store="apple"
                    />
                  </div>
                  <div className={styles.GoogleButton}>
                    <StoreButton
                      url="https://play.google.com/store/apps/details?id=app.bitafrika.com"
                      noBackground
                      store="google"
                    />
                  </div>
                </section>
              </section>
            </div>
            <div className={styles.HeroRight}>
              <img src="/images/hero.png" className={styles.HeroImage} />
            </div>
          </section>
        }
      >
        {/* <div className={styles.ScrollContainer}>
          <a href="#SendingText">
            <img src="/icons/arrow-down.svg" alt="arrow down" />
          </a>
        </div> */}
        <h3 className={styles.GetStarted}>How to get started</h3>
        <h3 id="SendingText" className={styles.SendingText}>
          Send and receive cryptocurrencies in a smarter way
        </h3>
        <CreateAccount />
        <FundBuySection />
        <h3 className={styles.Why}>Why us?</h3>
        <h3 className={styles.SendingText3}>
          Why you should choose{" "}
          <span className={styles.BlueText}>BitAfrika</span>
        </h3>
        <div className={styles.ThumbnailContainer}>
          <Thumbnail items={THUMBNAIL_DATA} />
        </div>
        <div className={styles.ThumbnailContainerMobile}>
          <Thumbnail items={THUMBNAIL_DATA_MOBILE} />
        </div>
        <h3 className={styles.SendingText2}>
          Sending and receiving{" "}
          <span className={styles.YellowText}>Crypto</span> seamlessly in a
          smarter way
        </h3>
        <TransactionSection />
        {/* <KeySection /> */}
        <div className={styles.ReadyToJoinContainer}>
          <ReadyToJoinSection />
        </div>
        <div className={styles.ReadyToJoinMobile}>
          <ReadyToJoinMobile />
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
