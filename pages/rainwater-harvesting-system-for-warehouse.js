import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import warehouse from "./../public/warehouse.jpg";
import blog3 from "./../public/blog3.jpg";
import Head from "next/head";
import Image from "next/image";
import PopUp from "@/components/popup";

const Service1 = () => {
  const title =
    "Rainwater Harvesting System for Warehouse | InRain® Construction Pvt. Ltd.";
  const desc =
    "InRain® Construction Pvt. Ltd. is the India leading manufacturing company of rainwater harvesting systems for warehouse. Contact us today.";
  const keyword =
    "Rainwater Harvesting System for Warehouse, Rainwater Harvesting System in delhi, modular rainwater harvesting system, water conservation and management";
  const canonical =
    "https://www.inrainconstruction.com/rainwater-harvesting-system-for-warehouse";
  const ogUrl =
    "https://www.inrainconstruction.com/rainwater-harvesting-system-for-warehouse";
  const ogTitle =
    "Rainwater Harvesting System for Warehouse | InRain™ Construction";
  const ogDescription =
    "InRain® Construction Pvt. Ltd. is the India leading manufacturing company of rainwater harvesting systems for warehouse. Contact us today.";
  const twittertitle =
    "Rainwater Harvesting System for Warehouse | InRain™ Construction";
  const twitterdescription =
    "InRain® Construction Pvt. Ltd. is the India leading manufacturing company of rainwater harvesting systems for warehouse. Contact us today.";

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
            src={warehouse}
            alt="img"
          />
        </div>

        <div className="m-5 md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div data-aos="zoom-in-up" className="text-left">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Rainwater Harvesting System for Warehouses
            </h1>
            <p className="text-[17px] md:text-lg mt-3">
              At{" "}
              <bold className="text-green-700 font-semibold">
                InRain<sup>®</sup>
              </bold>{" "}
              Construction, Our endeavor is to provide comprehensive water
              conservation and management solutions as per the client's
              requirements. The use of potable water has increased over the
              years and the source of water is very limited. There is a growing
              need to save continuously declining water levels because of the
              extensive use of water in various daily activities. Rainwater
              harvesting is one of the best solutions for water conservation and
              management. It works for both residential and commercial spaces.{" "}
              <br></br>
              <br></br>
              Commercial places like warehouses have a huge water consumption on
              a daily basis, so depending on the mains supply or groundwater is
              not feasible. Not only will it exhaust natural resources faster,
              but it will also be very expensive in the pocket and both these
              concerns can be easily addressed by installing a rainwater
              harvesting system for the warehouse. Commercial warehouses have to
              overcome the challenges of saving cost and space at the same time.
              This is where our expertise lies; our experts spend time
              understanding the client's requirements and providing them with
              the most suitable option.
              <br></br>
              <br></br>
              Our modular rainwater harvesting systems are perfectly suitable
              for water conservation and management in commercial places like
              warehouses. In this rainwater harvesting system, recycled
              co-polymer-based modules are used. These stackable modules are
              easy to install and help in building the rainwater harvesting
              structure in a very short amount of time. These modules are made
              of recycled material. Hence, they are not only economical but also
              eco-friendly. Thus helping in providing sustainable water
              conservation that suits the environment. For commercial space, one
              would like to have a rainwater harvesting system that will occupy
              very little space. The good thing about this modular rainwater
              harvesting system is that it has a tremendous load-bearing
              capacity, which means the top surface of the{" "}
              <bold className="text-green-700 font-semibold">
                InRain<sup>®</sup>
              </bold>{" "}
              modular harvesting system can be utilized for various other
              purposes. It is big on space-saving and low on maintenance.
            </p>
          </div>
          <div data-aos="zoom-in-up" className="mt-5">
            <Image className="w-full" src={blog3} alt="img" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service1;
