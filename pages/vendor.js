import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import PopUp from "@/components/popup";
import React from "react";
import Head from "next/head";

const Vendor = () => {
  const title =
    "Franchise / Vendorship Opportunity – InRain Construction Pvt. Ltd.";
  const desc =
    "Join InRain Construction Pvt. Ltd. and grow with India's leading rainwater harvesting solution provider. We are expanding our network across India and inviting Franchise & Vendorship Partners to promote sustainable water management solutions.";
  const keyword =
    "Rainwater harvesting franchise, Rainwater harvesting dealership, Water harvesting business opportunity, Environmental franchise India, Rainwater harvesting vendor, Water management franchise, Sustainability business opportunity India";
  const canonical = "https://www.inrainconstruction.com/vendor";
  const ogUrl = "https://www.inrainconstruction.com/vendor";
  const ogTitle =
    "Franchise / Vendorship Opportunity – InRain Construction Pvt. Ltd.";
  const ogDescription =
    "Join InRain Construction Pvt. Ltd. and grow with India's leading rainwater harvesting solution provider. We are expanding our network across India and inviting Franchise & Vendorship Partners to promote sustainable water management solutions.";
  const twittertitle =
    "Franchise / Vendorship Opportunity – InRain Construction Pvt. Ltd.";
  const twitterdescription =
    "Join InRain Construction Pvt. Ltd. and grow with India's leading rainwater harvesting solution provider. We are expanding our network across India and inviting Franchise & Vendorship Partners to promote sustainable water management solutions.";

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
      <div className="py-5 px-5 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            Franchise / Vendorship Opportunity – InRain Construction Pvt. Ltd.
          </h1>
          <h2 className="py-1 mt-2 text-xl md:text-2xl bg-slate-600 rounded-2xl font-bold text-gray-100">
            Become Our Regional Partner in Rainwater Harvesting
          </h2>

          <p className="mt-3 text-gray-800 max-w-3xl mx-auto text-justify">
            Join InRain Construction Pvt. Ltd. and grow with India's leading
            rainwater harvesting solution provider. We are expanding our network
            across India and inviting Franchise & Vendorship Partners to promote
            sustainable water management solutions.
            <br />
            This is a zero-inventory, zero-technical-risk business opportunity
            where you generate leads and we handle the complete execution.
          </p>

          <section className="max-h-96 max-w-3xl border-2 m-auto mt-10 overflow-auto text-black p-2 rounded-2xl">
            <div>
              <h2 className="text-2xl font-bold bg-green-200 p-1 rounded-xl">
                Why Take Franchise/Vendorship in Rainwater Harvesting?
              </h2>
              <p className="text-sm text-justify mt-2">
                India is facing a rapidly growing water crisis. With declining
                groundwater levels, unpredictable rainfall, and increasing
                urbanization, the demand for rainwater harvesting solutions is
                rising across residential, commercial, and industrial sectors.
                <br />
                Partnering in a rainwater harvesting business is not just a
                profitable opportunity — it is also a sustainable and
                future-proof venture.
              </p>
            </div>
            <div className="mt-5 text-justify">
              <h3 className="text-xl font-semibold bg-sky-200 p-1 rounded-xl text-gray-800">
                Growing Water Shortage in India
              </h3>

              <ul className="mt-2 flex flex-col gap-2">
                <li className="font-semibold text-gray-700">
                  ✔ Groundwater levels are declining in most major cities
                </li>
                <li className="font-semibold text-gray-700">
                  ✔ Rapid urbanization reducing natural water recharge
                </li>
                <li className="font-semibold text-gray-700">
                  ✔ Increased demand from industries and residential societies
                </li>
                <li className="font-semibold text-gray-700">
                  ✔ Seasonal water tanker dependency increasing every year
                </li>
                <li className="font-semibold text-gray-700">
                  ✔ Government making rainwater harvesting mandatory in many
                  states
                </li>
                <li className="font-semibold text-gray-700">
                  ✔ Rising awareness about water conservation
                </li>
              </ul>
              <p className="text-sm mt-3">
                This growing crisis is creating continuous demand for rainwater
                harvesting solutions.
              </p>
            </div>
            <div className="mt-5 text-justify">
              <h3 className="text-xl font-semibold bg-sky-200 p-1 rounded-xl text-gray-800">
                High Demand Across Multiple Sectors
              </h3>
              <p className="text-sm mt-2">
                Rainwater harvesting is required in:
              </p>
              <ul className="mt-2 flex flex-col gap-2 list-disc list-inside">
                <li className="font-semibold text-gray-700">
                  Residential societies
                </li>
                <li className="font-semibold text-gray-700">
                  Builders & developers
                </li>
                <li className="font-semibold text-gray-700">
                  Factories & industries
                </li>
                <li className="font-semibold text-gray-700">
                  Schools & colleges
                </li>
                <li className="font-semibold text-gray-700">
                  Government buildings
                </li>
                <li className="font-semibold text-gray-700">Hospitals</li>
                <li className="font-semibold text-gray-700">
                  Commercial complexes
                </li>
              </ul>
              <p className="text-sm mt-3">
                This means multiple sources of business in every city.
              </p>
            </div>
            <div className="mt-5 text-justify">
              <h3 className="text-xl font-semibold bg-sky-200 p-1 rounded-xl text-gray-800">
                Future-Proof & Evergreen Industry
              </h3>
              <p className="text-sm mt-2">
                Unlike seasonal businesses, rainwater harvesting:
              </p>
              <ul className="mt-2 flex flex-col gap-2 list-disc list-inside">
                <li className="font-semibold text-gray-700">
                  Works in every region
                </li>
                <li className="font-semibold text-gray-700">
                  Required every year
                </li>
                <li className="font-semibold text-gray-700">
                  Increasing in demand
                </li>
                <li className="font-semibold text-gray-700">
                  Supported by government policies
                </li>
                <li className="font-semibold text-gray-700">
                  Driven by environmental needs
                </li>
              </ul>
              <p className="text-sm mt-3">
                This makes it a recession-resistant business.
              </p>
            </div>
          </section>

          <div className="py-10 px-5">
            <div className="max-w-7xl mx-auto space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 text-center">
                  Why Partner With InRain Construction Pvt. Ltd.?
                </h2>

                <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-7">
                  <li className="bg-sky-50 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition text-gray-700">
                    ✔ Established brand in rainwater harvesting
                  </li>
                  <li className="bg-sky-50 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition text-gray-700">
                    ✔ 4000+ successful projects executed
                  </li>
                  <li className="bg-sky-50 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition text-gray-700">
                    ✔ Complete technical & engineering support
                  </li>
                  <li className="bg-sky-50 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition text-gray-700">
                    ✔ High earning potential per project
                  </li>
                  <li className="bg-sky-50 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition text-gray-700">
                    ✔ No investment in inventory
                  </li>
                  <li className="bg-sky-50 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition text-gray-700">
                    ✔ Dedicated partner support team
                  </li>
                  <li className="bg-sky-50 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition text-gray-700">
                    ✔ Training & marketing assistance
                  </li>
                  <li className="bg-sky-50 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition text-gray-700">
                    ✔ Nationwide project execution capability
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-10 text-left">
                <div className="bg-green-100 p-8 rounded-2xl shadow-sm">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-5">
                    Your Role as Franchise / Vendor
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Identify potential clients in your region</li>
                    <li>• Connect us with decision makers</li>
                    <li>• Arrange meetings/site visits</li>
                    <li>• Assist in coordination</li>
                    <li>• Earn commission on every successful project</li>
                  </ul>
                </div>

                <div className="bg-green-100 p-8 rounded-2xl shadow-sm">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-5">
                    Our Responsibilities
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Site survey & feasibility study</li>
                    <li>• Design & engineering</li>
                    <li>• Proposal preparation</li>
                    <li>• Project execution</li>
                    <li>• Material supply</li>
                    <li>• Billing & documentation</li>
                    <li>• After-sales support</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800 text-center">
                  Who Can Apply?
                </h2>

                <ul className="grid grid-cols-2  lg:grid-cols-4 gap-6 mt-6">
                  <li className="bg-sky-100 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
                    Contractors
                  </li>
                  <li className="bg-sky-100 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
                    Civil Engineers
                  </li>
                  <li className="bg-sky-100 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
                    Architects
                  </li>
                  <li className="bg-sky-100 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
                    Consultants
                  </li>
                  <li className="bg-sky-100 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
                    Environmental Professionals
                  </li>
                  <li className="bg-sky-100 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
                    Real Estate Contractors
                  </li>
                  <li className="bg-sky-100 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
                    Business Development Professionals
                  </li>
                  <li className="bg-sky-100 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
                    Entrepreneurs
                  </li>
                </ul>
              </div>

              <div className="bg-blue-100 rounded-2xl p-10 text-center">
                <h2 className="text-3xl font-bold text-gray-800">
                  Earnings Potential
                </h2>

                <p className="text-lg text-gray-700 mt-4">
                  Earn{" "}
                  <span className="font-semibold text-blue-600">8% – 12%</span>{" "}
                  commission on every project
                </p>

                <p className="text-gray-600 mt-2">
                  Average project size: ₹2 Lakhs – ₹50 Lakhs
                </p>

                <p className="text-gray-600 mt-2 font-medium">
                  No limit on your earnings.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800 text-center">
                  Areas We Are Expanding
                </h2>

                <div className="flex flex-wrap justify-center gap-3 mt-8">
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">
                    Odisha
                  </span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">
                    Bhubaneswar
                  </span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">
                    Assam
                  </span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">
                    Kolkata
                  </span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">
                    Patna
                  </span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">
                    Gorakhpur
                  </span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">
                    Lucknow
                  </span>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800 text-center">
                  What Support You Will Get
                </h2>

                <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                  <li className="bg-amber-50 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
                    ✔ Sales Training
                  </li>
                  <li className="bg-amber-50 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
                    ✔ Technical Training
                  </li>
                  <li className="bg-amber-50 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
                    ✔ Marketing Materials
                  </li>
                  <li className="bg-amber-50 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
                    ✔ Proposal Support
                  </li>
                  <li className="bg-amber-50 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
                    ✔ Dedicated Coordinator
                  </li>
                  <li className="bg-amber-50 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
                    ✔ Lead Management System
                  </li>
                  <li className="bg-amber-50 font-semibold p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
                    ✔ Brand Authorization
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="">
            <h2 className="text-2xl font-semibold text-gray-800">
              Become Our Partner Today
            </h2>

            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfdNdlrH0mNlOnofxn6-XIQaqN0UipFLoew_g8-_CwCEIdRuA/viewform?usp=publish-editor"
              className="inline-block mt-5 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-md transition"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Vendor;
