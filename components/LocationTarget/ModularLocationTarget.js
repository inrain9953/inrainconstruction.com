import React from "react";
import logo from "../../public/logo.png";
import TextTransition, { presets } from "react-text-transition";
import Image from "next/image";
import trophy from "../../public/trophyImg.png";
import approved from "../../public/approved.png";
import cerg from "../../public/cer-g.jpg";
import tech1 from "../../public/Technology/main1.jpg";
import tech2 from "../../public/Technology/main2.jpeg";
import tech3 from "../../public/Technology/main3.jpg";
import tech4 from "../../public/Technology/main4.jpg";
import tech5 from "../../public/Technology/main5.jpg";
import newTech from "../../public/new-technology-based-rainwater.jpg";
import Link from "next/link";
import ICPLCertification from "../ICPL/ICPLCertification";
import ICPLProducts from "../ICPL/ICPLProducts";

const TEXTS = [
  "Modular Rainwater Harvesting",
  "Modular Rainwater Harvesting System For Warehouse",
  "Modular Rainwater Harvesting System",
  "Roof Top Rainwater Harvesting",
  "Polymer based Rainwater Harvesting System",
];

const ModularLocationTarget = ({ location }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
      <div data-aos="zoom-in-up" className="">
        <div className="relative hero1-background">
          <div className="absolute md:top-24 top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <TextTransition
              className="md:text-xl text-center text-base text-white"
              springConfig={presets.gentle}
            >
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </div>

          <div className="text-center">
            <div className="relative top-56 md:top-40">
              <Image
                className="w-28 pt-48 md:pt-32 m-auto"
                src={logo}
                alt="InRain Logo"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
              <h2 className="text-green-700 text-xl font-semibold drop-shadow-xl md:text-2xl">
                Modular Rainwater Harvesting System Service Provider in{" "}
                {location}
              </h2>
              <p className="text-base text-sky-500 font-semibold">
                InRain<sup>®</sup> Construction Pvt. Ltd.(ICPL)
              </p>
              <p className="text-base font-semibold align-middle md:text-xl md:m-2">
                "A Water Conservation & Management Company"
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="m-5 md:flex md:justify-center md:gap-2 md:items-center md:m-10 mt-20">
        <div data-aos="zoom-in-up" className="md:content-center">
          <p className="text-center font-semibold text-xs text-green-500">
            InRain® Construction Pvt Ltd.
          </p>
          <h1 className="text-center text-2xl font-semibold md:text-4xl">
            Modular Rainwater Harvesting System in {location}
          </h1>
          <hr className="m-2 md:m-5"></hr>
          <p className="text-md text-justify text-gray-500 drop-shadow-md md:text-xl">
            <bold className="text-green-500 font-semibold">InRain®</bold>{" "}
            Construction Private Limited is proud to be one of the leading
            providers of{" "}
            <bold className="text-black font-semibold">
              <Link
                href="https://www.inrainconstruction.com/modular-rainwater-harvesting"
                target="_blank"
                className="text-green-500 hover:text-sky-500"
              >
                Modular Rainwater Harvesting Systems
              </Link>{" "}
              in {location},
            </bold>{" "}
            delivering smart, efficient, and sustainable water management
            solutions. With a strong track record and deep industry expertise,
            we’ve successfully installed over{" "}
            <bold className="text-black font-semibold">
              4000+ Rainwater Harvesting Systems
            </bold>{" "}
            across India. <br></br>
            <br></br>
            Some of our prestigious clients include{" "}
            <bold className="text-black font-semibold">
              TATA | Hindustan Unilever | PepsiCo | Larsen & Toubro | CPWD |
              NHAI | Smart Cities | Fujita | Denso and even Supreme Court
              Judges’ Bungalows,
            </bold>{" "}
            a testament to the quality and trust we bring to every project.
            <br></br>
            <br></br>
            At InRain®, innovation, reliability, and sustainability are at the
            heart of everything we do. In addition to modular systems, we also
            offer{" "}
            <bold className="text-green-500 hover:text-sky-500 font-semibold">
              <Link
                href={
                  "https://www.inrainconstruction.com/co-polymer-based-rainwater-harvesting-system"
                }
                target="_blank"
              >
                Polymer-based Rainwater Harvesting Solutions,
              </Link>
            </bold>{" "}
            helping our clients manage their water resources more efficiently
            while supporting long-term environmental conservation.
          </p>
        </div>

        <div
          data-aos="zoom-in-up"
          className="m-2 flex justify-center md:inline"
        >
          <div className="flex items-center justify-center m-2 h-44 w-44 shadow-2xl rounded-lg border-2 border-green-500 text-center">
            <div>
              <Image
                alt="Certified Company"
                className="w-16 m-auto"
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
          <div className="flex justify-center items-center m-2 h-44 w-44 shadow-2xl rounded-lg border-2 border-green-500 text-center">
            <div>
              <Image
                alt="Solution Provider"
                className="w-16 m-auto"
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
          data-aos="zoom-in-up"
          className="m-2 flex justify-center md:inline"
        >
          <div className="flex justify-center items-center m-2 h-44 w-44 shadow-2xl rounded-lg border-2 border-green-500 text-center">
            <div>
              <Image
                alt="Griha Approved Company"
                className="w-16 m-auto"
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
          <div className="flex justify-center items-center m-2 h-44 w-44 shadow-2xl rounded-lg border-2 border-green-500 text-center">
            <div>
              <Image
                alt="ISO 14001 : 2015 Certified Company"
                className="w-16 m-auto"
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
          data-aos="zoom-in-up"
          className="md:text-4xl font-semibold text-2xl"
        >
          About Our Technology
        </h3>
        <p
          data-aos="zoom-in-up"
          className="text-md mt-7 text-justify text-gray-500 md:pl-36 md:pr-36 drop-shadow-md md:text-xl"
        >
          At <bold className="text-green-500 font-semibold">InRain®</bold>, we
          specialize in creating{" "}
          <bold className="text-black font-semibold">
            Modular Rainwater Harvesting (RWH) pits in {location}
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
          data-aos="zoom-in-up"
          className="grid grid-cols-1 md:grid-cols-2 m-2"
        >
          <Image
            className=""
            alt="Modular Rainwater Harvesting by InRain®"
            src={tech1}
            loading="eager"
            priority={true}
            unoptimized={true}
          />
          <Image
            className=""
            alt="Modular Rainwater Harvesting by InRain®"
            src={tech2}
            loading="eager"
            priority={true}
            unoptimized={true}
          />
        </div>
        <div
          data-aos="zoom-in-up"
          className="grid grid-cols-1 md:grid-cols-3 m-2"
        >
          <Image
            className=""
            alt="Modular Rainwater Harvesting by InRain®"
            src={tech3}
            loading="eager"
            priority={true}
            unoptimized={true}
          />
          <Image
            className=""
            alt="Modular Rainwater Harvesting by InRain®"
            src={tech4}
            loading="eager"
            priority={true}
            unoptimized={true}
          />
          <Image
            className=""
            alt="Modular Rainwater Harvesting by InRain®"
            src={tech5}
            loading="eager"
            priority={true}
            unoptimized={true}
          />
        </div>
      </div>

      <div className="m-5 md:flex md:justify-center md:items-center md:m-10 mt-20">
        <div data-aos="zoom-in-up" className="md:content-center">
          <p className="text-center font-semibold text-md text-green-500 md:text-lg">
            InRain<sup>®</sup> Construction Pvt Ltd.
          </p>
          <h3 className="text-center text-2xl font-semibold md:text-4xl">
            Rooftop Rainwater Harvesting System in {location}
          </h3>
          <hr className="m-2 md:m-5"></hr>
          <p className="text-md text-justify text-gray-500 drop-shadow-md md:text-xl">
            A{" "}
            <bold className="text-black font-semibold">
              <Link
                className="text-green-500 hover:text-sky-500"
                href={
                  "https://www.inrainconstruction.com/roof-top-rainwater-harvesting-system-RRWHS-InRain"
                }
                target="_blank"
              >
                Rooftop Rainwater Harvesting System
              </Link>{" "}
              in {location}
            </bold>{" "}
            intended for filtration, transitory maintenance, and ensuing
            release. It is utilized in waste channel applications. It is
            developed utilizing our restrictive plastic infusion-shaped boards.
            We provide a full range of modules as per the requirements.
            <br />
            The utilization of the Rainwater Harvesting System in {location} is
            a sustainable and renewable energy source, which is also known as
            green energy. It is a natural source of water which is clean and
            pure. We need to save water for future use. We provide the best
            quality products at a reasonable price for{" "}
            <bold className="text-black font-semibold">
              Rooftop Rainwater Harvesting Systems in {location}.
            </bold>
          </p>
        </div>

        <div
          data-aos="zoom-in-up"
          className="m-5 md:w-full flex justify-center items-center md:inline"
        >
          <Image
            className="w-full rounded-xl shadow-xl"
            alt="Modular Rainwater Harvesting Filter by InRain®"
            src={newTech}
            loading="eager"
            priority={true}
            unoptimized={true}
          />
        </div>
      </div>

      <ICPLProducts />
      <ICPLCertification />
    </>
  );
};

export default ModularLocationTarget;
