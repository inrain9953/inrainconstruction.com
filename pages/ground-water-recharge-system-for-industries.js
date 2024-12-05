import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import service6 from "./../public/service6.jpg";
import harvesting6 from "./../public/services/harvesting6.jpg";
import Image from "next/image";
import Head from "next/head";
import PopUp from "@/components/popup";
import Link from "next/link";

const Service6 = () => {
  const title =
    "Ground Water Recharge System For Industries | InRain™ Construction Pvt. Ltd.";
  const desc =
    "Ground Water recharge system or deep drainage is a hydrologic process where infiltrated water passes through the unsaturated region of groundwater and joins the water table. ";
  const keyword =
    "Groundwater Recharge System for Industries, Industrial Water Conservation, Sustainable Water Management, InRain Construction Pvt. Ltd., Artificial Recharge Methods, Surface Water Recharge, Industrial Water Supply, Groundwater Infiltration, Water Scarcity Solutions, Recharge Pits for Industry, Rainwater Harvesting for Industry, Environmental Impact, Water Bill Reduction";
  const canonical =
    "https://www.inrainconstruction.com/ground-water-recharge-system-for-industries";
  const ogUrl =
    "https://www.inrainconstruction.com/ground-water-recharge-system-for-industries";
  const ogTitle =
    "Ground Water Recharge System For Industries | InRain™ Construction Pvt. Ltd.";
  const ogDescription =
    "Ground Water recharge system or deep drainage is a hydrologic process where infiltrated water passes through the unsaturated region of groundwater and joins the water table.";
  const twittertitle =
    "Ground Water Recharge System For Industries | InRain™ Construction Pvt. Ltd.";
  const twitterdescription =
    "Ground Water recharge system or deep drainage is a hydrologic process where infiltrated water passes through the unsaturated region of groundwater and joins the water table.";

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
            src={service6}
            alt="Ground Water Recharge for Industries"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
          <div className="absolute md:bottom-2 bottom-0 md:left-5 left-2">
            <p className="text-xs md:text-lg text-black">
              <Link href={"/"}>Home</Link> / Ground Water Recharge System For
              Industries
            </p>
          </div>
        </div>

        <div className="m-5 md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div data-aos="zoom-in-up" className="text-left">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Ground Water Recharge System For Industries
            </h1>

            <p className="text-[17px] text-justify md:text-lg mt-3">
              Inrain Construction Pvt. Ltd. is committed to providing
              sustainable water conservation solutions for housing and
              commercial requirements. Industries these days require{" "}
              <Link
                href={"https://www.inrainconstruction.com"}
                className="text-green-600 hover:text-sky-500 font-semibold"
              >
                Groundwater Recharge Systems
              </Link>{" "}
              as there is a huge demand for water supply for industrial use and
              the resources of water are very limited. Having a groundwater
              recharge system in place helps industries to reduce their
              dependency on surface water sources and secure their water
              supplies during periods of drought or water scarcity. <br></br>
              <br></br>
              InRain Construction Pvt. Ltd. a water conservation and water
              management company offer groundwater recharge system for
              industries. Naturally, the groundwater gets recharged when water
              infiltrates through the top surface and reaches the water table.
              An optimized infiltration level is required for natural
              groundwater recharge. The other way is preserving wetlands,
              streams, and lakes is to ensure that they continue to recharge
              groundwater as it can seep through the surface to reach down the
              water table.
              <br></br>
              <br></br>
              Surface Recharge and Artificial Recharge are the other way that
              can help the industry to reduce their water bills by helping them
              to recharge the groundwater. In surface recharge methods the
              rainwater is collected and directed through a recharge pit where
              it can be percolated to the ground. This method is highly
              successful in areas which receive a decent amount of rain in a
              year.
              <br></br>
              <br></br>Artificial Recharge methods for industrial groundwater
              recharge can be used effectively in the areas which have a
              scarcity of surface water. This methodology requires to use of
              artificial structures to infuse water directly into the ground to
              recharge groundwater. With help of artificial wells, water storage
              tanks and water infiltration galleries ground can easily be
              recharged.
              <br></br>
              <br></br>
              Recharging groundwater will not only have a positive impact on the
              environment but also it will help in reducing the water bills of
              the industry. It will significantly reduce their reliance on the
              main supply.
            </p>
          </div>
          <div data-aos="zoom-in-up" className="mt-5">
            <Link href={"https://www.inrainconstruction.com/"}>
              <Image
                className="w-full"
                src={harvesting6}
                alt="InRain Ground Water Recharge System for Industries"
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

export default Service6;
