import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="md:m-10 m-5">
        <h1 className="text-2xl font-bold">Privacy Policy</h1>
        <p className="text-lg pt-5">
          Thanks for visiting the website of InRain® Construction Private Limited.<br></br>
          <br></br> InRain® Construction Private Limited does not collect any personal
          information like names or addresses when you visit the website. You
          can visit the website without revealing personal information unless
          you choose to provide such information on your own. This website uses
          data related to your site visit to improve user experience and for
          statistical purposes. InRain® Construction Private Limited will not reveal
          information about your email address and browsing activities to any
          third party. Your email id will not be added to any mailing list
          without your consent. We do not identify users and reveal information
          about the users of the website except when any authority or any Court
          of law requires us to do so. This website does not use cookies. If
          there is any change to the above said Privacy Policy we shall post it
          on our website. If at any time you have any comments on these
          principles you may notify InRain Construction through the contact us page.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
