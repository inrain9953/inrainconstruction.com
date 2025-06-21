import { ModularLocationWise } from "@/components/constant";
import { Footer } from "@/components/Footer/Footer";
import { Hero1 } from "@/components/Hero/Hero1";
import { Navbar } from "@/components/Navbar/Navbar";
import PopUp from "@/components/popup";
import hero2Img from "./../public/Technology/main2.jpeg";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const ModularRainwaterIndia = () => {
  const title =
    "Modular Rainwater Harvesting System in India | Rainwater Harvesting System in India | InRain® Construction Pvt. Ltd.";
  const desc =
    "Are you finding Modular Rainwater Harvesting System in India. We have the best quality Modular Rainwater Harvesting System that helps you with harvesting rainwater. Don't we late to Rainwater Harvesting System Service Provider in India at the best price?";
  const keyword =
    "Modular Rainwater Harvesting System in India, Rainwater Harvesting System in India, Modular Rainwater Harvesting Service Provider, Modular Rainwater Harvesting Service Provider in Delhi, Modular Rainwater Harvesting System";
  const canonical =
    "https://www.inrainconstruction.com/modular-rainwater-harvesting-system-in-india";
  const ogUrl =
    "https://www.inrainconstruction.com/modular-rainwater-harvesting-system-in-india";
  const ogTitle =
    "Modular Rainwater Harvesting System in India | Rainwater Harvesting System in India | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Are you finding Modular Rainwater Harvesting System in India. We have the best quality Modular Rainwater Harvesting System that helps you with harvesting rainwater. Don't we late to Rainwater Harvesting System Service Provider in India at the best price?";
  const twittertitle =
    "Modular Rainwater Harvesting System in India | Rainwater Harvesting System in India | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Are you finding Modular Rainwater Harvesting System in India. We have the best quality Modular Rainwater Harvesting System that helps you with harvesting rainwater. Don't we late to Rainwater Harvesting System Service Provider in India at the best price?";

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
      <div className="mt-10">
        <div
          data-aos="zoom-in-up"
          className="text-center m-5 md:ml-52 md:mr-52"
        >
          <h1 className="text-lg md:text-xl font-semibold shadow-xl rounded-lg bg-sky-500 h-14 align-middle flex justify-center items-center">
            Modular Rainwater Harvesting System in India
          </h1>
          <p className="text-[16px] md:text-[18px] mt-5 text-justify text-gray-700 md:pl-28 md:pr-28">
            India facing rising of water scarcity, mostly the urban areas facing
            scarcity of water. Speedy development, because of fast development
            of cities. Led to a decline in the availability of freshwater
            resources because of the inconsistent monsoon patterns. They are
            which hang on deeply on centralized water systems. Some time they
            faced with increasing gab between demand of water and supply of
            water. The rainwater harvesting system is become is bridge for
            filling gap tapping into the natural rainfall and providing another
            source of water for uses.
            <br /> The{" "}
            <Link
              href={
                "https://www.inrainconstruction.com/rainwater-harvesting-system"
              }
              className="text-green-600 hover:text-sky-500 font-semibold"
            >
              Rainwater Harvesting System
            </Link>{" "}
            work is collecting water from rooftop and hard surface area, after
            that it will be store in storage tank under the ground or recharge
            the groundwater level. That is the best for increasing ground water
            level and it is also eco-friendly. Rainwater harvesting system
            prepared in low cost. This is cost friendly for both urban areas and
            rural areas. Rainwater harvesting is the way to reduce dependence on
            municipal water source and save are traditional water sources. This
            best way to solve water problems in India.
          </p>
        </div>

        <div data-aos="zoom-in-up" className="md:grid md:grid-cols-3 md:m-12">
          <div className="text-center m-5 mt-7">
            <p className="text-lg md:text-xl font-semibold text-black shadow-xl rounded-lg bg-sky-500 h-14 align-middle flex justify-center items-center">
              Vision
            </p>
            <p className="text-[16px] md:text-[18px] mt-5 text-justify text-gray-700">
              The solution is aimed at solving the problem of the water crisis
              in cities where there is a lack of space for storage of water and
              huge populations, leading to a shortage of water supply and
              excessive withdrawal of water from the ground.
            </p>
          </div>

          <div data-aos="fade-up" className="text-center m-3 mt-7">
            <Image
              className="w-full shadow-2xl"
              src={hero2Img}
              alt="img"
              loading="eager"
              priority={true}
              unoptimized={true}
            />
          </div>

          <div data-aos="fade-up" className="text-center m-5 mt-7">
            <h2 className="text-lg md:text-xl font-semibold text-black shadow-xl rounded-lg bg-sky-500 h-14 align-middle flex justify-center items-center">
              Modular Rainwater Harvesting
            </h2>
            <p className="text-[16px] md:text-[18px] text-justify mt-5 text-gray-700">
              <Link
                className="text-green-500 hover:text-sky-500"
                href="https://www.inrainconstruction.com/modular-rainwater-harvesting"
              >
                Modular Rainwater Harvesting
              </Link>{" "}
              is a new technique for rainwater harvesting. It is both convenient
              and easy to maintain in comparison to traditional RWH. This New
              Age RWH system is designed with a maintenance-free structure,
              which makes it both cost-effective and eco-friendly.
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-center text-3xl font-bold">Business Network</p>
        <div className="md:grid md:grid-cols-6 grid grid-cols-3 m-5 border-2 bg-sky-200 border-black p-3 md:p-5">
          {ModularLocationWise.map((items) => (
            <a
              data-aos="zoom-in-up"
              className="text-center m-1 text-[14px] md:text-[17px] font-semibold hover:text-green-500"
              href={items.url}
            >
              {items.location}
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ModularRainwaterIndia;
