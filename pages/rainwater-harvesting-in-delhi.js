import { Footer } from "@/components/Footer/Footer";
import { Hero1 } from "@/components/Hero/Hero1";
import LocationTarget from "@/components/LocationTarget/LocationTarget";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import Head from "next/head";
import PopUp from "@/components/popup";

const RainwaterDelhi = () => {
  const title =
    "Rainwater Harvesting System in Delhi | Rainwater Harvesting System Service Provider in Delhi";
  const desc =
    "Are you finding Rainwater Harvesting System in Delhi. We have the best quality Rainwater Harvesting System that helps you with harvesting rainwater. Don't we late to Rainwater Harvesting System Service Provider in Delhi at the best price?";
  const keyword =
    "Rooftop Rainwater Harvesting System in Delhi, Modular Rainwater Harvesting System in Delhi, Rainwater Harvesting Tank in Delhi, Polymer Type Rainwater Harvesting System in Delhi, Storm water Management in Delhi";
  const canonical =
    "https://www.inrainconstruction.com/rainwater-harvesting-in-delhi";
  const ogUrl =
    "https://www.inrainconstruction.com/rainwater-harvesting-in-delhi";
  const ogTitle =
    "Rainwater Harvesting System in Delhi | Rainwater Harvesting System Service Provider in Delhi";
  const ogDescription =
    "Are you finding Rainwater Harvesting System in Delhi. We have the best quality Rainwater Harvesting System that helps you with harvesting rainwater. Don't we late to Rainwater Harvesting System Service Provider in Delhi at the best price?";
  const twittertitle =
    "Rainwater Harvesting System in India | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Are you searching for a Rainwater harvesting system? InRain Water Harvesting company that provides Rainwater harvesting system based on the technology adopted from Germany. Contact us today for a free consultation.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="description" content={desc} />
        <meta name="keywords" content={keyword} />
        <meta name="canonical" content={canonical} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={ogUrl} />
        <meta name="twitter:title" content={twittertitle} />
        <meta name="twitter:description" content={twitterdescription} />
        <meta name="author" content="InRain® Construction Pvt Ltd"></meta>
        <meta
          property="og:site_name"
          content="InRain® Construction Pvt. Ltd."
        />
        <meta
          name="google-site-verification"
          content="Vger2ATzpz22dMQGSECVrk-fiHzoT9KVObqb1m9k3HA"
        />
      </Head>
      <Navbar />
      <PopUp />
      <Hero1 />
      <LocationTarget location={"Delhi"} />
      <Footer />
    </>
  );
};

export default RainwaterDelhi;
