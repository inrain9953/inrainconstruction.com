import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import service8 from "./../public/service8.jpg";
import harvesting8 from "./../public/blog4.jpg";
import Image from "next/image";
import Head from "next/head";
import PopUp from "@/components/popup";
import Link from "next/link";

const Service8 = () => {
  const title =
    "Box Type Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const desc =
    "Rain Box Harvesting Systems are ideal for supplying water for toilet flushing, washing machines, and outdoor uses such as garden irrigation, car washing ";
  const keyword =
    "box type rainwater harvesting system, storm water management, Cost-Effective Water Solutions, Economical Rainwater Systems, Sustainable Water Management, Water Supply Mechanism, Filtration System, rainwater harvesting solution, Water Conservation Solutions, Rainwater Filtration Systems";
  const canonical =
    "https://www.inrainconstruction.com/box-type-rainwater-harvesting";
  const ogUrl =
    "https://www.inrainconstruction.com/box-type-rainwater-harvesting";
  const ogTitle =
    "Box Type Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Rain Box Harvesting Systems are ideal for supplying water for toilet flushing, washing machines, and outdoor uses such as garden irrigation, car washing ";
  const twittertitle =
    "Box Type Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Rain Box Harvesting Systems are ideal for supplying water for toilet flushing, washing machines, and outdoor uses such as garden irrigation, car washing ";

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
      <div className="mt-5 md:m-10">
        <div data-aos="zoom-in-up">
          <Image
            className="w-full h-28 md:h-72 md:rounded-xl md:shadow-2xl relative"
            src={service8}
            alt="Box Type Rainwater Harvestnig"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
          <div className="absolute md:bottom-2 bottom-0 md:left-5 left-2">
            <p className="text-xs md:text-lg text-black">
              <Link href={"/"}>Home</Link> / Box Type Rainwater Harvesting
              System
            </p>
          </div>
        </div>

        <div className="m-5 md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div data-aos="zoom-in-up" className="text-left">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Box Type Rainwater Harvesting System
            </h1>

            <p className="text-[17px] text-justify md:text-lg mt-3">
              Rainwater harvesting is a need of the modern world by practicing
              rainwater harvesting we can help in improving global water
              reserves. Inrain Construction Pvt. Ltd. is a leading company, in
              providing water conservation and management solutions offering
              various varieties of rainwater harvesting solutions. We use
              modern-day technology and excel in providing economical water
              conservation methods to our clients as per their needs. Among the
              various methods of{" "}
              <Link
                href={
                  "https://www.inrainconstruction.com/rainwater-harvesting-system"
                }
                className="text-green-600 hover:text-sky-500 font-semibold"
              >
                Rainwater Harvesting Systems,
              </Link>{" "}
              Box Type Rainwater Harvesting is one that helps you in saving the
              mains water. Since in this methodology rainwater collected from
              the roof doesn’t go through rigorous filtration and purification,
              it is majorly suited for outdoor activities like car washing and
              watering your garden area. The rainwater stored through this
              method can also be utilised for laundry and flushing the toilet.
              Inrain Construction Pvt. Ltd, a water conservation and management
              company is one of the leading water conservation and management
              service providers. We are well known to provide technology-based
              modern solutions that fit today’s requirements. We are the top
              most rainwater harvesting vendors in Delhi-Gurgaon. We completely
              understand the challenges of the modern-day industries and housing
              societies. Therefore, we offer technologically advanced but
              cost-effective solutions for water conservation needs. <br></br>
              <br></br>
              As the name suggests box type rainwater harvesting system uses a
              box to store water. A water collector is attached to the rooftop
              for collecting water, the collected water then goes through a
              filter system that removes impurities collected from the rooftop.
              The filtered water then goes to the box for storage.
              <br></br>
              <br></br>
              The installation and the water supply mechanism is the main
              feature of box type rainwater harvesting system. The water supply
              mechanism of this system is maintained in such a way that it
              always ensures water supply from the rain box before your main
              supply. It has been designed in a way that in case your rain box
              runs out of water your supply will be maintained through mains,
              ensuring continuous water supply autonomous systems. This helps in
              reducing your water bills significantly by effectively utilizing
              the stored rainwater.
              <br></br>
              <br></br>Box type rainwater harvesting systems use very compact
              size box, it is easily installable and cost-effective and
              addresses the specific need of our customers. Our skilled team
              provides help to our customers in choosing the correct rainwater
              harvesting systems as per their requirements and budget.
            </p>
          </div>
          <div data-aos="zoom-in-up" className="mt-5">
            <Link href={"https://www.inrainconstruction.com/"}>
              <Image
                className="w-full"
                src={harvesting8}
                alt="Box Type Rainwater"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service8;
