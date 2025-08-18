import { Footer } from "@/components/Footer/Footer";
import ModularLocationTarget from "@/components/LocationTarget/ModularLocationTarget";
import { Navbar } from "@/components/Navbar/Navbar";
import PopUp from "@/components/popup";
import Head from "next/head";
import React from "react";

const ModularUdaipur = () => {
  const loc = "Udaipur";

  const title = `Modular Rainwater Harvesting System in ${loc} | Modular Rainwater Harvesting System Service Provider in ${loc}`;
  const desc = `Are you finding Modular Rainwater Harvesting System in ${loc}. We are the best Rainwater Harvesting System Manufacturers in ${loc} that helps you with harvesting rainwater. Don't we late to Rainwater Harvesting System Service Provider in ${loc} at the best price?`;
  const keyword = `Modular Rainwater Harvesting System in ${loc}, Modular Rainwater Harvesting System Service Provider in ${loc}, Rooftop Rainwater Harvesting System in ${loc}, Rain Water Harvesting System Manufacturers In ${loc}, Rain Water Harvesting System Suppliers In ${loc}, Rain Water Harvesting System Exporters, Best Rain Water Harvesting System In ${loc}`;
  const canonical =
    "https://www.inrainconstruction.com/modular-rainwater-harvesting-system-in-udaipur";
  const ogUrl =
    "https://www.inrainconstruction.com/modular-rainwater-harvesting-system-in-udaipur";
  const ogTitle = `Modular Rainwater Harvesting System in ${loc} | Modular Rainwater Harvesting System Service Provider in ${loc}`;
  const ogDescription = `Are you finding Modular Rainwater Harvesting System in ${loc}. We are the best Rainwater Harvesting System Manufacturers in ${loc} that helps you with harvesting rainwater. Don't we late to Rainwater Harvesting System Service Provider in ${loc} at the best price?`;
  const twittertitle = `Modular Rainwater Harvesting System in ${loc} | Modular Rainwater Harvesting System Service Provider in ${loc}`;
  const twitterdescription = `Are you finding Modular Rainwater Harvesting System in ${loc}. We are the best Rainwater Harvesting System Manufacturers in ${loc} that helps you with harvesting rainwater. Don't we late to Rainwater Harvesting System Service Provider in ${loc} at the best price?`;

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
      <ModularLocationTarget location="Udaipur" />
      <Footer />
    </>
  );
};

export default ModularUdaipur;
