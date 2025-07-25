import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import service9 from "./../public/service9.jpg";
import harvesting9 from "./../public/blog4.jpg";
import Image from "next/image";
import Head from "next/head";
import PopUp from "@/components/popup";
import Link from "next/link";

const Service9 = () => {
  const title =
    "Storm Water Recharge and Management | InRain® Construction Pvt. Ltd.";
  const desc =
    "Storm Water Recharge and management :- Urban stormwater is rainfall and snowmelt that seeps into the ground or runs off the land into storm sewers, streams and lakes.";
  const canonical =
    "https://www.inrainconstruction.com/storm-water-recharge-and-management";
  const ogUrl =
    "https://www.inrainconstruction.com/storm-water-recharge-and-management";
  const keyword =
    "Storm Water Recharge, Storm Water Management, Sustainable Water Conservation, Urban Water Solutions, Sponge City Concept, Bioretention Techniques, Permeable Pavement Systems, Green Infrastructure, Rainwater Runoff Management, Stormwater Filtration, InRain Construction Pvt. Ltd.";
  const ogTitle =
    "Storm Water Recharge and Management | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Storm Water Recharge and management :- Urban stormwater is rainfall and snowmelt that seeps into the ground or runs off the land into storm sewers, streams and lakes.";
  const twittertitle =
    "Storm Water Recharge and Management | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Storm Water Recharge and management :- Urban stormwater is rainfall and snowmelt that seeps into the ground or runs off the land into storm sewers, streams and lakes.";

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
      <div className="mt-5 md:m-10">
        <div data-aos="zoom-in-up">
          <Image
            className="w-full h-28 md:h-72 md:rounded-xl md:shadow-2xl relative"
            src={service9}
            alt="Storm Water Recharge and Management"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
          <div className="absolute md:bottom-2 bottom-0 md:left-5 left-2">
            <p className="text-xs md:text-lg text-black">
              <Link href={"/"}>Home</Link> / Storm Water Recharge and Management
            </p>
          </div>
        </div>

        <div className="m-5 md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div data-aos="zoom-in-up" className="text-left">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Storm Water Recharge and Management
            </h1>

            <p className="text-[17px] text-justify md:text-lg mt-3">
              Stormwater recharge & management is very crucial in the
              modern-day world. Climatic change and depreciating resources
              require humankind to take steps for water conservation to maintain
              sustainable development and growth. We can easily see the negative
              effect of fast-paced urban development on natural resources like
              water; to mitigate adverse effects, incorporating stormwater
              recharge and management in the current development plan is very
              important. <br></br>
              <br></br>
              Urbanization and rainwater harvesting have to go hand in hand for
              sustainable development. A concept like sponge city has already
              started making waves. The primary aim of a sponge city is to use
              rainwater to revive our natural resources. The concept focuses on
              absorbing, storing, and utilizing rainwater runoff.
              <br></br>
              <br></br>
              At Inrain Constructions, we aim to provide you with time and
              money-saving solutions for water conservation. We use various
              techniques to manage stormwater runoff. The collected runoff water
              across different surfaces gets through a connected recharge shaft,
              and after getting filtered, it gets stored in a honeycomb box-type
              structure. This saves funds for the construction of excess sewage
              lines and overpumps by local bodies.
              <br></br>
              <br></br>We also offer stormwater recharge and management
              solutions like
              <br></br>
              <br></br>
              <bold className="font-semibold">Bioretention:</bold> This
              methodology uses plants and herbs for capturing and filtering
              water in excess rainwater. It not only helps in removing
              pollutants from the water but also helps in{" "}
              <Link
                href={
                  "https://www.inrainconstruction.com/ground-water-recharge-system-for-industries"
                }
                className="text-green-600 hover:text-sky-500 font-semibold"
              >
                recharging groundwater.
              </Link>
              <br></br>
              <br></br>
              <bold className="font-semibold">Permeable Pavement:</bold> It is
              one of the most popular techniques of the current time. It is
              equally popular in both urban and suburban areas. It uses a porous
              surface of permeable concrete that lets runoff water infiltrate
              into the ground. This technique is very useful in parking lots,
              sidewalks, and internal housing society roads.
              <br></br>
              <br></br>
              Green roofs, rain garder and constructed wetlands are a few other
              ways of managing stormwater runoff. Stormwater management
              provides more sustainable and effective solutions that benefit
              both the environment and society.
            </p>
          </div>
          <div data-aos="zoom-in-up" className="mt-5">
            <Link href={"https://www.inrainconstruction.com"}>
              <Image
                className="w-full"
                src={harvesting9}
                alt="How to harvest rainwater"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service9;
