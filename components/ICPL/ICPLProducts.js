import React from "react";
import motor from "../../public/product/motor.jpg";
import honeycomb from "../../public/product/product1.jpeg";
import filter from "../../public/product/product3.png";
import blackSheet from "../../public/product/black-sheet.png";
import whiteSheet from "../../public/product/white-sheet.png";
import service4 from "../../public/service4.jpg";
import Image from "next/image";

const ICPLProducts = () => {
  return (
    <>
      <div className="text-center mt-20">
        <h2 className="md:text-4xl text-2xl font-bold">Our Products</h2>
      </div>
      <div data-aos="zoom-in-up" className="md:m-10 m-3">
        <Image
          className="w-full rounded-xl"
          src={service4}
          alt="img"
          loading="eager"
          priority={true}
          unoptimized={true}
        />
      </div>
      <div className="m-5 md:grid md:grid-cols-1">
        <div
          data-aos="zoom-in-up"
          className="mt-5 pb-10 md:flex md:justify-center md:items-center md:gap-14"
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
          <div className="text-left mt-5 shadow-xl rounded-xl p-5 md:p-10 md:w-[40%] bg-yellow-50">
            <h2 className="text-[25px] md:text-4xl font-bold">
              Self Cleaning Mesh Filter System
            </h2>
            <hr className="m-2"></hr>
            <p className="text-[17px] md:text-lg">
              Time saving - The filtration process is not interrupted during the
              cleaning cycle, eliminating the need to shut down the irrigation
              system; Low water and energy consumption; Sturdy and durable; Easy
              installation and low maintenance; Compact design and small
              footprint.
            </p>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          className="mt-10 pb-10 md:flex md:justify-center md:items-center md:gap-14"
        >
          <div className="text-left mb-5 shadow-xl rounded-xl p-5 md:p-10 md:w-[40%] bg-yellow-50">
            <h2 className="text-[25px] md:text-4xl font-bold">
              InRain<sup>®</sup> Rainwater Harvesting Modules 50 Ton
            </h2>
            <hr className="m-2"></hr>
            <p className="text-[17px] md:text-lg">
              A module permeation storm water tank intended for filtration,
              transitory maintenance and ensuing release. It is utilized in
              waste channel application. It is developed utilizing our
              restrictive plastic infusion shaped boards.We provide all range of
              modules as per the requirements.
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
          <div className="text-left mt-5 shadow-xl rounded-xl p-5 md:p-10 md:w-[40%] bg-yellow-50">
            <h2 className="text-[25px] md:text-4xl font-bold">
              InRain<sup>®</sup> Rainwater Harvesting Filtration System
            </h2>
            <hr className="m-2"></hr>
            <p className="text-[17px] md:text-lg">
              The channel is utilized to expel suspended contamination from
              water gathered over rooftop. A channel unit is a chamber loaded up
              with sifting media to expel garbage and soil from water. InRain
              Constructions provide wide range of filtration units required for
              domestic water harvesting.
            </p>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          className="mt-10 pb-10 md:flex md:justify-center md:items-center md:gap-14"
        >
          <div className="text-left mb-5 shadow-xl rounded-xl p-5 md:p-10 md:w-[40%] bg-yellow-50">
            <h2 className="text-[25px] md:text-4xl font-bold">EPDM Liner</h2>
            <hr className="m-2"></hr>
            <p className="text-[17px] md:text-lg">
              InRain Constructions Ethylene Propylene Diene Monomer (EPDM) Liner
              has been figured to be perfect with amphibian life. It is
              suggested that clients test EPDM Liner before use to guarantee it
              is good with the particular oceanic species for the proposed
              application
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
          <div className="text-left mt-5 shadow-xl rounded-xl p-5 md:p-10 md:w-[40%] bg-yellow-50">
            <h2 className="text-[25px] md:text-4xl font-bold">Geo Textile</h2>
            <hr className="m-2"></hr>
            <p className="text-[17px] md:text-lg">
              Geotextile is essentially a porous texture which, when utilized in
              relationship with soil, can isolate, channel, strengthen,
              secure,or channel. Ordinarily produced using polypropylene or
              polyester, geotextile textures come in three fundamental
              structures: woven, needle punched or heat reinforced.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ICPLProducts;
