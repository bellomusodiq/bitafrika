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
import ReadyToJoinSection from "../components/ReadyToJoinSection/ReadyToJoinSection";
import Thumbnail from "../components/Thumbnail/Thumbnail";
import { ThumbnailItemType } from "../components/Thumbnail/types";
import TransactionSection from "../components/TransctionSection/TransactionSection";
import styles from "../styles/Home.module.css";
import PageLayout from "../templates/PageLayout/PageLayout";

const HEADER_TEXT_OPTIONS: string[] = ["easiest", "safest", "fastest"];

const THUMBNAIL_DATA: ThumbnailItemType[] = [
  {
    id: "1",
    title: "Easy and convenient",
    text: "Navigate around the app with ease and perform your transactions without hassle",
    image: "/images/easy.png",
    imageFull: true,
  },
  {
    id: "2",
    title: "Safe & Secure",
    text: "Our platform is securely enveloped with end to end encryption",
    image: "/images/locked.png",
  },
  {
    id: "3",
    title: "Great customer support",
    text: "Having trouble with transactions or operation, our support team are on group to aid you",
    isSvg: true,
    // image: "/images/colaboration.png",
  },
  {
    id: "4",
    title: "Simple and fast withdrawals",
    text: "We do not delay payment as we understand how brisk withdrawals gives our users joy",
    image: "/images/money-transfer.png",
  },
];
const THUMBNAIL_DATA_MOBILE: ThumbnailItemType[] = [
  {
    id: "1",
    title: "Easy and convenient",
    text: "Navigate around the app with ease and perform your transactions without hassle",
    image: "/images/easy.png",
    imageFull: true,
    backgroundColor: "#2356E7",
    color: "white",
  },
  {
    id: "2",
    title: "Safe & Secure",
    text: "Our platform is securely enveloped with end to end encryption",
    image: "/images/locked.png",
    backgroundColor: "rgba(35, 86, 231, 0.1)",
    color: "black",
  },
  {
    id: "3",
    title: "Great customer support",
    text: "Having trouble with transactions or operation, our support team are on group to aid you",
    isSvg: true,
    // image: "/images/colaboration.png",
    backgroundColor: "#2356E7",
    color: "white",
  },
  {
    id: "4",
    title: "Simple and fast withdrawals",
    text: "We do not delay payment as we understand how brisk withdrawals gives our users joy",
    image: "/images/money-transfer.png",
    backgroundColor: "rgba(35, 86, 231, 0.1)",
    color: "black",
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
    }, 1000);
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

      <PageLayout>
        <section className={styles.Banner}>
          {/* <Image
            src="/images/background.png"
            alt="background image"
            // className={styles.BackgroundImage}
            objectFit="cover"
            width={"100%"}
            height="80vh"
          /> */}
          <img
            className={styles.LeftCoins}
            alt="left coin"
            src={`/images/left-coins${isMobile ? "-mobile" : ""}.png`}
          />
          <img
            src="/images/phone-banner.png"
            alt="bitafika phone image"
            className={styles.PhoneBanner}
            style={{
              transform: isHover
                ? "scale(1.2,1.2) translateY(-5%)"
                : "scale(1, 1) translateY(0)",
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          />
          <img
            className={styles.RightCoins}
            alt="left coin"
            src={`/images/right-coins${isMobile ? "-mobile" : ""}.png`}
          />
        </section>
        <section className={styles.IntroText}>
          <h1 className={styles.Header}>
            The{" "}
            <span className={styles.BlueText}>
              {HEADER_TEXT_OPTIONS[choiceIndex]}
            </span>{" "}
            way to buy and sell{" "}
            <span className={styles.YellowText}>cryptocurrency</span>
          </h1>
          <p className={styles.SubHeader}>
            Buy, sell, send or receive cryptocurrency with ease. Fast, secure
            and 24/7. No hidden Fees
          </p>
        </section>
        <section className={styles.DownloadButtons}>
          <StoreButton store="apple" />
          <StoreButton store="google" />
        </section>
        <div className={styles.ScrollContainer}>
          <a href="#SendingText">
            <img src="/icons/arrow-down.svg" alt="arrow down" />
          </a>
        </div>
        <h3 className={styles.GetStarted}>How to get started</h3>
        <h3 id="SendingText" className={styles.SendingText}>
          Sending and recieving cryptocurrency in a smarter way
        </h3>
        <CreateAccount />
        <FundBuySection />
        <h3 className={styles.GetStarted}>Why us?</h3>
        <h3 className={styles.SendingText}>
          Why you should choose{" "}
          <span className={styles.BlueText}>BitAfrika</span>
        </h3>
        <div className={styles.ThumbnailContainer}>
          <Thumbnail items={THUMBNAIL_DATA} />
        </div>
        <div className={styles.ThumbnailContainerMobile}>
          <Thumbnail items={THUMBNAIL_DATA_MOBILE} />
        </div>
        <h3 className={styles.SendingText} style={{ marginTop: "1.5rem" }}>
          Sending and recieving cryptocurrency seamlessly in a smarter way
        </h3>
        <TransactionSection />
        <KeySection />
        <ReadyToJoinSection />
      </PageLayout>
    </>
  );
};

export default Home;
