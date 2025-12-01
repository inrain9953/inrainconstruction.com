import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import PopUp from "@/components/popup";
import React from "react";
import Head from "next/head";
import Image from "next/image";

const RWHIndustries = () => {
  const title =
    "Rainwater Harvesting for Industries | Sustainable Industrial Water Solutions by InRain";
  const desc =
    "Discover high-capacity Rainwater Harvesting systems for industries by InRain Construction Pvt. Ltd. Reduce water costs, meet CGWA compliance, recharge groundwater, and secure long-term water availability for factories, industrial parks, and manufacturing units.";
  const keyword =
    "rainwater harvesting for industries, industrial rainwater harvesting system, factory rainwater harvesting, CGWA compliance rainwater harvesting, industrial water conservation system, borewell recharge for industries, rainwater harvesting solutions India, InRain industrial RWH, water management for industries, industrial sustainability water solutions";
  const canonical =
    "https://www.inrainconstruction.com/rainwater-harvesting-for-industries";
  const ogUrl =
    "https://www.inrainconstruction.com/rainwater-harvesting-for-industries";
  const ogTitle =
    "Rainwater Harvesting for Industries | Sustainable Industrial Water Solutions by InRain";
  const ogDescription =
    "Discover high-capacity Rainwater Harvesting systems for industries by InRain Construction Pvt. Ltd. Reduce water costs, meet CGWA compliance, recharge groundwater, and secure long-term water availability for factories, industrial parks, and manufacturing units.";
  const twittertitle =
    "Rainwater Harvesting for Industries | Sustainable Industrial Water Solutions by InRain";
  const twitterdescription =
    "Discover high-capacity Rainwater Harvesting systems for industries by InRain Construction Pvt. Ltd. Reduce water costs, meet CGWA compliance, recharge groundwater, and secure long-term water availability for factories, industrial parks, and manufacturing units.";

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
        <h1 className="text-3xl font-bold text-justify mb-3">
          Rainwater Harvesting for Industries
        </h1>
        <h2 className="text-xl font-semibold text-justify mb-2">
          Smart, Sustainable & Cost-Efficient Water Solutions by InRain
        </h2>

        <p className="text-lg text-justify mb-6">
          Industrial facilities across India face increasing pressure from
          rising water demand, strict compliance requirements, and rapidly
          depleting groundwater levels. In this environment, Rainwater
          Harvesting for Industries is no longer an optional sustainability
          step—it has become a strategic necessity.
          <br />
          At <strong>InRain Construction Pvt. Ltd.</strong>, we design and
          implement high-capacity, government-approved industrial rainwater
          harvesting systems that help factories, manufacturing units,
          warehouses, and industrial parks secure dependable water resources
          while reducing operational costs and meeting environmental norms.
        </p>

        <Image
          className="w-full border-2 border-black p-1"
          src="/service12.jpg"
          alt="Rainwater Harvesting Tank"
          width={200}
          height={300}
        />

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mb-2">
          Why Industries Need Rainwater Harvesting
        </h2>
        <p className="mb-2 text-justify">
          Industries require large volumes of water for processes such as
          cooling, washing, processing, cleaning, landscaping, and utility
          operations. With increasing groundwater restrictions by CGWA and state
          authorities, many units face:
        </p>

        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Rising water procurement costs</li>
          <li>Limited borewell yield</li>
          <li>Mandatory compliance for groundwater recharge</li>
          <li>Environmental audit requirements</li>
          <li>Uncertain water supply during peak months</li>
        </ul>

        <p className="mb-6 text-justify">
          Rainwater harvesting offers a practical, sustainable, and
          cost-effective solution to these challenges.
        </p>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mb-2">
          How InRain’s Industrial Rainwater Harvesting System Works
        </h2>

        <p className="mb-1 text-justify">
          Our systems are engineered specifically for large-scale industrial
          operations and include:
        </p>

        <div className="space-y-1">
          <div>
            <h3 className="font-semibold">1. Rooftop Rainwater Collection</h3>
            <p className="text-justify">
              Industrial roofs offer huge catchment areas. We collect clean
              runoff and channel it through engineered pipelines.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">2. High-Capacity Filtration</h3>
            <p className="text-justify">
              Advanced filtration ensures dust-free, debris-free, and
              contamination-free water suitable for recharge or non-potable use.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">3. Recharge Structures</h3>
            <p className="text-justify">
              We construct high-efficiency structures such as:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>Recharge Wells</li>
              <li>Percolation Pits</li>
              <li>Bore Recharge Systems</li>
              <li>Modular Recharge Chambers</li>
              <li>Geo-textile Based Recharge Units</li>
            </ul>
            <p className="text-justify">
              These systems allow water to percolate deep into aquifers,
              improving groundwater levels around the facility.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">4. Storage for Industrial Use</h3>
            <p className="text-justify">
              For units that prefer water reuse, we integrate:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>Underground tanks</li>
              <li>Storage reservoirs</li>
              <li>Modular water tanks</li>
            </ul>
            <p className="text-justify">
              This stored water can be used for landscaping, flushing, cooling
              towers, and industrial utilities.
            </p>
          </div>
        </div>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mb-2">
          Benefits of Rainwater Harvesting for Industries
        </h2>

        <div className="mb-1">
          <h3 className="font-semibold">
            1. Reduces Dependence on Groundwater
          </h3>
          <p className="text-justify">
            Recharge your borewells naturally and improve long-term yield.
          </p>
        </div>

        <div className="mb-1">
          <h3 className="font-semibold">2. Significant Cost Savings</h3>
          <p className="text-justify">
            Cut down tanker water expenses and lower operational costs.
          </p>
        </div>

        <div className="mb-1">
          <h3 className="font-semibold">3. Meets Mandatory Compliance</h3>
          <p className="text-justify">
            Fulfil CGWA, Pollution Control Board, Environmental Clearance (EC),
            and State Water Authority norms.
          </p>
        </div>

        <div className="mb-1">
          <h3 className="font-semibold">
            4. Supports Corporate Sustainability Goals
          </h3>
          <p className="text-justify">
            Enhances your ESG score, CSR initiatives, and green building ratings
            (IGBC/GRIHA).
          </p>
        </div>

        <div className="mb-1">
          <h3 className="font-semibold">
            5. Ensures Water Availability All Year
          </h3>
          <p className="text-justify">
            Harvested rainwater acts as a reliable backup resource, especially
            during summer shortages.
          </p>
        </div>

        <div className="mb-1">
          <h3 className="font-semibold">6. Reduces Soil Erosion & Flooding</h3>
          <p className="text-justify">
            Redirects excess runoff and prevents waterlogging inside industrial
            premises.
          </p>
        </div>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mb-2">Industries We Serve</h2>

        <p className="mb-1 text-justify">
          InRain provides customized RWH systems to multiple sectors, including:
        </p>

        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Manufacturing units</li>
          <li>Warehouses & logistics hubs</li>
          <li>Food & beverage industries</li>
          <li>Chemical plants</li>
          <li>Pharmaceuticals</li>
          <li>Textile & dyeing industries</li>
          <li>Automotive & engineering units</li>
          <li>Industrial parks & SEZs</li>
          <li>Corporate campuses</li>
        </ul>

        <p className="mb-2 text-justify">
          Each system is designed to match your water demand, regulatory
          requirements, and site layout.
        </p>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mb-2">
          Why InRain is the Trusted Partner for Industrial Rainwater Harvesting
        </h2>

        <div className="mb-1">
          <h3 className="font-semibold">1. Proven Expertise</h3>
          <p className="text-justify">
            Over 4000+ successful projects across India for leading industries
            and brands.
          </p>
        </div>

        <div className="mb-1">
          <h3 className="font-semibold">2. Government Approved Systems</h3>
          <p className="text-justify">
            All systems comply with CPWD, PWD, CGWA, and Smart City guidelines.
          </p>
        </div>

        <div className="mb-1">
          <h3 className="font-semibold">3. High-Performance Technology</h3>
          <p className="text-justify">
            Advanced filters, modular recharge units, and engineered solutions
            ensure long-term efficiency.
          </p>
        </div>

        <div className="mb-1">
          <h3 className="font-semibold">4. Customized Industrial Designs</h3>
          <p className="text-justify">
            Every site is different—our engineers create solutions that give
            maximum recharge output and minimum maintenance.
          </p>
        </div>

        <div className="mb-1">
          <h3 className="font-semibold">5. End-to-End Service</h3>
          <p className="text-justify">
            From survey to design, construction, documentation, and
            post-installation support—everything is handled by our team.
          </p>
        </div>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mb-2">
          Move Your Industry Toward a Water-Secure Future
        </h2>
        <p className="mb-2 text-justify">
          Investing in a rainwater harvesting system is not just an
          environmental decision—it’s a long-term operational strategy. With the
          right design and expert execution, industries can significantly
          improve water security, meet compliance requirements, and contribute
          positively to the environment.
        </p>
        <p className="mb-2 text-justify">
          InRain Construction Pvt. Ltd. is committed to helping industries adopt
          sustainable water practices with confidence and reliability.
        </p>

        <hr className="my-6" />
      </div>

      <Footer />
    </>
  );
};

export default RWHIndustries;
