import React from "react";
import hero2Img from "../../public/Technology/main2.jpeg";
import Image from "next/image";
import CountUp from "react-countup";
import Link from "next/link";

export const Hero2 = () => {
  return (
    <>
      <div className="mt-10">
        <div
          data-aos="zoom-in-up"
          className="text-center m-3 md:ml-52 md:mr-52"
        >
          <h1 className="text-lg md:text-xl font-semibold shadow-xl rounded-lg bg-sky-500 h-14 align-middle flex justify-center items-center">
            Rainwater Harvesting System in India
          </h1>
          <p className="text-[16px] md:text-[18px] text-justify p-5 text-gray-700 md:pl-28 md:pr-28">
            At{" "}
            <bold className="text-green-600 font-semibold">
              InRain<sup>®</sup>,
            </bold>{" "}
            we are experts in sustainable, eco-friendly rainwater harvesting
            solutions for homes & businesses, designed to preserve water. We are
            engaged in making Rainwater Harvesting (RWH) systems based on modern
            technology. It is indeed entirely different from conventional
            rainwater harvesting systems.{" "}
            <bold className="text-green-600 font-semibold">
              InRain<sup>®</sup>
            </bold>{" "}
            is fully equipped with an in-house making and manufacturing process,
            ensuring its best-in-class quality. We share our contribution to the
            nation by being proud partners of{" "}
            <bold className="font-semibold text-black">
              “The Make in India Movement.”
            </bold>
          </p>
        </div>

        <div data-aos="zoom-in-up" className="md:grid md:grid-cols-3 md:m-12">
          <div className="text-center m-3 mt-7">
            <p className="text-lg md:text-xl font-semibold text-black shadow-xl rounded-lg bg-sky-500 h-14 align-middle flex justify-center items-center">
              Vision
            </p>
            <p className="text-[16px] md:text-[18px] text-justify p-5 text-gray-700">
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

          <div data-aos="fade-up" className="text-center m-3 mt-7">
            <h2 className="text-lg md:text-xl font-semibold text-black shadow-xl rounded-lg bg-sky-500 h-14 align-middle flex justify-center items-center">
              Modular Rainwater Harvesting
            </h2>
            <p className="text-[16px] md:text-[18px] text-justify p-5 text-gray-700">
              <Link
                className="text-green-500 hover:text-sky-500"
                href="https://www.inrainconstruction.com/modular-rainwater-harvesting"
              >
                Modular Rainwater Harvesting
              </Link>{" "}
              is a new technique for Rainwater Harvesting. It is both convenient
              and easy to maintain in comparison to traditional RWH. This New
              Age RWH system is designed with a maintenance-free structure,
              which makes it both cost-effective and eco-friendly.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-5 hero2-background flex flex-col gap-5 justify-center items-center">
        <div data-aos="zoom-in-up" className="m-5">
          <p className="text-xl md:text-white md:text-4xl font-semibold">
            <bold className="text-green-600">
              InRain<sup>®</sup>
            </bold>{" "}
            Rainwater Harvesting System
          </p>
        </div>

        <div
          data-aos="zoom-in-up"
          className="md:flex justify-center items-center gap-24"
        >
          <div className="flex flex-col justify-center items-center mt-7">
            <p className="text-lg md:text-xl font-semibold h-12 md:h-20 bg-green-300 rounded-lg flex justify-center items-center p-5">
              Making The Planet Green
            </p>
            <div className="text-3xl mt-5 font-bold">
              <CountUp
                duration={2}
                end={90}
                enableScrollSpy={true}
                scrollSpyDelay={50}
              />
              <span>%</span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-7">
            <p className="text-lg md:text-xl font-semibold h-12 md:h-20 bg-green-300 rounded-lg flex justify-center items-center p-5">
              Recycling Rainwater
            </p>
            <div className="text-3xl mt-5 font-bold">
              <CountUp
                duration={2}
                end={100}
                enableScrollSpy={true}
                scrollSpyDelay={50}
              />
              <span>%</span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-7">
            <p className="text-lg md:text-xl font-semibold h-12 md:h-20 bg-green-300 rounded-lg flex justify-center items-center p-5">
              Decreases The Demand For Water
            </p>
            <div className="text-3xl mt-5 font-bold">
              <CountUp
                duration={2}
                end={41}
                enableScrollSpy={true}
                scrollSpyDelay={50}
              />
              <span>%</span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-7">
            <p className="text-lg md:text-xl font-semibold h-12 md:h-20 bg-green-300 rounded-lg flex justify-center items-center p-5">
              Reduces Stormwater Flow
            </p>
            <div className="text-3xl mt-5 font-bold">
              <CountUp
                duration={2}
                end={70}
                enableScrollSpy={true}
                scrollSpyDelay={50}
              />
              <span>%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
