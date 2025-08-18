import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import harvesting2 from "./../public/services/harvesting2.jpg";
import service2 from "./../public/service2.jpg";
import Image from "next/image";
import Head from "next/head";
import PopUp from "@/components/popup";
import Link from "next/link";

const Service2 = () => {
  const title =
    "Co-Polymer Based Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const desc =
    "Co-polymer based rainwater harvesting system uses a structure that offers an economical and eco-friendly solution compared to traditional rainwater harvesting systems.";
  const keyword =
    "Co-polymer based rainwater harvesting system, Polymer Type Rainwater Harvesting System Service Provider, Polymer Type Rainwater Harvesting System, rainwater harvesting system";
  const canonical =
    "https://www.inrainconstruction.com/co-polymer-based-rainwater-harvesting-system";
  const ogUrl =
    "https://www.inrainconstruction.com/co-polymer-based-rainwater-harvesting-system";
  const ogTitle =
    "Co-Polymer Based Rainwater Harvesting System | InRain® Construction";
  const ogDescription =
    "Co-polymer based rainwater harvesting system uses a structure that offers an economical and eco-friendly solution compared to traditional rainwater harvesting systems.";
  const twittertitle =
    "Co-Polymer Based Rainwater Harvesting System | InRain™ Construction";
  const twitterdescription =
    "Co-polymer based rainwater harvesting system uses a structure that offers an economical and eco-friendly solution compared to traditional rainwater harvesting systems.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="language" content="en" />
        <meta name="author" content="InRain® Construction Pvt. Ltd." />
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
        <div data-aos="fade-up">
          <Image
            className="w-full h-28 md:h-72 md:rounded-xl md:shadow-2xl relative"
            src={service2}
            alt="Water is source of life"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
          <div className="absolute md:bottom-2 bottom-0 md:left-5 left-2">
            <p className="text-xs md:text-lg text-black">
              <Link href={"/"}>Home</Link> / Co-Polymer Based Rainwater
              Harvesting System
            </p>
          </div>
        </div>

        <div className="m-5 md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div data-aos="fade-up" className="text-left">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Co-Polymer Based Rainwater Harvesting System
            </h1>
            <p className="text-[17px] text-justify md:text-lg mt-3">
              <bold className="text-green-700 font-semibold">InRain®</bold>{" "}
              Construction Private Limited offers co-polymer-based rainwater
              harvesting system services for water conservation and management.
              This is a modern-day technique of harvesting natural rainwater.
              This technique is cost-effective and easy to maintain compared to
              traditional rainwater harvesting. This technique is also known as
              the modular rainwater harvesting technique, as it uses multiple
              stackable modules for building the structure of the rainwater
              harvesting system; this makes construction and installation faster
              and easier. <br></br>
              <br></br>
              The co-polymer-based rainwater harvesting system uses a structure
              that offers an economical and eco-friendly solution compared to
              traditional rainwater harvesting systems. Co-polymer products are
              less expensive when compared to the cost of building brick and
              reinforced cement concrete or plain cement concrete storage.
              Moreover, cement concrete storage that is used in traditional
              systems will require maintenance, as it has the chance of
              developing infestations of algae and fungi. Co-polymer modules are
              not only economical but also come with the option of portability,
              which allows the top surface to be used for a variety of purposes,
              like parking vehicles, floriculture, children's playgrounds etc.
              <br></br>
              <br></br>
              The co-polymer-based{" "}
              <Link
                className="hover:text-green-500 text-sky-500"
                href={
                  "https://www.inrainconstruction.com/rainwater-harvesting-system"
                }
              >
                Rainwater Harvesting System
              </Link>{" "}
              comes with certain advantages over the traditional method of
              rainwater harvesting. Some of the major advantages of this system
              are
            </p>

            <ol className="list-decimal m-5 font-semibold text-[17px] text-justify md:text-lg">
              <li>Eco-friendly and economical solutions.</li>
              <li>
                Geo sheet-covered percolation storage tank to ensure excellent
                filtration.
              </li>
              <li>
                Underground placement of the percolation tank ensures no easy
                access to the water tank, making it absolutely safe.
              </li>
              <li>
                Low or almost no maintenance in comparison to traditional
                rainwater harvesting systems.
              </li>
              <li>Higher recharge capacity as water comes from five sides.</li>
              <li>Co-polymer-based modules have a high lifespan.</li>
              <li>
                Portability is one of the main properties of these
                co-polymer-based stackable modules, as these modules can be
                easily shifted and installed at different locations.
              </li>
            </ol>

            <p className="text-[17px] text-justify md:text-lg mt-3">
              A{" "}
              <Link
                className="hover:text-green-500 text-sky-500"
                href={
                  "https://www.inrainconstruction.com/modular-rainwater-harvesting"
                }
              >
                Modular Rainwater Harvesting System
              </Link>{" "}
              meets the modern-day requirements and comes with safety assurance
              and an option of portability, which makes it one of the most
              sought-after water conservation and management systems.
            </p>
          </div>
          <div data-aos="fade-up" className="mt-5">
            <Link href={"https://www.inrainconstruction.com/"}>
              <Image
                className="w-full"
                src={harvesting2}
                alt="Co-polymer based rainwater harvesting system"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </Link>
            <div className="m-2 mt-5 text-justify">
              <h2 className="text-xl font-semibold">
                Why Co-Polymer Over Traditional Methods?
              </h2>
              <p className="text-[17px] md:text-lg mt-1">
                Traditional concrete tanks can be bulky, expensive, and
                high-maintenance. Over time, they may develop cracks, algae, or
                fungal growth. Our co-polymer modules, on the other hand, offer
                a smarter alternative:
              </p>
              <ul className="list-disc m-3 font-semibold text-[18px] md:text-lg">
                <li>More affordable than RCC or PCC constructions.</li>
                <li>
                  Algae and fungus-resistant, minimizing maintenance needs.
                </li>
                <li>
                  Portable and modular, making it easy to relocate or
                  reconfigure when needed.
                </li>
                <li>
                  Multifunctional top surface—the area above the tank can be
                  used for parking, gardening, or even a kid's play zone.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="m-5 md:m-10 bg-sky-300 rounded-lg"
        >
          <p className="text-[17px] text-justify md:text-lg mt-3 p-5">
            Unlike conventional RWH systems, the recharge chamber in modular RWH
            need not be PCC/RCC, thereby saving cost. Further, the PCC/RCC
            storage-cum-recharge tank, after a few years, gets infested with
            algae/cobwebs and is very difficult to clean, whereas modular RWH
            with polypropylene blocks wrapped on all sides with geo-textile is
            almost maintenance-free, and its useful life is longer with an
            option of portability if there is a need to use the occupied land
            for some construction purposes. Also, it has been the experience
            that the conventional RWH system always goes dysfunctional after 2–3
            seasons, whereas a modular RWH system in its concept and design has
            addressed several factors that help it have many relative advantages
            over the conventional RWH system.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service2;
