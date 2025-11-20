import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import PopUp from "@/components/popup";
import Head from "next/head";
import React from "react";
import Image from "next/image";

const RWHTank = () => {
  const title =
    "Rainwater Harvesting Tank | Sustainable Water Storage Solutions for Homes & Industries";
  const desc =
    "Efficient and durable Rainwater Harvesting Tanks designed for homes, commercial spaces, and industries. Learn how rainwater tanks work, their benefits, types, installation advantages, and why they are essential for sustainable water management.";
  const keyword =
    "rainwater harvesting tank, rainwater storage tank, rainwater collection system, underground rainwater tank, surface tanks, modular rainwater tank, water conservation tank, rooftop rainwater harvesting, water storage solutions, sustainable water systems, rainwater filtration tank, rainwater harvesting system India";
  const canonical =
    "https://www.inrainconstruction.com/rainwater-harvesting-tank";
  const ogUrl = "https://www.inrainconstruction.com/rainwater-harvesting-tank";
  const ogTitle =
    "Rainwater Harvesting Tank | Sustainable Water Storage Solutions for Homes & Industries";
  const ogDescription =
    "Efficient and durable Rainwater Harvesting Tanks designed for homes, commercial spaces, and industries. Learn how rainwater tanks work, their benefits, types, installation advantages, and why they are essential for sustainable water management.";
  const twittertitle =
    "Rainwater Harvesting Tank | Sustainable Water Storage Solutions for Homes & Industries";
  const twitterdescription =
    "Efficient and durable Rainwater Harvesting Tanks designed for homes, commercial spaces, and industries. Learn how rainwater tanks work, their benefits, types, installation advantages, and why they are essential for sustainable water management.";

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

      <div className="max-w-4xl mx-auto p-6 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold text-justify mb-4">
          Rainwater Harvesting Tank – Smart Storage for Sustainable Water
          Management
        </h1>

        <p className="text-lg text-justify mb-6">
          A <strong>Rainwater Harvesting Tank</strong> is an essential component
          of any modern water conservation system. Designed to collect, store,
          and supply harvested rainwater, these tanks help households,
          industries, and commercial spaces reduce dependency on municipal water
          sources while promoting sustainable resource management. With growing
          water scarcity and rising groundwater depletion across cities,
          installing a dedicated harvesting tank has become both a practical and
          environmentally responsible choice.
        </p>

        <Image
          className="w-full border-2 border-black p-1"
          src="/service7.jpg"
          alt="Rainwater Harvesting Tank"
          width={200}
          height={200}
        />

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mb-3">
          🛑 What is a Rainwater Harvesting Tank?
        </h2>
        <p className="mb-4 text-justify">
          A <strong>Rainwater Harvesting Tank</strong> is a specially designed
          container that stores rainwater collected from rooftops, paved areas,
          or open land surfaces. The stored water can then be filtered and used
          for various applications such as:
        </p>

        <ul className="list-disc pl-6 space-y-1 mb-6">
          <li>Gardening & landscaping</li>
          <li>Flushing & cleaning</li>
          <li>Industrial processes</li>
          <li>Construction usage</li>
          <li>Groundwater recharge (after filtration)</li>
        </ul>

        <p className="mb-6 text-justify">
          These tanks come in different sizes, materials, and configurations
          depending on your property layout and water demand.
        </p>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mb-4">
          Why Rainwater Harvesting Tanks Are Important
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">✔️ Reliable Water Backup</h3>
            <p className="text-justify">
              Acts as a dependable secondary water source during water cuts,
              summer shortages, and low-pressure supply days.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">✔️ Reduces Water Bills</h3>
            <p className="text-justify">
              By using stored rainwater for non-potable applications, you
              significantly cut down on municipal water consumption.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">✔️ Supports Groundwater Recharge</h3>
            <p className="text-justify">
              Excess tank water can be diverted to recharge pits or borewells,
              improving local groundwater levels.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">✔️ Promotes Eco-Friendly Living</h3>
            <p className="text-justify">
              Helps reduce stormwater runoff, soil erosion, and urban flooding
              while supporting a greener environment.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">✔️ Long-Term Savings</h3>
            <p className="text-justify">
              Once installed, the tank system requires minimal maintenance and
              offers long-lasting benefits.
            </p>
          </div>
        </div>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mb-4">
          Types of Rainwater Harvesting Tanks
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">1. Surface Tanks</h3>
            <p className="text-justify">
              Above-ground tanks made from FRP, HDPE, plastic, or concrete.
            </p>
            <p className="font-medium">
              Benefits: Easy installation, low maintenance, cost-effective.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">2. Underground Tanks</h3>
            <p className="text-justify">
              Installed below the ground to save space and enhance aesthetics.
            </p>
            <p className="font-medium">
              Benefits: Strong, long-lasting, temperature-stable, ideal for
              large storage.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">3. Modular Tanks</h3>
            <p className="text-justify">
              Interlocking modules used for high-capacity storage in limited
              spaces.
            </p>
            <p className="font-medium">
              Benefits: Customizable, lightweight, stackable, ideal for
              commercial & industrial projects.
            </p>
          </div>
        </div>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mb-4">
          How a Rainwater Harvesting Tank Works
        </h2>

        <ol className="list-decimal pl-6 space-y-2 mb-6">
          <li>Rainwater is collected from rooftops or catchment areas.</li>
          <li>Pre-filtration removes dust and debris.</li>
          <li>Water is stored safely in the tank.</li>
          <li>
            Fine filtration options (sand filter, carbon filter, UV filter, or
            inline filter) can be added for cleaner water.
          </li>
          <li>
            Water is then supplied to gardens, flush systems, or recharge
            structures using gravity or a small pump.
          </li>
        </ol>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mb-4">
          Why Choose Us for Rainwater Harvesting Tanks?
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>High-strength, weather-resistant tanks</li>
          <li>Custom size & design options</li>
          <li>End-to-end installation support</li>
          <li>Eco-friendly, cost-effective solutions</li>
          <li>Expertise in residential, commercial, and industrial projects</li>
          <li>
            More than <strong>4000+ successful installations</strong> across
            India
          </li>
        </ul>

        <p className="mb-6">
          We ensure every tank system is designed for maximum storage, minimum
          maintenance, and long-term reliability.
        </p>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mb-3">
          📞 Get a Rainwater Harvesting Tank for Your Property
        </h2>
        <p className="mb-6">
          Whether you’re constructing a new building or upgrading your water
          system, our team will help you choose the right tank size, design, and
          installation plan.
        </p>

        <p className="font-semibold mb-3">
          <a
            href="/contact-us"
            className="inline-block mr-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Contact us
          </a>
          today to discuss your requirements and get a customized rainwater
          harvesting solution.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default RWHTank;
