import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import service3 from "./../public/service3.jpg";
import harvesting3 from "./../public/services/harvesting3.jpg";
import Image from "next/image";
import Head from "next/head";
import PopUp from "@/components/popup";

const Service3 = () => {
  const title =
    "Modular Rainwater Harvesting System| InRain® Construction Pvt. Ltd.";
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
    "Modular Rainwater Harvesting| InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Modular Rainwater Harvesting: We, at InRain® Construction Pvt. Ltd. have adopted world-class and the most Infusing Modular technologies to store or reuse rain water in order to realize the needs of an enriched tomorrow with abundant water resources in place.";

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
            className="w-full md:rounded-xl md:shadow-2xl"
            src={service3}
            alt="img"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
        </div>

        <div className="m-5 md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div data-aos="zoom-in-up" className="text-left">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Modular Rainwater Harvesting
            </h1>

            <p className="text-[17px] md:text-lg mt-3">
              Infusing Modular technologies to store or reuse rain water in
              order to realize the needs of an enriched tomorrow with abundant
              water resources in place.
            </p>

            <ul className="list-disc m-5 font-semibold text-[17px] md:text-lg">
              <li>Polymer as strong as metal.</li>
              <li>Load bearing and top surface utilization.</li>
              <li>Time saving in installation.</li>
              <li>Accident free.</li>
              <li>Less maintenance cost than civil pit.</li>
              <li>Maintenance time and resource utilization.</li>
              <li>Alteration and re-use advantage.</li>
              <li>Cost advantage.</li>
            </ul>
            <p className="text-[17px] md:text-lg mt-3">
              Urbanization has led to an increase in water consumption in
              various activities. The demand for water supply is quite high.
              However, our natural resources are very limited. There have been
              many reports of declining water levels around the world. Rainwater
              harvesting is one of the best solutions to keep sustainable
              development going.{" "}
              <bold className="text-green-700 font-semibold">
                InRain<sup>®</sup>
              </bold>{" "}
              Construction Pvt. Ltd., a water conservation and management
              organization, offers various rainwater harvesting methods using
              the latest technology. <br></br>
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

            <ol className="list-decimal m-5 font-semibold text-[17px] md:text-lg">
              <li>
                The eco-friendly and economical solution as a polymer can be
                recycled or reused.
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
                Cost Saving on Maintenance: Low or almost no maintenance
                compared to traditional rainwater harvesting system.
              </li>
              <li>Higher recharge capacity as water comes from five sides.</li>
              <li>Co-polymer based modules have a high lifespan.</li>
              <li>
                Portability is one of the main properties of these co-polymer
                based stackable modules, as these modules can be easily shifted
                and installed at different locations.
              </li>
            </ol>

            <p className="text-[17px] md:text-lg mt-3">
              The modular Rainwater Harvesting method helps in restoring and
              reusing the rainwater within your budget. It allows you to
              contribute to your social and environmental cause without
              compromising on your budget and space.
            </p>
          </div>
          <div data-aos="zoom-in-up" className="mt-5">
            <Image
              className="w-full"
              src={harvesting3}
              alt="img"
              loading="eager"
              priority={true}
              unoptimized={true}
            />
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          className="m-5 md:m-10 bg-sky-300 rounded-lg"
        >
          <p className="text-[17px] md:text-lg mt-3 p-5">
            Precious land over the modular tank is not wasted, since it is a
            load bearing structure and can bear tons of loads thereby making the
            whole system truly economical as compared with the case of having
            civil pit. 95% of the capacity of tank is usable as compared to only
            50-55% usability in case of civil pit. No Risk of accidents as no
            one can fall into this kind of tank whereas having a RCC Civil tank
            is highly accident prone. Easy removable and transportable to any
            other location which is not possible in case of civil pit. Holding /
            Recharge Capacity begins from 1 Cubic Meter to any imaginable Size
            within significantly lesser time.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service3;
