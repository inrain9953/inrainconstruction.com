import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import PopUp from "@/components/popup";
import React from "react";
import service11 from "./../public/service11.jpg";
import harvesting11 from "./../public/services/harvesting7.jpg";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const RainwaterHarvestingSystem = () => {
  const title = "Rain water Harvesting System | InRain® Construction Pvt. Ltd.";
  const desc =
    "Are you searching for a rain water harvesting system in Delhi? We are a Rain water Harvesting Company with a strong presence all Over India that provides rain water harvesting system services and consultants.";
  const keyword =
    "rain water harvesting system in Delhi, rain water harvesting, rain harvesting system, Urban Water Sustainability, rain water harvesting company, Water Conservation Techniques, Stormwater Runoff Control, Rain water Harvesting System Services in Delhi";
  const canonical =
    "https://www.inrainconstruction.com/rainwater-harvesting-system";
  const ogUrl =
    "https://www.inrainconstruction.com/rainwater-harvesting-system";
  const ogTitle =
    "Rain water Harvesting System | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Are you searching for a rain water harvesting system in Delhi? We are a Rain water Harvesting Company with a strong presence all Over India that provides rain water harvesting system services and consultants.";
  const twittertitle =
    "Rain water Harvesting System | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Are you searching for a rain water harvesting system in Delhi? We are a Rain water Harvesting Company with a strong presence all Over India that provides rain water harvesting system services and consultants.";

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
      <div className="mt-5 md:m-10">
        <div data-aos="fade-up">
          <Image
            className="w-full md:rounded-xl md:shadow-2xl"
            src={service11}
            alt="img"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
        </div>

        <div className="m-5 md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div data-aos="fade-up" className="text-left">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Rain water Harvesting System
            </h1>

            <p className="text-[17px] text-justify md:text-lg mt-3">
              <Link
                href={
                  "https://www.inrainconstruction.com/rainwater-harvesting-system"
                }
                className="font-semibold text-green-500 hover:text-sky-500"
              >
                Rain water harvesting
              </Link>{" "}
              is the process of collecting, storing, and using rain water for
              various purposes, such as irrigation, drinking, and household use.
              This eco-friendly practice reduces dependency on groundwater and
              municipal water supplies, contributing to water conservation and
              sustainable resource management.{" "}
            </p>

            <h2 className="text-2xl mt-5 md:text-3xl font-semibold">
              Key Components of a Rain water Harvesting System:
            </h2>
            <ul className="list-disc m-5 text-[17px] text-justify md:text-lg">
              <li>
                <bold className="font-semibold">Catchment Area:</bold> Typically
                the rooftop, where rain water is collected.
              </li>
              <li>
                <bold className="font-semibold">Conveyance System:</bold>{" "}
                Gutters and downspouts that transport water from the catchment
                to the storage system.
              </li>
              <li>
                <bold className="font-semibold">Filter:</bold> Removes debris,
                leaves, and contaminants to ensure clean water storage.
              </li>
              <li>
                <bold className="font-semibold">Storage Tanks:</bold> Containers
                or underground reservoirs for storing harvested rain water.
              </li>
              <li>
                <bold className="font-semibold">Distribution System:</bold>{" "}
                Pumps and pipes for transporting stored water to areas of use.
              </li>
            </ul>

            <h3 className="text-2xl mt-5 md:text-3xl font-semibold">
              Benefits:
            </h3>
            <ul className="list-disc m-5 text-[17px] text-justify md:text-lg">
              <li>
                <bold className="font-semibold">Water Conservation:</bold>{" "}
                Reduces pressure on groundwater resources.
              </li>
              <li>
                <bold className="font-semibold">Cost Savings:</bold> Lowers
                water bills and minimizes reliance on external water sources.
              </li>
              <li>
                <bold className="font-semibold">Flood Mitigation:</bold>{" "}
                Prevents water runoff and reduces urban flooding risks.
              </li>
              <li>
                <bold className="font-semibold">Environmental Impact:</bold>{" "}
                Decreases energy consumption associated with water supply and
                promotes sustainable living.
              </li>
            </ul>

            <h3 className="text-2xl mt-5 md:text-3xl font-semibold">
              Applications:
            </h3>
            <p className="text-[17px] text-justify md:text-lg mt-3">
              Rain water harvesting systems can be used in residential
              buildings, commercial complexes, agricultural fields, and
              industrial setups. Common uses include garden irrigation, toilet
              flushing, washing vehicles, and supplementing drinking water after
              proper treatment.
            </p>

            <h3 className="text-2xl mt-5 md:text-3xl font-semibold">
              Maintenance:
            </h3>
            <p className="text-[17px] text-justify md:text-lg mt-3">
              Regular cleaning of catchment areas, filters, and storage tanks is
              essential to maintain water quality and system efficiency.
              Periodic checks on pipes and pumps ensure uninterrupted water
              flow.
              <br /> Rain water harvesting is an effective, low-cost solution to
              tackle water scarcity and enhance resource sustainability, making
              it a vital practice for communities worldwide.
            </p>
          </div>
          <div data-aos="fade-up" className="mt-5">
            <Image
              className="w-full"
              src={harvesting11}
              alt="img"
              loading="eager"
              priority={true}
              unoptimized={true}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RainwaterHarvestingSystem;
