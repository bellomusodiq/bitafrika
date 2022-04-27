import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import styles from "./PageLayout.module.css";
import { PageLayoutProps } from "./types";

const PageLayout: React.FC<PageLayoutProps> = ({ children, heroSection }) => {
  const [openSideDrawer, setOpenSideDrawer] = useState<boolean>(false);

  const toggleSideDrawer = () => {
    setOpenSideDrawer(!openSideDrawer);
  };

  return (
    <>
      <SideDrawer closeSideDrawer={toggleSideDrawer} open={openSideDrawer} />
      <Header toggleSideDrawer={toggleSideDrawer} />
      {heroSection}
      <main className={styles.PageLayout}>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
