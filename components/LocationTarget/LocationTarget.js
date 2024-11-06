import React from "react";
import trophy from "../../public/trophyImg.png";
import approved from "../../public/approved.png";
import cerg from "../../public/cer-g.jpg";
import Image from "next/image";
import tech1 from "../../public/Technology/main1.jpg";
import tech2 from "../../public/Technology/main2.jpeg";
import tech3 from "../../public/Technology/main3.jpg";
import tech4 from "../../public/Technology/main4.jpg";
import tech5 from "../../public/Technology/main5.jpg";
import newTech from "../../public/new-technology-based-rainwater.jpg";

const LocationTarget = ({ location }) => {
  return (
    <>
      <div className="m-2 md:flex md:justify-center md:m-10 mt-20">
        <div data-aos="zoom-in-up" className="md:content-center md:p-10">
          <p className="text-center font-semibold text-md text-green-500 md:text-lg">
            InRain<sup>®</sup> Construction Pvt Ltd.
          </p>
          <h1 className="text-center text-2xl font-semibold md:text-4xl">
            Rainwater Harvesting System in {location}
          </h1>
          <hr className="m-2 md:m-5"></hr>
          <p className="m-5 text-md text-justify text-gray-500 drop-shadow-md md:text-xl">
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
            <bold className="text-black font-semibold">
              Modular Rainwater Harvesting System services
            </bold>
            , helping clients efficiently manage water resources while
            supporting environmental conservation.
          </p>
        </div>

        <div
          data-aos="zoom-in-up"
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
          data-aos="zoom-in-up"
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
          data-aos="zoom-in-up"
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
          data-aos="zoom-in-up"
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
        <div data-aos="zoom-in-up" className="md:content-center md:p-10">
          <p className="text-center font-semibold text-md text-green-500 md:text-lg">
            InRain<sup>®</sup> Construction Pvt Ltd.
          </p>
          <h1 className="text-center text-2xl font-semibold md:text-4xl">
            Rooftop Rainwater Harvesting System in {location}
          </h1>
          <hr className="m-2 md:m-5"></hr>
          <p className="m-5 text-md text-justify text-gray-500 drop-shadow-md md:text-xl">
            A{" "}
            <bold className="text-black font-semibold">
              Rooftop Rainwater Harvesting System in {location}
            </bold>{" "}
            intended for filtration, transitory maintenance and ensuing release.
            It is utilized in waste channel application. It is developed
            utilizing our restrictive plastic infusion shaped boards.We provide
            all range of modules as per the requirements.
          </p>
        </div>

        <div
          data-aos="zoom-in-up"
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
    </>
  );
};

export default LocationTarget;
