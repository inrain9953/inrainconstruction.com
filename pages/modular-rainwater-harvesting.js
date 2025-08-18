import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import service3 from "./../public/service3.jpg";
import harvesting3 from "./../public/services/harvesting3.jpg";
import Image from "next/image";
import Head from "next/head";
import PopUp from "@/components/popup";
import Link from "next/link";

const Service3 = () => {
  const title =
    "Modular Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const desc =
    "Modular Rainwater Harvesting: We, at InRain® Construction Pvt. Ltd. have adopted world-class and the most Infusing Modular technologies to store or reuse rain water in order to realize the needs of an enriched tomorrow with abundant water resources in place.";
  const keyword =
    "Modular Rainwater Harvesting in Delhi, Modular Rainwater Harvesting Service Provider, Modular Rainwater Harvesting, Modular Rainwater Harvesting Service Provider in Delhi, Modular Rainwater Harvesting System";
  const canonical =
    "https://www.inrainconstruction.com/modular-rainwater-harvesting";
  const ogUrl =
    "https://www.inrainconstruction.com/modular-rainwater-harvesting";
  const ogTitle =
    "Modular Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Modular Rainwater Harvesting: We, at InRain® Construction Pvt. Ltd. have adopted world-class and the most Infusing Modular technologies to store or reuse rain water in order to realize the needs of an enriched tomorrow with abundant water resources in place.";
  const twittertitle =
    "Modular Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Modular Rainwater Harvesting: We, at InRain® Construction Pvt. Ltd. have adopted world-class and the most Infusing Modular technologies to store or reuse rain water in order to realize the needs of an enriched tomorrow with abundant water resources in place.";

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
            src={service3}
            alt="Rainwater Harvesting Banner"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
          <div className="absolute md:bottom-2 bottom-0 md:left-5 left-2">
            <p className="text-xs md:text-lg text-green-600">
              <Link href={"/"}>Home</Link> / Modular Rainwater Harvesting
            </p>
          </div>
        </div>

        <div className="m-5 md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div data-aos="fade-up" className="text-left">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Modular Rainwater Harvesting
            </h1>

            <p className="text-[17px] text-justify md:text-lg mt-3">
              Infusing{" "}
              <Link
                href={"https://www.inrainconstruction.com/"}
                className="text-green-600 hover:text-sky-500 font-semibold"
              >
                Modular Rainwater Harvesting
              </Link>{" "}
              technologies to store or recharge the groundwater in order to
              realize the needs of an enriched tomorrow with abundant water
              resources in place.
            </p>

            <ul className="list-disc m-5 font-semibold text-[17px] text-justify md:text-lg">
              <li>Polymer as strong as metal.</li>
              <li>Load bearing and top surface utilization.</li>
              <li>Time-saving during installation.</li>
              <li>Accident-free.</li>
              <li>Less maintenance cost than a civil pit.</li>
              <li>Maintenance time and resource utilization.</li>
              <li>Alteration and reuse advantage.</li>
              <li>Cost advantage.</li>
            </ul>
            <p className="text-[17px] text-justify md:text-lg mt-3">
              Urbanization has led to an increase in water consumption in
              various activities. The demand for water supply is quite high.
              However, our natural resources are very limited. There have been
              many reports of declining water levels around the world. Rainwater
              harvesting is one of the best solutions to keep sustainable
              development going. InRain® Construction Pvt. Ltd., a water
              conservation and management organization, offers various rainwater
              harvesting methods using the latest technology. <br></br>
              <br></br>
              In recent years, modular rainwater harvesting has become
              increasingly popular due to its various advantages over
              traditional rainwater harvesting methods. Modular rainwater
              harvesting effectively addresses two major concerns: budget and
              space. Not only it is easy on the pocket, but it also allows the
              use of space for various purposes.
              <br></br>
              <br></br>
              Polymer-based modular structures are used in this technique.
              Strength and load-bearing capacity are both excellent
              characteristics of these structures. Water harvesting areas
              prepared with modular structures can even be used for parking
              vehicles. The installation takes less time compared to a
              traditional rainwater harvesting system. Here are some advantages
              it offers:
            </p>

            <ol className="list-decimal m-5 font-semibold text-[17px] text-justify md:text-lg">
              <li>
                The eco-friendly and economical solution is that a polymer can
                be recycled or reused.
              </li>
              <li>
                It ensures excellent filtration as the percolation tank remains
                covered with the geotextile sheet.
              </li>
              <li>
                Safety: In this technique, we place the percolation tank
                underground to ensure no easy access to the water tank.
              </li>
              <li>
                Cost Savings on Maintenance: Low or almost no maintenance
                compared to traditional rainwater harvesting systems.
              </li>
              <li>Higher recharge capacity as water comes from five sides.</li>
              <li>Co-polymer-based modules have a high lifespan.</li>
              <li>
                Portability is one of the main properties of these
                copolymer-based stackable modules, as these modules can be
                easily shifted and installed at different locations.
              </li>
            </ol>

            <p className="text-[17px] text-justify md:text-lg mt-3">
              The modular rainwater harvesting method helps in restoring and
              reusing the rainwater within your budget. It allows you to
              contribute to your social and environmental causes without
              compromising on your budget and space.
            </p>
          </div>
          <div data-aos="fade-up" className="mt-5">
            <Link href={"https://www.inrainconstruction.com/"}>
              <Image
                className="w-full"
                src={harvesting3}
                alt="Modular Rainwater Harvesting"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </Link>
            <div className="m-2 mt-5 text-justify">
              <h2 className="text-xl font-semibold">
                Smart Use of Limited Resources
              </h2>
              <p className="text-[17px] md:text-lg mt-1">
                With rapid urban development, our natural water resources are
                under immense pressure, and water tables are depleting at an
                alarming rate. Modular rainwater harvesting systems are an
                intelligent, space-saving solution that helps meet rising water
                demands without putting a strain on the environment—or your
                wallet.
                <br></br>
                <br></br>
                Whether you’re planning a new project or looking to retrofit an
                existing space, our team at InRain® provides end-to-end modular
                rainwater harvesting solutions that are scalable, customizable,
                and built to last.
              </p>
              <p className="text-[18px] md:text-2xl mt-4 font-semibold">
                Why Choose Modular Rainwater Harvesting?
              </p>
              <ul className="list-disc text-[18px] mt-2 md:text-lg">
                <li>
                  <bold className="font-semibold">Strong & Durable</bold> —
                  High-quality co-polymer that offers the strength of metal.
                </li>
                <li>
                  <bold className="font-semibold">Quick Installation</bold> —
                  Saves time and workforce with simple modular setup.
                </li>
                <li>
                  <bold className="font-semibold">Safe & Accident-Free</bold> —
                  Underground systems reduce hazards and keep water secure.
                </li>
                <li>
                  <bold className="font-semibold">Low Maintenance</bold> — No
                  algae, no rust, and barely any upkeep needed.
                </li>
                <li>
                  <bold className="font-semibold">Cost-Efficient</bold> — Lower
                  cost than conventional concrete systems.
                </li>
                <li>
                  <bold className="font-semibold">Reusable & Relocatable</bold>{" "}
                  — Can be easily moved and reused as per future requirements.
                </li>
                <li>
                  <bold className="font-semibold">Efficient Filtration</bold> —
                  Geo-textile covered percolation tanks ensure clean recharge.
                </li>
                <li>
                  <bold className="font-semibold">Maximized Recharge</bold> —
                  Water enters from five sides for higher infiltration.
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
            Precious land over the modular tank is not wasted, since it is a
            load-bearing structure and can bear tons of loads, thereby making
            the whole system truly economical as compared with the case of
            having a civil pit. 95% of the capacity of the tank is usable as
            compared to only 50-55% usability in the case of a civil pit. There is no risk of
            accidents, as no one can fall into this kind of tank, whereas having an
            RCC civil tank is highly accident-prone. Easily removable and
            transportable to any other location, which is not possible in the case of
            a civil pit. Holding/Recharge Capacity begins from 1 cubic meter to
            any imaginable size within significantly less time.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service3;
