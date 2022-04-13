/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import React, { useState } from "react";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import { ThumbnailItemType } from "../../components/Thumbnail/types";
import PageLayout from "../../templates/PageLayout/PageLayout";
import styles from "./b2b.module.css";

const THUMBNAIL_DATA: ThumbnailItemType[] = [
  {
    id: "1",
    title: "Organizations",
    image: "/images/organizations.png",
    text: "Great !! it's now time to fund your account. You can buy with Mobile Money or receive from an external wallet",
  },
  {
    id: "2",
    title: "Businesses",
    image: "/images/businesses.png",
    text: "Great !! it's now time to fund your account. You can buy with Mobile Money or receive from an external wallet",
  },
  {
    id: "3",
    title: "Individuals",
    image: "/images/individuals.png",
    text: "Great !! it's now time to fund your account. You can buy with Mobile Money or receive from an external wallet",
  },
  {
    title: (
      <h3 className={styles.ThumbnailHeader}>
        Are you <span className={styles.BlueText}>Ready?</span>
      </h3>
    ),
    customTitle: true,
    showButton: true,
    buttonTitle: "Get Started with B2B",
    text: "Are you an organisation, business or individual looking to trade over the counter (OTC) / bulk crypto ? Please click get started below to fill a short questionnaire ",
  },
];

const B2B: NextPage = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <PageLayout>
      <section
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={styles.Business2Business}
        style={{ backgroundColor: isHover ? "#2356E7" : "#F9F9F9" }}
      >
        <h1
          style={{
            color: !isHover ? "black" : "white",
          }}
          className={styles.Header}
        >
          Business 2 Business
        </h1>
        <img
          src="/images/business-advisers.png"
          className={styles.Image}
          style={{
            transform: isHover
              ? "scale(1.5, 1.5) translate(-10%, 10%)"
              : "scale(1, 1) translate(0, 0)",
          }}
        />
      </section>
      <Thumbnail items={THUMBNAIL_DATA} />
    </PageLayout>
  );
};

export default B2B;
