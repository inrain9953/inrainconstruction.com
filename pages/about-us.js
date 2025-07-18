import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import banner from "./../public/banner4.jpg";
import abt from "./../public/abt.jpg";
import renewable from "./../public/renewable-energy.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import BottomImg from "./../public/bottom_about.jpg";
import CountUp from "react-countup";
import Image from "next/image";
import Head from "next/head";
import PopUp from "@/components/popup";
import griha from "./../public/griha.jpg";
import iso1 from "./../public/iso1.jpg";
import iso2 from "./../public/iso2.jpg";
import Link from "next/link";

const About = () => {
  const title =
    "About ICPL | About Our Rainwater Harvesting(RWH) Technology | InRain® Construction Pvt. Ltd.";
  const desc =
    "InRain® Water Harvesting company has successfully Installed morethan 400 Rain Water Harvesting Projects enabling in conserving billion of gallons of water from of getting it waste.";
  const keyword =
    "About ICPL, About Our Rainwater Harvesting(RWH) Technology, Water Conservation in Delhi, Modular Tank Systems in Delhi, Rainwater Harvesting in Delhi, Sustainable Water Management, Monolithic Structures, RWH Technology, Clean Energy Solutions, Modular Technology RWH, Water Table Recharge";
  const canonical = "https://www.inrainconstruction.com/about-us";
  const ogUrl = "https://www.inrainconstruction.com/about-us";
  const ogTitle =
    "About Us | About Our Rainwater Harvesting(RWH) Technology | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "InRain® Water Harvesting company has successfully Installed morethan 400 Rain Water Harvesting Projects enabling in conserving billion of gallons of water from of getting it waste.";
  const twittertitle =
    "About US | About Our Rainwater Harvesting(RWH) Technology | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "InRain Water Harvesting company has successfully Installed morethan 400 Rain Water Harvesting Projects enabling in conserving billion of gallons of water from of getting it waste.";

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
      <PopUp />
      <div>
        <div data-aos="zoom-in-up" className="md:m-5 m-2 md:pt-0">
          <Image
            className="w-full h-28 md:h-72 rounded-xl md:shadow-2xl relative"
            src={banner}
            alt="img"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
          <div className="absolute md:bottom-7 bottom-6 md:left-10 left-2">
            <p className="text-xs md:text-lg text-black">
              <Link href={"/"}>Home</Link> / About Us
            </p>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          className="m-5 md:m-10 md:grid md:grid-cols-2 md:gap-14 md:items-center "
        >
          <div className="">
            <Image
              className="w-full rounded-xl"
              src={abt}
              alt="img"
              loading="eager"
              priority={true}
              unoptimized={true}
            />
          </div>
          <div className="mt-5 text-left">
            <p className="text-2xl md:text-4xl font-semibold md:mb-5">
              Who We Are
            </p>
            <a
              target="_blank"
              href="https://www.inrainconstruction.com/about_icpl"
              className="text-2xl text-sky-500 hover:text-green-500 font-bold md:text-3xl"
            >
              ICPL
            </a>
            <p className="text-[17px] text-justify md:text-lg md:mt-2">
              We are a subsidiary company of “Singh & Singh Construction”, a
              firm with a strong presence in India with more than 30 years of
              experience in the civil construction industry. We have completed
              numerous Projects for Bridges Construction under PWD/RWD,
              Irrigation & Flood Control Department, Bihar Rajya Pool Nirman
              Nigam Etc. & Constructed Roads Under Pradhan Mantri Gramin Sadark
              Yojana, and continued to undertake construction projects for more
              than 30 years.
            </p>
          </div>
        </div>

        <div data-aos="zoom-in-up" className="mt-10 md:mt-16 ">
          <div className="text-center mb-5">
            <h1 className="text-2xl font-semibold md:text-3xl md:font-bold">
              About ICPL
            </h1>
          </div>
          <div className="text-center m-5 shadow-2xl p-5 rounded-lg md:mt-7 md:w-[75%] md:m-auto">
            <h2 className="text-2xl font-semibold m-3 md:text-3xl md:font-bold md:mt-5 md:mb-3">
              InRain<sup>®</sup> Construction Pvt. Ltd.(ICPL)
            </h2>
            <p className="text-[17px] text-justify md:text-lg">
              <Link
                className="text-green-500 hover:text-sky-500"
                href={
                  "https://www.inrainconstruction.com/modular-rainwater-harvesting"
                }
              >
                Modular Rainwater Harvesting
              </Link>{" "}
              Company with a strong presence all over India. The company has
              successfully installed more than 4000 Rainwater Harvesting
              Projects to enable it to conserve billions of gallons of water
              from wasting. We are privileged to introduce the next level
              Scientific Rainwater Harvesting Technology with more than 50
              Ton/Sq.M load bearing structure for the 1st time in the world. We
              are proud partners of the Make in India Movement, having our own
              products and manufacturing.
            </p>
          </div>
        </div>

        <div className="m-5 md:flex md:justify-center md:items-center md:gap-10 md:m-10">
          <div
            data-aos="zoom-in-up"
            className="text-center bg-green-700 p-5 rounded-lg mt-10 md:w-[25%] flex flex-col items-center justify-center gap-2"
          >
            <Image
              className="h-8"
              src={renewable}
              alt="img"
              loading="eager"
              priority={true}
              unoptimized={true}
            />
            <p className="text-lg font-semibold text-white">Clean Energy</p>
          </div>

          <div
            data-aos="zoom-in-up"
            className="text-center bg-green-700 p-5 rounded-lg mt-10 md:w-[25%] flex flex-col items-center justify-center gap-2"
          >
            <Image
              className="h-8"
              src={renewable}
              alt="img"
              loading="eager"
              priority={true}
              unoptimized={true}
            />
            <p className="text-lg font-semibold text-white">
              Project Assistance
            </p>
          </div>

          <div
            data-aos="zoom-in-up"
            className="text-center bg-green-700 p-5 rounded-lg mt-10 md:w-[25%] flex flex-col items-center justify-center gap-2"
          >
            <Image
              className="h-8"
              src={renewable}
              alt="img"
              loading="eager"
              priority={true}
              unoptimized={true}
            />
            <p className="text-lg font-semibold text-white">Action Research</p>
          </div>

          <div
            data-aos="zoom-in-up"
            className="text-center bg-green-700 p-5 rounded-lg mt-10 md:w-[25%] flex flex-col items-center justify-center gap-2"
          >
            <Image
              className="h-8"
              src={renewable}
              alt="img"
              loading="eager"
              priority={true}
              unoptimized={true}
            />
            <p className="text-lg font-semibold text-white">
              Long-term Planning
            </p>
          </div>
        </div>

        <div className="pt-5">
          <div
            data-aos="zoom-in-up"
            className="m-5 pb-5 md:flex md:justify-center md:items-center"
          >
            <div className="border-l-2 border-black md:mr-5 md:border-l-0 md:w-[30%]">
              <div className="text-left mt-5 mb-5 md:text-right">
                <p className="font-semibold md:font-bold text-base ml-5 text-blue-500">
                  VISION FOR THE FUTURE
                </p>
              </div>

              <div>
                <div className="text-left md:text-right">
                  <h2 className="text-3xl font-bold ml-5">
                    About Our Rainwater Harvesting(RWH) Technology
                  </h2>
                  <p className="text-[17px] mt-2 ml-5">
                    At{" "}
                    <bold className="text-green-700 font-semibold">
                      InRain<sup>®</sup>
                    </bold>{" "}
                    , we are engaged in making RWH System based on the modular
                    technology.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 md:w-[30%] md:border-l-2 md:border-black">
              <p className="text-[17px] text-justify mt-2 md:ml-5">
                It is indeed entirely different from conventional rainwater
                harvesting systems that were made using cement and brick walls.
                A few benefits of our scientific RWH system are highlighted as
                follows.
              </p>
            </div>
          </div>

          <div
            data-aos="zoom-in-up"
            className="m-5 md:flex md:justify-center md:gap-10"
          >
            <p className="text-[17px] text-justify mt-3 md:w-[25%] md:shadow-lg md:p-5 rounded-lg">
              Monolithic Structures are quick to install and the same turns into
              a Rainwater Holding Tank below the ground within no time as
              compared to making a Civil Pit. Modular tanks can be used for
              holding/reusing the rainwater, recharging the water table and
              percolating.
            </p>
            <p className="text-[17px] text-justify mt-3 md:w-[25%] md:shadow-lg md:p-5 rounded-lg">
              Using the{" "}
              <bold className="text-green-700 font-semibold">
                InRain<sup>®</sup>
              </bold>{" "}
              filtration system, developed in-house by the{" "}
              <a
                href="https://www.inrainconstruction.com/about_icpl"
                target="_blank"
                className="text-green-500 hover:text-sky-500 font-semibold"
              >
                ICPL R&D team
              </a>
              , clean rain water is trapped in the tank, thereby saving on
              maintenance parts tremendously as it is very easy & handy with
              negligible maintenance cost as compared to conventional systems.
              Precious land over the modular tank is not wasted, since it is a
              load bearing structure and can bear tons of loads, thereby making
              the whole system truly economical as compared with the case of
              having a civil pit.
            </p>
            <p className="text-[17px] text-justify mt-3 md:w-[25%] md:shadow-lg md:p-5 rounded-lg">
              95% of the capacity of the tank is usable as compared to only
              50-55% usability in case of civil pit. No risk of accidents as no
              one can fall into this kind of tank, whereas having an RCC Civil
              tank is highly accident-prone. Removable and transportable to any
              other location, which is not possible in the case of a civil pit.
              Holding/Recharge Capacity begins from 1 Cubic Meter to any
              imaginable size within significantly less time.
            </p>
          </div>
        </div>

        <div>
          <div data-aos="zoom-in-up" className="text-center m-10">
            <h4 className="text-lg font-bold text-blue-700">OUR RESEARCH</h4>
            <h4 className="text-3xl font-bold mt-3 mb-5">How We Work</h4>
          </div>

          <div className="md:grid md:grid-cols-3">
            <div data-aos="zoom-in-up" className="m-5 shadow-2xl rounded-md">
              <div className="bg-sky-600 text-white rounded-md p-3 text-center">
                <p className="text-base font-bold">STRATEGY</p>
              </div>
              <div className="text-left p-5 flex flex-col gap-4">
                <div className="flex gap-2">
                  <ArrowRightAltIcon />
                  <p className="text-[16px]">
                    Concur on the Project Value and plan the Project Controls to
                    be connected.
                  </p>
                </div>
                <div className="flex gap-2">
                  <ArrowRightAltIcon />
                  <p className="text-[16px]">Recognize important partners.</p>
                </div>
                <div className="flex gap-2">
                  <ArrowRightAltIcon />
                  <p className="text-[16px]">
                    Survey venture hazard and vulnerability.
                  </p>
                </div>
                <div className="flex gap-2">
                  <ArrowRightAltIcon />
                  <p className="text-[16px]">
                    Set up a venture control execution plan.
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="zoom-in-up" className="m-5 shadow-2xl rounded-md">
              <div className="bg-sky-600 text-white rounded-md p-3 text-center">
                <p className="text-base font-bold">TARGET & ASSURANCE</p>
              </div>
              <div className="text-left p-5 flex flex-col gap-4">
                <div className="flex gap-2">
                  <ArrowRightAltIcon />
                  <p className="text-[16px]">
                    Complete expense and calendar gauge surveys.
                  </p>
                </div>
                <div className="flex gap-2">
                  <ArrowRightAltIcon />
                  <p className="text-[16px]">
                    Review of undertaking control abilities versus control
                    execution plan.
                  </p>
                </div>
                <div className="flex gap-2">
                  <ArrowRightAltIcon />
                  <p className="text-[16px]">
                    Issue a hole examination dependent on the review.
                  </p>
                </div>
                <div className="flex gap-2">
                  <ArrowRightAltIcon />
                  <p className="text-[16px]">
                    Refresh the undertaking control execution plan.
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="zoom-in-up" className="m-5 shadow-2xl rounded-md">
              <div className="bg-sky-600 text-white rounded-md p-3 text-center">
                <p className="text-base font-bold">CONTROL</p>
              </div>
              <div className="text-left p-5 flex flex-col gap-4">
                <div className="flex gap-2">
                  <ArrowRightAltIcon />
                  <p className="text-[16px]">
                    Roll out the project execution plan.
                  </p>
                </div>
                <div className="flex gap-2">
                  <ArrowRightAltIcon />
                  <p className="text-[16px]">
                    Prepare an integrated baseline schedule and budget.
                  </p>
                </div>
                <div className="flex gap-2">
                  <ArrowRightAltIcon />
                  <p className="text-[16px]">Mobilize site based resources.</p>
                </div>
                <div className="flex gap-2">
                  <ArrowRightAltIcon />
                  <p className="text-[16px]">Monitor, control and report.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            data-aos="zoom-in-up"
            className="m-5 md:flex md:justify-center md:items-center md:gap-10"
          >
            <div className="pt-10 md:w-[30%]">
              <Image
                className="w-full rounded-lg"
                src={BottomImg}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <div className="text-left mt-5 md:w-[30%]">
              <h4 className="text-3xl font-bold">
                Installation & Project Development
              </h4>
              <p className="text-[17px] text-justify mt-3">
                Our team has done more than 4000+ Rainwater Harvesting Projects
                accross the India. Technology we are using has globally been
                adopted in advanced country like Germany, Japan, Singapore, USA
                and Australia.
              </p>
            </div>
          </div>

          <div data-aos="zoom-in-up" className="text-center m-10">
            <div className="text-6xl font-semibold">
              <CountUp
                duration={5}
                className=""
                end={4000}
                enableScrollSpy={true}
                scrollSpyDelay={50}
              />
              <span>+</span>
              <br></br>
            </div>
            <span className="text-2xl font-semibold m-3">
              Projects Completed
            </span>
          </div>
        </div>

        <div className="text-center">
          <p data-aos="zoom-in-up" className="text-3xl font-bold">
            Our Certification
          </p>
          <div className="m-5 md:grid md:grid-cols-3 md:items-center md:align-middle md:gap-10">
            <Image
              data-aos="zoom-in-up"
              className="rounded-lg m-auto pb-2"
              width={400}
              src={iso1}
              alt="img"
              loading="eager"
              priority={true}
              unoptimized={true}
            />
            <Image
              data-aos="zoom-in-up"
              className="rounded-lg m-auto pb-2"
              width={400}
              src={iso2}
              alt="img"
              loading="eager"
              priority={true}
              unoptimized={true}
            />
            <Image
              data-aos="zoom-in-up"
              className="rounded-lg m-auto pb-2"
              width={400}
              src={griha}
              alt="img"
              loading="eager"
              priority={true}
              unoptimized={true}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
