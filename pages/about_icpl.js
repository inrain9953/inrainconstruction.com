import { Navbar } from "@/components/Navbar/Navbar";
import PopUp from "@/components/popup";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Footer } from "@/components/Footer/Footer";
import md from "./../public/inrain-md.jpg";
import ICPLCertification from "@/components/ICPL/ICPLCertification";

const TEXTS = [
  "Rainwater Harvesting",
  "Rainwater Harvesting System For Warehouse",
  "Modular Rainwater Harvesting System",
  "Roof Top Rainwater Harvesting",
  "Polymer based Rainwater Harvesting System",
];

const AboutICPL = () => {
  const title = "About ICPL | InRain® Construction Pvt. Ltd.";
  const desc =
    "Modular Rainwater Harvesting by ICPL—India’s leader in sustainable, load-bearing, polymer-based RWH systems for smart cities, industries & urban infrastructure.";
  const keyword =
    "ICPL, InRain® Construction Pvt. Ltd., Mr. Nishant Gaurav, Rainwater Harvesting, Modular Rainwater Harvesting System, Sustainable Water Management, Load-bearing RWH, Smart City Water Solutions, Urban Stormwater Management, Rainwater Harvesting India, Polymer Based RWH, Rooftop Harvesting. ";
  const canonical = "https://www.inrainconstruction.com/about_icpl";
  const ogUrl = "https://www.inrainconstruction.com/about_icpl";
  const ogTitle = "About ICPL | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Modular Rainwater Harvesting by ICPL—India’s leader in sustainable, load-bearing, polymer-based RWH systems for smart cities, industries & urban infrastructure.";
  const twittertitle = "About ICPL | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Modular Rainwater Harvesting by ICPL—India’s leader in sustainable, load-bearing, polymer-based RWH systems for smart cities, industries & urban infrastructure.";

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

      <div className="container mx-auto bg-gray-50 md:pl-10 md:pr-10 md:gap-5 p-4 md:grid md:grid-cols-2 justify-center items-center">
        <div className="text-justify">
          <h1 className="md:text-[30px] text-[20px] font-semibold">
            About ICPL: InRain® Construction Pvt. Ltd.
          </h1>
          <p className="md:text-[17px] text-[15px] drop-shadow-lg md:mt-2">
            InRain® Construction Pvt. Ltd. (ICPL) is the{" "}
            <a
              className="text-sky-500 hover:text-green-500 md:text-[20px] text-[18px] font-semibold"
              target="_blank"
              href="https://www.inrainconstruction.com/modular-rainwater-harvesting"
            >
              Modular Rainwater Harvesting
            </a>{" "}
            subsidiary of Singh & Singh Construction—an experienced civil
            construction firm with over 30 years of expertise in India.
            Leveraging this foundation, ICPL has become a national leader in
            sustainable water management.
            <br />
            <br />
            With more than{" "}
            <bold className="text-green-500 text-[18px] md:text-[20px] font-semibold">
              4,000 successful installations
            </bold>
            , ICPL’s innovative,{" "}
            <a
              className="text-sky-500 hover:text-green-500 text-[18px] md:text-[20px] font-semibold"
              target="_blank"
              href="https://www.inrainconstruction.com/co-polymer-based-rainwater-harvesting-system"
            >
              Polymer-based Rainwater Harvesting Systems
            </a>{" "}
            have conserved billions of gallons of rainwater across the residential,
            commercial, and public sectors. Our flagship solution is a
            cutting-edge, scientific RWH system featuring a world‑first
            load‑bearing modular structure capable of supporting over
            50 t/m²—ideal for high-traffic areas like roads and parking lots.
            <br />
            <br />
            Our in‑house R&D and manufacturing facilities allow us to uphold
            strict quality, safety, and sustainability standards—principles we
            proudly champion as part of the{" "}
            <bold className="text-green-500 text-[18px] md:text-[20px] font-semibold">
              “Make in India”
            </bold>{" "}
            initiative. ICPL’s rainwater harvesting technology—based on
            German-inspired modular designs—offers quick installation, high
            water-use efficiency (95% usable capacity vs. ~55% in traditional
            civil pits), and low maintenance requirements.
            <br />
            <br />
            Our systems aren’t just functional—they’re also aesthetic and
            adaptable, delivering turnkey solutions for rooftops, underground
            recharge pits, and{" "}
            <a
              href="https://www.inrainconstruction.com/storm-water-recharge-and-management"
              target="_blank"
              className="text-sky-500 hover:text-green-500 text-[18px] md:text-[20px] font-semibold"
            >
              Stormwater Management in Urban and Industrial Environments.
            </a>
            <br />
            <br />
            Backed by decades of civil expertise and a passion for eco-friendly
            innovation, ICPL empowers clients—from municipal bodies and smart
            cities to residential societies and industries—to sustainably manage
            water resources while reducing environmental impact.
          </p>
        </div>
        <div className="md:flex mt-5 md:mt-0 md:flex-col justify-center items-center">
          <Image
            src={md}
            alt="Mr. Nishant Gaurav (Chairman & Managing Director)"
            className="w-96 h-auto m-auto rounded-2xl shadow-2xl "
            loading="eager"
            priority={true}
            unoptimized={true}
          />
          <h2 className="md:text-[20px] text-[18px] text-center m-2 font-semibold">
            Mr. Nishant Gaurav
            <br />( Chairman & Managing Director )
          </h2>
          <p className="md:text-[14px] text-[12px] text-center">
            A dynamic leader driving innovation and excellence in the Rainwater
            Harvesting industry.
          </p>
        </div>
      </div>

      <ICPLCertification />
      <Footer />
    </>
  );
};

export default AboutICPL;
