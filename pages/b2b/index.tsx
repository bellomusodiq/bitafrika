/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import React from "react";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import { ThumbnailItemType } from "../../components/Thumbnail/types";
import PageLayout from "../../templates/PageLayout/PageLayout";
import styles from "./b2b.module.css";

const THUMBNAIL_DATA: ThumbnailItemType[] = [
  {
    title: "Organizations",
    image: "/images/organizations.png",
    text: "Great !! it's now time to fund your account. You can buy with Mobile Money or receive from an external wallet",
  },
  {
    title: "Businesses",
    image: "/images/businesses.png",
    text: "Great !! it's now time to fund your account. You can buy with Mobile Money or receive from an external wallet",
  },
  {
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
    showButton: true,
    buttonTitle: "Get Started with B2B",
    text: "Are you an organisation, business or individual looking to trade over the counter (OTC) / bulk crypto ? Please click get started below to fill a short questionnaire ",
  },
];

const B2B: NextPage = () => {
  return (
    <PageLayout>
      <section className={styles.Business2Business}>
        <h1 className={styles.Header}>Business 2 Business</h1>
        <img src="/images/business-advisers.png" className={styles.Image} />
      </section>
      <Thumbnail items={THUMBNAIL_DATA} />
    </PageLayout>
  );
};

export default B2B;
