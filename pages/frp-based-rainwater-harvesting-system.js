import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import harvesting4 from "./../public/services/harvesting4.jpg";
import service4 from "./../public/service4.jpg";
import Image from "next/image";
import Head from "next/head";
import PopUp from "@/components/popup";

const Service4 = () => {
  const title =
    "FRP Based Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const desc =
    "FRP Based Rainwater Harvesting System: InRain® Construction Pvt. Ltd. solutions are in form of Pre Cast modular systems that can adapt itself to various site conditions and are highly reliable & efficient.";
  const keyword =
    "FRP Rainwater Harvesting System, Fiber Reinforced Polymer, Sustainable Water Conservation, Lightweight Water Tanks, Eco-Friendly Rainwater Harvesting, Cost-Effective Water Solutions, Corrosion-Resistant Water Tanks, Low-Maintenance Rainwater Systems, Portable Water Harvesting Tanks, Modern Rainwater Harvesting Technology, InRain Construction Pvt. Ltd., Environmental Sustainability, Housing Society Water Solutions, Industrial Water Conservation";
  const canonical =
    "https://www.inrainconstruction.com/frp-based-rainwater-harvesting-system";
  const ogUrl =
    "https://www.inrainconstruction.com/frp-based-rainwater-harvesting-system";
  const ogTitle =
    "FRP Based Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "FRP Based Rainwater Harvesting System: InRain® Construction Pvt. Ltd. solutions are in form of Pre Cast modular systems that can adapt itself to various site conditions and are highly reliable & efficient.";
  const twittertitle =
    "FRP Based Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "FRP Based Rainwater Harvesting System: InRain® Construction Pvt. Ltd. solutions are in form of Pre Cast modular systems that can adapt itself to various site conditions and are highly reliable & efficient..";

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
            className="w-full md:rounded-xl md:shadow-2xl"
            src={service4}
            alt="img"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
        </div>

        <div className="m-5 md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div data-aos="zoom-in-up" className="text-left">
            <h1 className="text-3xl md:text-4xl font-semibold">
              FRP Based Rainwater Harvesting System
            </h1>

            <p className="text-[17px] text-justify md:text-lg mt-3">
              <bold className="text-green-700 font-semibold">
                InRain<sup>®</sup>
              </bold>{" "}
              Construction Pvt. Ltd. is helping communities and industries by
              providing sustainable and cost-effective water conservation
              methods. Rainwater harvesting is no longer looked at as a
              time-consuming and costly solution with high maintenance. Advanced
              technology has quickly started to revolutionize the industry with
              its cost-effective solutions. We at Inrain Construction Pvt. Ltd.
              offer a wide range of solutions which are not only cost-effective
              but also environmentally friendly. <br></br>
              <br></br>
              The FRP-based rainwater harvesting system offers an economic
              solution to modern-day economic requirements. Fiber Reinforced
              Polymer-based systems are becoming popular very fast as they are
              not only lightweight but also very sturdy. Its ability to resist
              corrosion and ultraviolet makes it the material of choice for
              rainwater harvesting systems.
              <br></br>
              <br></br>
              In the traditional methods of rainwater harvesting system,
              installation cost and maintenance are the major challenges. As it
              was using concrete or metal for constructing the water collection
              tank or pit. These pits are not only expensive but also have high
              maintenance as they are prone to corrosion and developing
              infestation. However, Fiber Reinforced Polymers, on the other
              hand, are very durable and low on maintenance. This has increased
              the interest of people in FRP-based rainwater harvesting systems.
              <br></br>
              <br></br>
              These FRP based rainwater harvesting systems are portable and
              recyclable, which helps in reducing waste and cost. Thereby
              encouraging more and more people to adopt sustainable water
              conservation methods and reduce their dependency on mains water
              supply, as a result, helping the environment in an eco-friendly
              way.
              <br></br>
              <br></br>
              For all those housing societies and businesses that are looking to
              contribute to the environment positively, the FRP-based rainwater
              harvesting system is a perfect choice. So, whether you are
              building a new house, looking to reduce the water bill of your
              business or trying to include sustainable water conservation in
              your renovated accommodation, FRP-based rainwater harvesting
              offers the complete solution.
            </p>
          </div>
          <div data-aos="zoom-in-up" className="mt-5">
            <Image
              className="w-full"
              src={harvesting4}
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

export default Service4;
