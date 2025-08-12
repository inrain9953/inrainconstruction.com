import { Footer } from "@/components/Footer/Footer";
import { Hero1 } from "@/components/Hero/Hero1";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import Head from "next/head";
import trophy from "../public/trophyImg.png";
import approved from "../public/approved.png";
import cerg from "../public/cer-g.jpg";
import Image from "next/image";
import tech1 from "../public/Technology/main1.jpg";
import tech2 from "../public/Technology/main2.jpeg";
import tech3 from "../public/Technology/main3.jpg";
import tech4 from "../public/Technology/main4.jpg";
import tech5 from "../public/Technology/main5.jpg";
import newTech from "../public/new-technology-based-rainwater.jpg";
import PopUp from "@/components/popup";
import Link from "next/link";

const GrihaAndCGWB = () => {
  const loc = "Delhi";
  let location = "Delhi";

  const title = `GRIHA & CGWB Approved Rainwater Harvesting System | Rainwater Harvesting System Service Provider in ${loc}`;
  const desc = `Are you finding Rainwater Harvesting System in ${loc}. We have the best quality Rainwater Harvesting System that helps you with harvesting rainwater. Don't we late to Rainwater Harvesting System Service Provider in ${loc} at the best price?`;
  const keyword = `GRIHA & CGWB Approved Rainwater Harvesting System, Rooftop Rainwater Harvesting System in ${loc}, GRIHA & CGWB Approved Modular Rainwater Harvesting System in ${loc}, Rainwater Harvesting Tank in ${loc}, Polymer Type Rainwater Harvesting System in ${loc}, Storm water Management in ${loc}`;
  const canonical =
    "https://www.inrainconstruction.com/griha-and-cgwb-approved-rainwater-harvesting-system";
  const ogUrl =
    "https://www.inrainconstruction.com/griha-and-cgwb-approved-rainwater-harvesting-system";
  const ogTitle = `GRIHA & CGWB Approved Rainwater Harvesting System | Rainwater Harvesting System Service Provider in ${loc}`;
  const ogDescription = `Are you finding Rainwater Harvesting System in ${loc}. We have the best quality Rainwater Harvesting System that helps you with harvesting rainwater. Don't we late to Rainwater Harvesting System Service Provider in ${loc} at the best price?`;
  const twittertitle =
    "Rainwater Harvesting System in India | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Are you searching for a Rainwater harvesting system? InRain Water Harvesting company that provides Rainwater harvesting system based on the technology adopted from Germany. Contact us today for a free consultation.";

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
        <meta name="author" content="InRain® Construction Pvt Ltd"></meta>
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
      <div className="m-2 md:flex md:justify-center md:m-10 mt-20">
        <div data-aos="fade-up" className="md:content-center md:p-10">
          <p className="text-center font-semibold text-md text-green-500 md:text-lg">
            InRain<sup>®</sup> Construction Pvt Ltd.
          </p>
          <h1 className="text-center text-2xl font-semibold md:text-4xl">
            GRIHA & CGWB Approved Rainwater Harvesting System
          </h1>
          <hr className="m-2 md:m-5"></hr>
          <p className="m-5 text-md text-center text-gray-500 drop-shadow-md md:text-xl">
            <bold className="text-green-500 font-semibold">InRain®</bold>{" "}
            Construction Private Limited, is a top provider of{" "}
            <bold className="text-black font-semibold">
              Rainwater Harvesting Systems in {location}
            </bold>
            , offering advanced solutions for water management, with a proven
            track record. We have successfully installed over{" "}
            <bold className="text-black font-semibold">
              1000 Rainwater Harvesting (RWH)
            </bold>{" "}
            systems for prestigious clients including{" "}
            <bold className="text-black font-semibold">
              TATA | Hindustan Unilever | PepsiCo | Larsen & Toubro | CPWD |
              NHAI | Smart Cities | Fujita | Denso | Supreme Court Judges
              Bungalows and many more.
            </bold>{" "}
            Our focus on innovation, quality, and sustainability has established
            us as a trusted industry leader. <br></br>
            <br></br>
            <bold className="text-green-500 font-semibold">InRain®</bold>{" "}
            Construction also provides{" "}
            <Link
              href={"/modular-rainwater-harvesting"}
              className="text-sky-500 hover:text-green-500 font-semibold"
            >
              Modular Rainwater Harvesting System
            </Link>{" "}
            services, helping clients efficiently manage water resources while
            supporting environmental conservation.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="m-2 flex justify-center md:inline"
        >
          <div className="flex items-center justify-center m-2 h-44 w-44 shadow-2xl rounded-lg border-2 border-green-500 text-center md:h-60 md:w-60 md:m-5 md:p-6">
            <div>
              <Image
                alt="img"
                className="w-16 m-auto md:w-24"
                src={approved}
                loading="eager"
                priority={true}
                unoptimized={true}
              />
              <p className="text-xs m-1">ISO 9001 : 2015</p>
              <p className="text-sm font-semibold md:text-lg">
                CERTIFIED COMPANY
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center m-2 h-44 w-44 shadow-2xl rounded-lg border-2 border-green-500 text-center md:h-60 md:w-60 md:m-5 md:p-6">
            <div>
              <Image
                alt="img"
                className="w-16 m-auto md:w-24"
                src={trophy}
                loading="eager"
                priority={true}
                unoptimized={true}
              />
              <p className="text-xs m-1">Solution Provider</p>
              <p className="text-sm font-semibold md:text-lg">
                THE BEST INDUSTRIAL
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="m-2 flex justify-center md:inline"
        >
          <div className="flex justify-center items-center m-2 h-44 w-44 shadow-2xl rounded-lg border-2 border-green-500 text-center md:h-60 md:w-60 md:m-5 md:p-6">
            <div>
              <Image
                alt="img"
                className="w-16 m-auto md:w-24"
                src={cerg}
                loading="eager"
                priority={true}
                unoptimized={true}
              />
              <p className="text-sm m-1 font-semibold md:text-lg">
                INRAIN<sup>®</sup> CONSTRUCTION PVT. LTD.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center m-2 h-44 w-44 shadow-2xl rounded-lg border-2 border-green-500 text-center md:h-60 md:w-60 md:m-5 md:p-6">
            <div>
              <Image
                alt="img"
                className="w-16 m-auto md:w-24"
                src={trophy}
                loading="eager"
                priority={true}
                unoptimized={true}
              />
              <p className="text-xs m-1">ISO 14001 : 2015</p>
              <p className="text-sm font-semibold md:text-lg">
                CERTIFIED COMPANY
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-10 m-5 md:m-10">
        <h3
          data-aos="fade-up"
          className="md:text-4xl font-semibold text-2xl"
        >
          About Our Technology
        </h3>
        <p
          data-aos="fade-up"
          className="text-md mt-7 text-gray-500 md:pl-36 md:pr-36 drop-shadow-md md:text-xl"
        >
          At <bold className="text-green-500 font-semibold">InRain®</bold>, we
          specialize in creating{" "}
          <bold className="text-black font-semibold">
            Rainwater Harvesting (RWH) pits in {location}
          </bold>
          , utilizing advanced technology inspired by German engineering. Unlike
          traditional rainwater harvesting systems, our approach stands out for
          its innovation. With our in-house manufacturing capabilities, we
          ensure top-tier quality in every aspect of our work. We are proud to
          contribute to the nation by being an active partner in the{" "}
          <bold className="text-black font-semibold">"Make in India"</bold>{" "}
          initiative.
        </p>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 m-2"
        >
          <Image
            className=""
            alt="img"
            src={tech1}
            loading="eager"
            priority={true}
            unoptimized={true}
          />
          <Image
            className=""
            alt="img"
            src={tech2}
            loading="eager"
            priority={true}
            unoptimized={true}
          />
        </div>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-3 m-2"
        >
          <Image
            className=""
            alt="img"
            src={tech3}
            loading="eager"
            priority={true}
            unoptimized={true}
          />
          <Image
            className=""
            alt="img"
            src={tech4}
            loading="eager"
            priority={true}
            unoptimized={true}
          />
          <Image
            className=""
            alt="img"
            src={tech5}
            loading="eager"
            priority={true}
            unoptimized={true}
          />
        </div>
      </div>

      <div className="m-2 md:flex md:justify-center md:m-10 mt-20">
        <div data-aos="fade-up" className="md:content-center md:p-10">
          <p className="text-center font-semibold text-md text-green-500 md:text-lg">
            InRain<sup>®</sup> Construction Pvt Ltd.
          </p>
          <h1 className="text-center text-2xl font-semibold md:text-4xl">
            Rooftop Rainwater Harvesting System in {location}
          </h1>
          <hr className="m-2 md:m-5"></hr>
          <p className="m-5 text-md text-center text-gray-500 drop-shadow-md md:text-xl">
            A{" "}
            <Link
              href={"/roof-top-rainwater-harvesting-system-RRWHS-InRain"}
              className="text-sky-500 hover:text-green-500 font-semibold"
            >
              Rooftop Rainwater Harvesting System
            </Link>{" "}
            in {location} intended for filtration, transitory maintenance and
            ensuing release. It is utilized in waste channel application. It is
            developed utilizing our restrictive plastic infusion shaped
            boards.We provide all range of modules as per the requirements.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="m-10 md:w-full flex justify-center items-center md:inline"
        >
          <Image
            className="w-full shadow-xl"
            alt="img"
            src={newTech}
            loading="eager"
            priority={true}
            unoptimized={true}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GrihaAndCGWB;
