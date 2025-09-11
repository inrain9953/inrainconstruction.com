import React from "react";
import solution1 from "../../public/solution1.jpg";
import solution2 from "../../public/solution2.jpg";
import solution3 from "../../public/solution3.jpg";
import banner4 from "../../public/banner4.jpg";
import Image from "next/image";

const ICPLSolutions = () => {
  return (
    <>
      <div id="icplSolutions" className="text-center mt-16">
        <h2 className="text-2xl md:text-4xl font-bold">Solutions</h2>
      </div>
      <div data-aos="fade-up" className="md:m-10 m-3">
        <Image
          className="w-full rounded-2xl"
          src={banner4}
          alt="img"
          loading="eager"
          priority={true}
          unoptimized={true}
        />
      </div>
      <div className="m-5 md:grid md:grid-cols-1 ">
        <div
          data-aos="fade-up"
          className="pb-10 md:flex md:justify-center md:items-center md:gap-14"
        >
          <div className="md:w-[30%]">
            <Image
              className="w-full rounded-lg"
              src={solution1}
              alt="img"
              loading="eager"
              priority={true}
              unoptimized={true}
            />
          </div>
          <div className="text-left mt-5 shadow-xl rounded-xl p-5 md:p-10 md:w-[40%] bg-yellow-50">
            <h2 className="text-[25px] md:text-4xl font-bold">
              Reuse of Rain Water
            </h2>
            <hr className="m-2"></hr>
            <p className="text-[17px] text-justify md:text-base">
              Reuse of Rain Water is the key benefactor towards the securing and
              abnormal state usage of Water Resources.<br></br>
              <br></br> We have a solid nearness in Designing, Implementation
              and Management of such activities. Our center organizations are
              upheld up by administrations for Rainwater Harvesting and Ground
              Water Management, broad Research and Development.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="mt-10 pb-10 md:flex md:justify-center md:items-center md:gap-14"
        >
          <div className="text-left mb-5 shadow-xl rounded-xl p-5 md:p-10 md:w-[40%] bg-yellow-50">
            <h2 className="text-[25px] md:text-4xl font-bold">
              Pond Development
            </h2>
            <hr className="m-2"></hr>
            <p className="text-[17px] text-justify md:text-base">
              Water bodies is like life for Indian culture, this is a standout
              among the best revive cum holding structure which required least
              venture and give most noteworthy return. At ICPL we utilize most
              trend setting innovation to protect water assets in their unique
              state. We work past to make the lakes look great.<br></br>
              <br></br> Our work incorporates purifying, creation and the board
              of lakes securely following every single required guideline and
              rules of the government. In order to maintain a standard each
              water body need to undergo certain processes like desalting, water
              augmentation, bio-remediation, decentralization, visual attraction
              and monitoring. We make sure that the entire processes are
              professionally and smoothly managed.
            </p>
          </div>
          <div className="md:w-[30%]">
            <Image
              className="w-full rounded-lg"
              src={solution2}
              alt="img"
              loading="eager"
              priority={true}
              unoptimized={true}
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="mt-10 pb-10 md:flex md:justify-center md:items-center md:gap-14"
        >
          <div className="md:w-[30%]">
            <Image
              className="w-full rounded-lg"
              src={solution3}
              alt="img"
              loading="eager"
              priority={true}
              unoptimized={true}
            />
          </div>
          <div className="text-left mt-5 shadow-xl rounded-xl p-5 md:p-10 md:w-[40%] bg-yellow-50">
            <h2 className="text-[25px] md:text-4xl font-bold">
              Rainwater Harvesting Recharge
            </h2>
            <hr className="m-2"></hr>
            <p className="text-[17px] text-justify md:text-base">
              Rain Water Harvesting Recharge will be water that starts amid
              precipitation occasions in light of the fact that impenetrable
              surfaces (parking areas, streets, structures, compacted soil)
              don’t enable downpour to penetrate into the ground, more spillover
              is created than in the undeveloped condition.<br></br>
              <br></br> Rain Water Harvesting Recharge the board additionally
              adds to network well being and money related hazard the executives
              by decreasing the danger of urban flooding and disintegration.
              InRain Construction Pvt. Ltd. helps you to reduces mains water
              dependence by strong structural design, low maintenance structure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ICPLSolutions;
