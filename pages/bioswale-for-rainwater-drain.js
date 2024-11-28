import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import service10 from "./../public/service10.jpg";
import harvesting10 from "./../public/harvesting11.jpg";
import Image from "next/image";
import Head from "next/head";
import PopUp from "@/components/popup";
import Link from "next/link";

const Service10 = () => {
  const title = "Bioswale for Rainwater Drain | InRain® Construction Pvt. Ltd.";
  const desc =
    "Bioswales work on the same principle as rain gardens. Unlike rain gardens, which are depressions, bioswales are channels, planted with the same hardy, water-tolerant species as that for rain gardens. ";
  const canonical =
    "https://www.inrainconstruction.com/bioswale-for-rainwater-drain";
  const ogUrl =
    "https://www.inrainconstruction.com/bioswale-for-rainwater-drain";
  const keyword =
    "Bioswale Rainwater Drain, Stormwater Management, Rainwater Harvesting Solutions, Water Conservation Techniques, Groundwater Recharge, Erosion Control Methods, Sustainable Water Management, Urban Green Infrastructure, Bioswale Installation Services, Inrain Construction Pvt. Ltd";
  const ogTitle =
    "Bioswale for Rainwater Drain | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Bioswales work on the same principle as rain gardens. Unlike rain gardens, which are depressions, bioswales are channels, planted with the same hardy, water-tolerant species as that for rain gardens.";
  const twittertitle =
    "Bioswale for Rainwater Drain | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Bioswales work on the same principle as rain gardens. Unlike rain gardens, which are depressions, bioswales are channels, planted with the same hardy, water-tolerant species as that for rain gardens.";

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
            src={service10}
            alt="Bioswale for Rainwater Drain"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
          <div className="absolute md:bottom-2 bottom-0 md:left-5 left-2">
            <p className="text-xs md:text-lg text-black">
              <Link href={"/"}>Home</Link> / Bioswale for Rainwater Drain
            </p>
          </div>
        </div>

        <div className="m-5 md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div data-aos="zoom-in-up" className="text-left">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Bioswale for Rainwater Drain
            </h1>

            <p className="text-[17px] text-justify md:text-lg mt-3">
              Inrain Construction Pvt. Ltd is leading a socio-economic cause by
              helping people effectively utilize rainwater. We offer various
              solutions for rainwater conservation and management. Rainwater
              harvesting is a need of the modern-day world and it needs to be
              practised to save our fast-declining natural ground resources.
              Bioswale is one of the popular methods in water conservation and
              management. After rain stormwater runoff if not managed carefully,
              can do some serious damage, can damage public property & private
              property, can cause erosion, pollute lake water, and creates water
              logging that can lead to an infestation that can spread diseases.{" "}
              <br></br>
              <br></br>
              At Inrain Construction Pvt. Ltd. we help in creating bioswale for
              rainwater drain. Bioswale is an excellent solution for{" "}
              <Link
                href={
                  "https://www.inrainconstruction.com/storm-water-recharge-and-management"
                }
                className="text-green-600 hover:text-sky-500 font-semibold"
              >
                managing stormwater runoff.
              </Link>{" "}
              Since it uses green plants for filtration and management of water
              conservation through a channel, bioswale looks very pleasing to
              the eyes. The stormwater runoff gets conveyed through a slopped
              channel helping in removing pollutants in the water. Plants and
              species used in bioswale depend on the climate and the size of the
              place.
              <br></br>
              <br></br>
              Bioswale is an excellent solution for new-age residential
              societies and industries. Not only it helps in managing the excess
              water flow after the rain but also helps in recharging groundwater
              and with improved greenery at the location. These are designed in
              such a way that helps in reducing the stormwater runoff of
              velocity which not only helps in cleaning the water before
              infiltration but also helps in avoiding soil erosion.
              <br></br>
              <br></br>Bioswales can easily be installed in modern
              infrastructure, some of the popular areas where bioswales are used
              are parking lots, near the sidewalks, kids' parks, streets and
              green open areas. Bioswale installation requires soil testing as
              it has to meet the required infiltration rate before it can be
              installed. Inrain Construction Pvt. Ltd. with its advanced
              technology and the professional team helps in providing an
              end-to-end solution from consultation, and{" "}
              <Link
                href={
                  "https://www.inrainconstruction.com/rainwater-harvesting-installation-company"
                }
                className="text-green-600 hover:text-sky-500 font-semibold"
              >
                installation to maintenance.
              </Link>
            </p>
          </div>
          <div data-aos="zoom-in-up" className="mt-5">
            <Link href={"https://www.inrainconstruction.com/"}>
              <Image
                className="w-full"
                src={harvesting10}
                alt="Bioswale"
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

export default Service10;
