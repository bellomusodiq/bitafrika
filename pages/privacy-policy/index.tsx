/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import React, { useState } from "react";
import PageLayout from "../../templates/PageLayout/PageLayout";
import styles from "./privacy-policy.module.css";

const PrivacyPolicy: NextPage = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <PageLayout>
      <section
        // onMouseEnter={() => setIsHover(true)}
        // onMouseLeave={() => setIsHover(false)}
        className={styles.PrivacyPolicy}
        style={{ backgroundColor: isHover ? "#2356E7" : "#F9F9F9" }}
      >
        <h1
          style={{
            color: !isHover ? "black" : "white",
          }}
          className={styles.Header}
        >
          Privacy Policy
        </h1>
        <img
          src="/images/document.svg"
          className={styles.Image}
          style={{
            transform: isHover
              ? "scale(1.5, 1.5) translate(0, 10%)"
              : "scale(1, 1) translate(0, 0)",
          }}
        />
      </section>
      <article className={styles.Article}>
        <h3 className={styles.Title}>Privacy Policy</h3>
        <h4 className={styles.SubTitle}>Updated at 2021-07-01</h4>
        <p className={styles.Text}>
          BitAfrika (“we,” “our,” or “us”) is committed to protecting your
          privacy. This Privacy Policy explains how your personal information is
          collected, used, and disclosed by BitAfrika.
        </p>
        <p className={styles.Text}>
          This Privacy Policy applies to our website, and its associated
          subdomains (collectively, our “Service”) alongside our application,
          BitAfrika. By accessing or using our Service, you signify that you
          have read, understood, and agree to our collection, storage, use, and
          disclosure of your personal information as described in this Privacy
          Policy and our Terms of Service.
        </p>
        <h3 className={styles.Title}>Definitions and key terms</h3>
        <p className={styles.Text}>
          To help explain things as clearly as possible in this Privacy Policy,
          every time any of these terms are referenced, are strictly defined as:
        </p>
        <p className={styles.Text}>
          <span className={styles.BoldText}>Cookie:</span> Small amount of data
          generated by a website and saved by your web browser. It is used to
          identify your browser, provide analytics, remember information about
          you such as your language preference or login information.
        </p>
        <p className={styles.Text}>
          <span className={styles.BoldText}>Company:</span> When this policy
          mentions “Company,” “we,” “us,” or “our,” it refers to BitAfrika
          Limited, No 15 Munasak Plaza Lagos Avenue - East Legon, Accra, Ghana.
          that is responsible for your information under this Privacy Policy.
        </p>
        <p className={styles.Text}>
          <span className={styles.BoldText}>Country:</span> Where BitAfrika or
          the owners/founders of BitAfrika are based, in this case is Ghana
        </p>
        <p className={styles.Text}>
          <span className={styles.BoldText}>Customer:</span> Refers to the
          company, organization or person that signs up to use the BitAfrika
          Service to manage the relationships with your consumers or service
          users.
        </p>
        <p className={styles.Text}>
          <span className={styles.BoldText}>Device:</span> Any internet
          connected device such as a phone, tablet, computer or any other device
          that can be used to visit BitAfrika and use the services
        </p>
        <p className={styles.Text}>
          <span className={styles.BoldText}>IP Address:</span> Every device
          connected to the Internet is assigned a number known as an Internet
          protocol (IP) address. These numbers are usually assigned in
          geographic blocks. An IP address can often be used to identify the
          location from which a device is connecting to the Internet.
        </p>
        <p className={styles.Text}>
          <span className={styles.BoldText}>Personnel:</span> Refers to those
          individuals who are employed by BitAfrika or are under contract to
          perform a service on behalf of one of the parties.
        </p>
        <p className={styles.Text}>
          <span className={styles.BoldText}>Personal Data:</span> Any
          information that directly, indirectly, or in connection with other
          information — including a personal identification number — allows for
          the identification or identifiability of a natural person.
        </p>
        <p className={styles.Text}>
          <span className={styles.BoldText}>Service:</span> Refers to the
          service provided by BitAfrika as described in the relative terms (if
          available) and on this platform.
        </p>
        <p className={styles.Text}>
          <span className={styles.BoldText}>Third-party service:</span> Refers
          to advertisers, contest sponsors, promotional and marketing partners,
          and others who provide our content or whose products or services we
          think may interest you.
        </p>
        <p className={styles.Text}>
          <span className={styles.BoldText}>Website:</span> BitAfrika&apos;s
          site, which can be accessed via this URL:{" "}
          <a href="https://bitafrika.com">https://bitafrika.com</a>
        </p>
        <p className={styles.Text}>
          <span className={styles.BoldText}>You:</span> A person or entity that
          is registered with BitAfrika to use the Services.
        </p>
        <h3 className={styles.Title}>What Information Do We Collect?</h3>
        <p className={styles.Text}>
          We collect information from you when you visit our website/app,
          register on our site, place an order, subscribe to our newsletter,
          respond to a survey or fill out a form.
        </p>
        <p className={styles.Item}>Name / Username</p>
        <p className={styles.Item}>Phonenumber</p>
        <p className={styles.Item}>Email Addresses</p>
        <p className={styles.Item}>Job Titles</p>
        <p className={styles.Item}>Billing Addresss</p>
        <p className={styles.Item}>Age</p>
        <h3 className={styles.Title}>
          How Do We Use The Information We Collect?
        </h3>
        <p className={styles.Text}>
          Any of the information we collect from you may be used in one of the
          following ways:
        </p>
        <p className={styles.Text}>
          To personalize your experience (your information helps us to better
          respond to your individual needs)
          <br /> To improve our website/app (we continually strive to improve
          our website/app offerings based on the information and feedback we
          receive from you) <br />
          To improve customer service (your information helps us to more
          effectively respond to your customer service requests and support
          needs) <br />
          To process transactions <br />
          To administer a contest, promotion, survey or other site feature
          <br />
          To send periodic emails
        </p>
        <h3 className={styles.Title}>
          How Do We Use The Information We Collect?
        </h3>
        <p className={styles.Text}>
          Any of the information we collect from you may be used in one of the
          following ways:
        </p>
        <p className={styles.Text}>
          To personalize your experience (your information helps us to better
          respond to your individual needs) <br />
          To improve our website/app (we continually strive to improve our
          website/app offerings based on the information and feedback we receive
          from you) <br />
          To improve customer service (your information helps us to more
          effectively respond to your customer service requests and support
          needs) <br />
          To process transactions
          <br />
          To administer a contest, promotion, survey or other site feature
          <br />
          To send periodic emails
        </p>
        <h3 className={styles.Title}>
          How Do We Use The Information We Collect?
        </h3>
        <p className={styles.Text}>
          Any of the information we collect from you may be used in one of the
          following ways:
        </p>
        <p className={styles.Text}>
          To personalize your experience (your information helps us to better
          respond to your individual needs) <br />
          To improve our website/app (we continually strive to improve our
          website/app offerings based on the information and feedback we receive
          from you) <br />
          To improve customer service (your information helps us to more
          effectively respond to your customer service requests and support
          needs) <br />
          To process transactions
          <br />
          To administer a contest, promotion, survey or other site feature
          <br />
          To send periodic emails
        </p>
        <h3 className={styles.Title}>
          How Do We Use The Information We Collect?
        </h3>
        <p className={styles.Text}>How Do We Use The Information We Collect?</p>
        <p className={styles.Text}>
          To personalize your experience (your information helps us to better
          respond to your individual needs) <br />
          To improve our website/app (we continually strive to improve our
          website/app offerings based on the information and feedback we receive
          from you) <br />
          To improve customer service (your information helps us to more
          effectively respond to your customer service requests and support
          needs) <br />
          To process transactions
          <br />
          To administer a contest, promotion, survey or other site feature
          <br />
          To send periodic emails
        </p>
        <h3 className={styles.Title}>
          How Do We Use The Information We Collect?
        </h3>
        <p className={styles.Text}>
          Any of the information we collect from you may be used in one of the
          following ways:
        </p>
        <p className={styles.Text}>
          To personalize your experience (your information helps us to better
          respond to your individual needs) <br />
          To improve our website/app (we continually strive to improve our
          website/app offerings based on the information and feedback we receive
          from you) <br />
          To improve customer service (your information helps us to more
          effectively respond to your customer service requests and support
          needs) <br />
          To process transactions
          <br />
          To administer a contest, promotion, survey or other site feature
          <br />
          To send periodic emails
        </p>
        <h3 className={styles.Title}>
          How Do We Use The Information We Collect?
        </h3>
        <p className={styles.Text}>
          Any of the information we collect from you may be used in one of the
          following ways:
        </p>
        <p className={styles.Text}>
          To personalize your experience (your information helps us to better
          respond to your individual needs) <br />
          To improve our website/app (we continually strive to improve our
          website/app offerings based on the information and feedback we receive
          from you) <br />
          To improve customer service (your information helps us to more
          effectively respond to your customer service requests and support
          needs) <br />
          To process transactions
          <br />
          To administer a contest, promotion, survey or other site feature
          <br />
          To send periodic emails
        </p>
      </article>
    </PageLayout>
  );
};

export default PrivacyPolicy;
