import { Inter } from "next/font/google";
import { Hero1 } from "@/components/Hero/Hero1";
import { Hero3 } from "@/components/Hero/Hero3";
import { Hero2 } from "@/components/Hero/Hero2";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import Head from "next/head";
import PopUp from "@/components/popup";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const title =
    "Rainwater Harvesting System in India | Modular Rainwater Harvesting | InRain® Construction Pvt. Ltd.";
  const desc =
    "Are you searching for a Rainwater harvesting system? InRain Water Harvesting company that provides Best Rainwater harvesting system based on the technology adopted from Germany. Contact us today for a free consultation.";
  const keyword =
    "rainwater harvesting system in india, modular rainwater harvesting, rainwater harvesting filtration system, roof top rainwater harvesting, rainwater harvesting in delhi, rainwater harvesting for industries, water harvesting system";
  const canonical = "https://www.inrainconstruction.com/";
  const ogUrl = "https://www.inrainconstruction.com/";
  const ogTitle =
    "Rainwater Harvesting System in India | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Are you searching for a Rainwater harvesting system? InRain Water Harvesting company that provides Best Rainwater harvesting system based on the technology adopted from Germany. Contact us today for a free consultation.";
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
      <Hero2 />
      <Hero3 />
      <Footer />
    </>
  );
}
