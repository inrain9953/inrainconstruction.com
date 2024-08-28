import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import banner from "./../public/banner4.jpg";
import motor from "./../public/product/motor.jpg";
import honeycomb from "./../public/product/product1.jpeg";
import filter from "./../public/product/product3.png";
import blackSheet from "./../public/product/black-sheet.png";
import whiteSheet from "./../public/product/white-sheet.png";
import Image from "next/image";
import Head from "next/head";

const Products = () => {
  const title =
    "InRain® Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const desc =
    "InRain® Rainwater Harvesting provides Pressure Regulator Valve (PRV), Self Cleaning Mesh Filter System, Rainwater Harvesting Modules, Rainwater Harvesting Filtration System, EPDM Liner, Geo Textile.";
  const keyword =
    "Pressure Regulator Valve, Self Cleaning Mesh Filter System, Rainwater Harvesting Filtration System, Rainwater Harvesting Filter, rainwater harvesting filter, modular rainwater harvesting system, rainwater harvesting technology";
  const canonical = "https://www.inrainconstruction.com/products";
  const ogUrl = "https://www.inrainconstruction.com/products";
  const ogTitle = "InRain® Rainwater Harvesting System | InRain® Construction";
  const ogDescription =
    "InRain Rainwater Harvesting provides Pressure Regulator Valve (PRV), Self Cleaning Mesh Filter System, Rainwater Harvesting Modules, Rainwater Harvesting Filtration System, EPDM Liner, Geo Textile.";
  const twittertitle =
    "InRain® Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "InRain® Rainwater Harvesting provides Pressure Regulator Valve (PRV), Self Cleaning Mesh Filter System, Rainwater Harvesting Modules, Rainwater Harvesting Filtration System, EPDM Liner, Geo Textile.";

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
      <div>
        <div data-aos="zoom-in-up" className="pt-5 pb-5 md:pt-0">
          <Image
            className="w-full"
            src={banner}
            alt="img"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
        </div>

        <div className="m-5 md:grid md:grid-cols-1">
          <div
            data-aos="zoom-in-up"
            className="mt-10 pb-10 md:flex md:justify-center md:items-center md:gap-14"
          >
            <div className="md:w-[30%]">
              <Image
                className="m-auto md:h-64 w-52 h-56"
                src={motor}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <div className="text-left mt-5 shadow-xl rounded-xl p-5 md:p-10 md:w-[40%]">
              <h2 className="text-[25px] md:text-4xl font-bold">
                Self Cleaning Mesh Filter System
              </h2>
              <hr className="m-2"></hr>
              <p className="text-[17px] md:text-lg">
                1. Time saving - The filtration process is not interrupted
                during the cleaning cycle, eliminating the need to shut down the
                irrigation system.<br></br>2. Low water and energy consumption.
                <br></br>3. Sturdy and durable.<br></br>4. Easy installation and
                low maintenance.<br></br>5. Compact design and small footprint.
              </p>
            </div>
          </div>

          <div
            data-aos="zoom-in-up"
            className="mt-10 pb-10 md:flex md:justify-center md:items-center md:gap-14"
          >
            <div className="text-left mb-5 shadow-xl rounded-xl p-5 md:p-10 md:w-[40%]">
              <h2 className="text-[25px] md:text-4xl font-bold">
                InRain<sup>®</sup> Rainwater Harvesting Modules 50 Ton
              </h2>
              <hr className="m-2"></hr>
              <p className="text-[17px] md:text-lg">
                A module permeation storm water tank intended for filtration,
                transitory maintenance and ensuing release. It is utilized in
                waste channel applications. It is developed utilizing our
                restrictive plastic infusion shaped boards. We provide a range
                of modules as per the requirements.
              </p>
            </div>
            <div className="md:w-[30%]">
              <Image
                className="w-full"
                src={honeycomb}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
          </div>

          <div
            data-aos="zoom-in-up"
            className="mt-10 pb-10 md:flex md:justify-center md:items-center md:gap-14"
          >
            <div className="md:w-[30%]">
              <Image
                className="w-full"
                src={filter}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <div className="text-left mt-5 shadow-xl rounded-xl p-5 md:p-10 md:w-[40%]">
              <h2 className="text-[25px] md:text-4xl font-bold">
                InRain<sup>®</sup> Rainwater Harvesting Filtration System
              </h2>
              <hr className="m-2"></hr>
              <p className="text-[17px] md:text-lg">
                The channel is utilized to expel suspended contamination from
                water gathered over rooftop. A channel unit is a chamber loaded
                up with sifting media to expel garbage and soil from water.{" "}
                <bold className="text-green-700 font-semibold">
                  InRain<sup>®</sup>
                </bold>{" "}
                Construction provide wide a range of filtration units required
                for domestic water harvesting.
              </p>
            </div>
          </div>

          <div
            data-aos="zoom-in-up"
            className="mt-10 pb-10 md:flex md:justify-center md:items-center md:gap-14"
          >
            <div className="text-left mb-5 shadow-xl rounded-xl p-5 md:p-10 md:w-[40%]">
              <h2 className="text-[25px] md:text-4xl font-bold">EPDM Liner</h2>
              <hr className="m-2"></hr>
              <p className="text-[17px] md:text-lg">
                <bold className="text-green-700 font-semibold">
                  InRain<sup>®</sup>
                </bold>{" "}
                Construction's Ethylene Propylene Diene Monomer (EPDM) Liner has
                been figured to be perfect for amphibian life. It is suggested
                that clients test EPDM Liner before using it to guarantee it is
                good for the particular oceanic species for the proposed
                application.
              </p>
            </div>
            <div className="md:w-[30%]">
              <Image
                className="w-full"
                src={blackSheet}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
          </div>

          <div
            data-aos="zoom-in-up"
            className="mt-10 pb-10 md:flex md:justify-center md:items-center md:gap-14"
          >
            <div className="md:w-[30%]">
              <Image
                className="w-full"
                src={whiteSheet}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <div className="text-left mt-5 shadow-xl rounded-xl p-5 md:p-10 md:w-[40%]">
              <h2 className="text-[25px] md:text-4xl font-bold">Geo Textile</h2>
              <hr className="m-2"></hr>
              <p className="text-[17px] md:text-lg">
                Geotextile is essentially a porous texture which, when utilized
                in relationship with soil, can isolate, channel, strengthen,
                secure, or channel. Ordinarily produced using polypropylene or
                polyester, geotextile textures come in three fundamental
                structures: woven, needle punched or heat reinforced.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
