import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import service7 from "./../public/service7.jpg";
import harvesting7 from "./../public/services/harvesting7.jpg";
import Image from "next/image";
import Head from "next/head";
import PopUp from "@/components/popup";
import Link from "next/link";

const Service7 = () => {
  const title =
    "Rainwater Harvesting Vendors in Delhi-Gurgaon | InRain® Construction Pvt. Ltd.";
  const desc =
    "Rainwater Harvesting Vendors in Delhi-Gurgaon India. We are offering best quality rainwater Harvesting system in affordable price.";
  const canonical =
    "https://www.inrainconstruction.com/rainwater-harvesting-vendors-in-delhi-gurgaon";
  const ogUrl =
    "https://www.inrainconstruction.com/rainwater-harvesting-vendors-in-delhi-gurgaon";
  const keyword =
    "Rainwater Harvesting Vendors, Delhi-Gurgaon Water Conservation, InRain Construction Pvt. Ltd., Modular Rainwater Systems, German Technology Rainwater Harvesting, Make in India Water Solutions, Eco-Friendly Water Conservation, Industrial Water Management, Groundwater Recharge Solutions, Rainwater Harvesting Installation, Delhi-Gurgaon Rainwater Projects, Sustainable Water Management";
  const ogTitle =
    "Rainwater Harvesting Vendors in Delhi-Gurgaon | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Rainwater Harvesting Vendors in Delhi-Gurgaon India. We are offering best quality rainwater Harvesting system in affordable price.";
  const twittertitle =
    "Rainwater Harvesting Vendors in Delhi-Gurgaon | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Rainwater Harvesting Vendors in Delhi-Gurgaon India. We are offering best quality rainwater Harvesting system in affordable price.";

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
            src={service7}
            alt="Rainwater Harvesting Vendors in Delhi-Gurgaon"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
          <div className="absolute md:bottom-2 bottom-0 md:left-5 left-2">
            <p className="text-xs md:text-lg text-black">
              <Link href={"/"}>Home</Link> / Rainwater Harvesting Vendors in
              Delhi-Gurgaon
            </p>
          </div>
        </div>

        <div className="m-5 md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div data-aos="zoom-in-up" className="text-left">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Rainwater Harvesting Vendors in Delhi-Gurgaon
            </h1>

            <p className="text-[17px] text-justify md:text-lg mt-3">
              InRain Construction Pvt. Ltd., a water conservation and management
              company, is one of the leading water conservation and management
              service providers. We are well known for providing
              technology-based modern solutions that meet today’s requirements.
              We are the topmost rainwater harvesting vendors in Delhi-Gurgaon.
              We completely understand the challenges of modern-day industries
              and housing societies. Therefore, we offer technologically
              advanced but cost-effective solutions for water conservation
              needs. <br></br>
              <br></br>
              Our rainwater harvesting systems are based on advanced German
              technology. We are proud to say that we are fully committed to the
              ‘Make in India’ initiative, and all our manufacturing is in-house,
              which helps to maintain a consistent quality, thereby helping us
              to achieve better customer satisfaction.
              <br></br>
              <br></br>
              India is a country that is densely populated, and there is a
              rising need for eco-friendly water conservation techniques. Hence,
              our advanced{" "}
              <Link
                href={
                  "https://www.inrainconstruction.com/modular-rainwater-harvesting"
                }
                className="text-green-600 hover:text-sky-500 font-semibold"
              >
                Modular Rainwater Harvesting System
              </Link>{" "}
              is a perfect match for our growing nation. Fortunately, our
              country has very good geolocation, and it sees decent rainfall
              every year, so utilizing the available natural rainwater is
              perfectly suitable here. Our modular rainwater harvesting systems
              are not only economical and eco-friendly but also help with
              space-saving, which is one of the major requirements in a country
              like India.
              <br></br>
              <br></br>The groundwater level is depreciating all across the
              globe very fast due to the extensive use of the available
              resources. Hence, having a good and effective rainwater harvesting
              system is a need of the hour. We are a proud contributor to this
              socio-economic cause by helping people utilize natural rainwater.
              Our team has proudly supported more than 150 rainwater harvesting
              projects. We provide our support for the installation, maintenance,
              and management of rainwater harvesting projects. The rainwater
              harvesting solutions that we provide are economical, eco-friendly,
              and environment-friendly and have the advantage over the old
              traditional methods of rainwater harvesting.
            </p>
          </div>
          <div data-aos="zoom-in-up" className="mt-5">
            <Link href={"https://www.inrainconstruction.com"}>
              <Image
                className="w-full"
                src={harvesting7}
                alt="img"
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

export default Service7;
