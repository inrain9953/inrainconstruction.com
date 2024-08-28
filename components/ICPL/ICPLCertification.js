import React from "react";
import iso1 from "../../public/iso1.jpg";
import iso2 from "../../public/iso2.jpg";
import griha from "../../public/griha.jpg";
import Image from "next/image";

const ICPLCertification = () => {
  return (
    <>
      <div>
        <div data-aos="zoom-in-up" className="text-center mt-16">
          <h2 className="md:text-4xl text-2xl font-bold">
            Explore Our Certificate
          </h2>
        </div>

        <div
          data-aos="zoom-in-up"
          className="grid grid-cols-1 md:grid-cols-3 gap-10 "
        >
          <Image
            className="md:p-10 p-5"
            src={iso1}
            alt="img"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
          <Image
            className="md:p-10 p-5"
            src={iso2}
            alt="img"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
          <Image
            className="md:p-10 p-5"
            src={griha}
            alt="img"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
        </div>
      </div>
    </>
  );
};

export default ICPLCertification;
