import React from "react";
import hero3Img from "../../public/product/product3.png";
import Image from "next/image";

export const Hero3 = () => {
  return (
    <>
      <div
        data-aos="zoom-in-up"
        className="mt-10 md:flex justify-center items-center md:ml-14 md:mr-14"
      >
        <div className="text-left m-5  md:pl-14">
          <h3 className="text-2xl font-semibold">
            Rainwater Harvesting Filtration System
          </h3>
          <hr className="m-2"></hr>
          <p className="text-[17px] md:text-[18px] text-justify text-gray-700">
            A module permeation storm water tank intended for filtration,
            transitory maintenance, and ensuing release. It is utilized in waste
            channel applications. It is developed utilizing our restrictive
            plastic infusion-shaped boards. We offer a complete range of module
            options tailored to meet your specific requirements.
          </p>
        </div>
        <div className="md:pr-14">
          <Image
            className="w-full"
            src={hero3Img}
            alt="img"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
        </div>
      </div>

      <div
        data-aos="zoom-in-up"
        className="text-left mt-10 m-5 md:ml-10 md:mr-10 md:p-10"
      >
        <h4 className="text-2xl font-semibold">
          Water Conservation & Management
        </h4>
        <hr className="m-2"></hr>
        <p className="text-[17px] md:text-[18px] text-gray-700">
          At{" "}
          <bold className="text-green-600 font-semibold">
            InRain<sup>®</sup>
          </bold>{" "}
          Construction Pvt. Ltd., we firmly believe in the popular quote
        </p>

        <h5 className="text-xl font-semibold mt-5">
          “Water is life, and conservation is the future.”
        </h5>
        <p className="text-[17px] md:text-[18px] text-justify text-gray-700 mt-2">
          70% of our earth is water. However, the potable water, which is
          required for every human needs, is very little. Growing
          urbanization and global development have also led to a sharp decline
          in groundwater. Climate change with global warming is not making
          things easier for humans. Water conservation and management techniques
          are vital for sustainable development. It helps in managing the
          increasing demand for water with growing industrialization and an
          increasing population.
        </p>
        <br></br>
        <p className="text-[17px] md:text-[18px] text-justify text-gray-700">
          At{" "}
          <bold className="text-green-600 font-semibold">
            InRain<sup>®</sup>
          </bold>
          , we provide water conservation & management techniques leveraging
          modern technology. Conservation methods and solutions offered by
          InRain are not only environment friendly but economical as well.
        </p>
        <br></br>

        <p className="text-[17px] md:text-[18px] text-justify text-gray-700">
          <bold className="font-semibold text-black">
            The Technology We Offer:
          </bold>{" "}
          We are using advanced modular technology for Rainwater Harvesting
          Solutions. This advanced technology helps us to reduce costs and
          improves the longevity of the rainwater harvesting system. It helps in
          overcoming the major challenge of space-saving, which is a prime
          concern in urban planning and development.
        </p>
        <br></br>

        <p className="text-[17px] md:text-[18px] text-justify text-gray-700">
          <bold className="font-semibold text-black">
            The Quality We Offer:
          </bold>{" "}
          We provide high-quality products as our products go through a
          rigorous quality check. Our in-house manufacturing ensures the
          quality of products, and we consistently deliver excellence.
        </p>
        <br></br>

        <p className="text-[17px] md:text-[18px] text-justify text-gray-700">
          We firmly believes that the future of urban planning and development
          is through the practice of water conservation and management. We are
          fortunate to be blessed with the ability to contribute to saving the
          environment, while we help others to incorporate water conservation
          methods and practices into life.{" "}
        </p>
        <br></br>

        <p className="text-[17px] md:text-[18px] text-justify text-gray-700">
          At{" "}
          <bold className="text-green-600 font-semibold">
            InRain<sup>®</sup>
          </bold>
          , we help organizations, housing societies and individuals to
          integrate water conservation and management into their development
          plans. We aim to provide sustainability in water conservation
          practices.
        </p>
      </div>
    </>
  );
};
