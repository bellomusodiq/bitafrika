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
    image: "/images/organizations.svg",
    text: "Are you an organization looking to trade over the counter (OTC) / bulk crypto ?",
  },
  {
    id: "2",
    title: "Businesses",
    image: "/images/businesses.svg",
    text: "Are you a business looking to trade over the counter (OTC) / bulk crypto ?",
  },
  {
    id: "3",
    title: "Individuals",
    image: "/images/individuals.svg",
    text: "Are you an individual looking to trade over the counter (OTC) / bulk crypto ?",
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
    text: "Are you an organization, business or individual looking to trade over the counter (OTC) / bulk crypto ? Please click on the link to chat with our OTC team ",
    url: "https://wa.me/+233574484735?text=hi there",
  },
];

const THUMBNAIL_DATA_MOBILE: ThumbnailItemType[] = [
  {
    id: "1",
    title: "Organizations",
    image: "/images/organizations.svg",
    text: "Are you an organization looking to trade over the counter (OTC) / bulk crypto ?",
    backgroundColor: "#2356E7",
    color: "white",
  },
  {
    id: "2",
    title: "Businesses",
    image: "/images/businesses.svg",
    text: "Are you a business looking to trade over the counter (OTC) / bulk crypto ?",
    backgroundColor: "rgba(35, 86, 231, 0.1)",
    color: "black",
  },
  {
    id: "3",
    title: "Individuals",
    image: "/images/individuals.svg",
    text: "Are you an individual looking to trade over the counter (OTC) / bulk crypto ?",
    backgroundColor: "#2356E7",
    color: "white",
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
    text: "Are you an organization, business or individual looking to trade over the counter (OTC) / bulk crypto ? Please click on the link to chat with our OTC team ",
    url: "https://wa.me/+233574484735?text=hi there",
  },
];

const B2B: NextPage = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <PageLayout>
      <section
        // onMouseEnter={() => setIsHover(true)}
        // onMouseLeave={() => setIsHover(false)}
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
          src="/images/business-advisers.svg"
          className={styles.Image}
          style={{
            transform: isHover
              ? "scale(1.5, 1.5) translate(-10%, 10%)"
              : "scale(1, 1) translate(0, 0)",
          }}
        />
      </section>
      <div className={styles.ThumbnailContainer}>
        <Thumbnail items={THUMBNAIL_DATA} />
      </div>
      <div className={styles.ThumbnailContainerMobile}>
        <Thumbnail items={THUMBNAIL_DATA_MOBILE} />
      </div>
    </PageLayout>
  );
};

export default B2B;
