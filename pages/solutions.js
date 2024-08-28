import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import solutionImg from "./../public/solution_water.jpg";
import solution1 from "./../public/solution1.jpg";
import solution2 from "./../public/solution2.jpg";
import solution3 from "./../public/solution3.jpg";

const Solutions = () => {
  const title =
    "Rain Water Reuse | Expertise in Harvesting, Pond Development, and Ground Water Management";
  const desc =
    "Explore the potential of rainwater reuse. From innovative pond development to sustainable rainwater harvesting, we specialize in the design, implementation, and management of water conservation projects.";
  const keyword =
    "ICPL, Rain Water harvesting solution, Rainwater Harvesting, Ground Water Management, Pond Development, Rain Water Harvesting Recharge, Rainwater solution";
  const canonical = "https://www.inrainconstruction.com/solutions";
  const ogUrl = "https://www.inrainconstruction.com/solutions";
  const ogTitle =
    "Rain Water Reuse | Expertise in Harvesting, Pond Development, and Ground Water Management";
  const ogDescription =
    "Explore the potential of rainwater reuse. From innovative pond development to sustainable rainwater harvesting, we specialize in the design, implementation, and management of water conservation projects.";
  const twittertitle =
    "Rain Water Reuse | Expertise in Harvesting, Pond Development, and Ground Water Management";
  const twitterdescription =
    "Explore the potential of rainwater reuse. From innovative pond development to sustainable rainwater harvesting, we specialize in the design, implementation, and management of water conservation projects.";

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
        <div data-aos="zoom-in-up">
          <Image
            className="w-full"
            src={solutionImg}
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
                className="w-full"
                src={solution1}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <div className="text-left mt-5 shadow-xl rounded-xl p-5 md:p-10 md:w-[40%]">
              <h2 className="text-[25px] md:text-4xl font-bold">
                Reuse of Rain Water
              </h2>
              <hr className="m-2"></hr>
              <p className="text-[17px] md:text-base">
                Reuse of Rainwater is the key benefactor towards the securing
                and abnormal state usage of Water Resources.<br></br>
                <br></br> We have a solid nearness in Designing, Implementation
                and Management of such activities. Our center organizations are
                held up by administrations for Rainwater Harvesting and Ground
                Water Management, broad Research and Development.
              </p>
            </div>
          </div>

          <div
            data-aos="zoom-in-up"
            className="mt-10 pb-10 md:flex md:justify-center md:items-center md:gap-14"
          >
            <div className="text-left mb-5 shadow-xl rounded-xl p-5 md:p-10 md:w-[40%]">
              <h2 className="text-[25px] md:text-4xl font-bold">
                Pond Development
              </h2>
              <hr className="m-2"></hr>
              <p className="text-[17px] md:text-base">
                Water bodies are like life in Indian culture. This is a standout
                among the best revival cum holding structures, which require the
                least venture and gives the most noteworthy return. At ICPL we
                utilize most trend-setting innovation to protect water assets in
                their unique state. We work past to make the lakes look great.
                <br></br>
                <br></br> Our work incorporates purifying, creation and the
                board of lakes securely following every single required
                guideline and rules of the government. In order to maintain a
                standard, each water body needs to undergo certain processes
                like desalting, water augmentation, bio-remediation,
                decentralization, visual attraction and monitoring. We make sure
                that the entire process is professionally and smoothly managed.
              </p>
            </div>
            <div className="md:w-[30%]">
              <Image
                className="w-full"
                src={solution2}
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
                src={solution3}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <div className="text-left mt-5 shadow-xl rounded-xl p-5 md:p-10 md:w-[40%]">
              <h2 className="text-[25px] md:text-4xl font-bold">
                Rainwater Harvesting Recharge
              </h2>
              <hr className="m-2"></hr>
              <p className="text-[17px] md:text-base">
                Rainwater Harvesting Recharge will be water that starts amid
                precipitation occasions in light of the fact that impenetrable
                surfaces (parking areas, streets, structures, compacted soil)
                don’t enable downpour to penetrate into the ground, and more
                spillover is created than in undeveloped conditions.<br></br>
                <br></br> Rainwater Harvesting Recharge the board additionally
                adds to network well-being and money-related hazards for the
                executives by decreasing the danger of urban flooding and
                disintegration.{" "}
                <bold className="text-green-700 font-semibold">
                  InRain<sup>®</sup>
                </bold>{" "}
                Construction Pvt. Ltd. helps you to reduce mains water
                dependence by strong structural design through a low maintenance
                structure.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Solutions;
