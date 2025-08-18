import { Footer } from "@/components/Footer/Footer";
import PolymerTypeLocationTarget from "@/components/LocationTarget/PolymerTypeLocationTarget";
import { Navbar } from "@/components/Navbar/Navbar";
import PopUp from "@/components/popup";
import Head from "next/head";
import React from "react";

const PolymerTypeFaridabad = () => {
  const loc = "Faridabad";

  const title = `Polymer based Rainwater Harvesting System in ${loc} | Polymer based Rainwater Harvesting System Service Provider in ${loc}`;
  const desc = `Are you finding Polymer based Rainwater Harvesting System in ${loc}. We are the best Rainwater Harvesting System Manufacturers in ${loc} that helps you with harvesting rainwater. Don't we late to Rainwater Harvesting System Service Provider in ${loc} at the best price?`;
  const keyword = `Polymer based Rainwater Harvesting System in ${loc}, Polymer based Rainwater Harvesting System Service Provider in ${loc}, Rooftop Rainwater Harvesting System in ${loc}, Rain Water Harvesting System Manufacturers In ${loc}, Rain Water Harvesting System Suppliers In ${loc}, Rain Water Harvesting System Exporters, Best Rain Water Harvesting System In ${loc}`;
  const canonical =
    "https://www.inrainconstruction.com/polymer-based-rainwater-harvesting-system-in-faridabad";
  const ogUrl =
    "https://www.inrainconstruction.com/polymer-based-rainwater-harvesting-system-in-faridabad";
  const ogTitle = `Polymer based Rainwater Harvesting System in ${loc} | Polymer based Rainwater Harvesting System Service Provider in ${loc}`;
  const ogDescription = `Are you finding Polymer based Rainwater Harvesting System in ${loc}. We are the best Rainwater Harvesting System Manufacturers in ${loc} that helps you with harvesting rainwater. Don't we late to Rainwater Harvesting System Service Provider in ${loc} at the best price?`;
  const twittertitle = `Polymer based Rainwater Harvesting System in ${loc} | Polymer based Rainwater Harvesting System Service Provider in ${loc}`;
  const twitterdescription = `Are you finding Polymer based Rainwater Harvesting System in ${loc}. We are the best Rainwater Harvesting System Manufacturers in ${loc} that helps you with harvesting rainwater. Don't we late to Rainwater Harvesting System Service Provider in ${loc} at the best price?`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="language" content="en" />
        <meta name="author" content="InRain® Construction Pvt. Ltd." />
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
      <PolymerTypeLocationTarget location={"Faridabad"} />
      <Footer />
    </>
  );
};

export default PolymerTypeFaridabad;
