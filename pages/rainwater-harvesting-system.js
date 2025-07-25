import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import service11 from "./../public/service11.jpg";
import harvesting11 from "./../public/services/harvesting7.jpg";
import logo from "./../public/logo.png";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import PopUp from "@/components/popup";
import Link from "next/link";
import { Button } from "@mui/material";
import axios from "axios";

const Service11 = () => {
  const title = "Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const desc =
    "Are you searching for a rainwater harvesting system in India? We are a Rainwater Harvesting Company with a strong presence all Over India that provides rainwater harvesting system services and consultants.";
  const keyword =
    "rainwater harvesting system, rainwater harvesting, rain harvesting system, Urban Water Sustainability, rainwater harvesting company, Water Conservation Techniques, Stormwater Runoff Control, Rainwater Harvesting System Services in India";
  const canonical =
    "https://www.inrainconstruction.com/rainwater-harvesting-system";
  const ogUrl =
    "https://www.inrainconstruction.com/rainwater-harvesting-system";
  const ogTitle =
    "Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Are you searching for a rainwater harvesting system in India? We are a Rainwater Harvesting Company with a strong presence all Over India that provides rainwater harvesting system services and consultants.";
  const twittertitle =
    "Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Are you searching for a rainwater harvesting system in India? We are a Rainwater Harvesting Company with a strong presence all Over India that provides rainwater harvesting system services and consultants.";

  const [myname, setMyname] = useState("");
  const [myemail, setMyemail] = useState("");
  const [mymobile, setMymobile] = useState("");
  const [mymessage, setMymessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const GoogleAds = "This is not from Google Ads";

  async function onFormSubmit(e) {
    if (!myname || !myemail || !mymobile || !mymessage) {
      alert("Please fill all the fields");
      return;
    }
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post("/api/signup", {
        myname,
        myemail,
        mymobile,
        mymessage,
        GoogleAds,
      });
      if (response.data.success) {
        setLoading(false);
        setShowNotification(true);
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  }

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
            src={service11}
            alt="Rainwater harvesting System"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
          <div className="absolute md:bottom-2 bottom-0 md:left-5 left-2">
            <p className="text-xs md:text-lg text-black">
              <Link href={"/"}>Home</Link> / Rainwater Harvesting System
            </p>
          </div>
        </div>

        {loading && (
          <div className="loader absolute md:top-[70%] top-[3200px] right-0 left-0 md:left-[45%] bottom-0"></div>
        )}
        {showNotification && (
          <div className="justify-center absolute items-center z-10 flex md:top-[70%] top-[3200px] right-0 left-0 bottom-0">
            <div className="notification1">
              <div className="notiglow1"></div>
              <div className="notiborderglow1"></div>
              <div className="notititle1">Thank you {myname}</div>
              <div className="notibody1">
                Our team will reach out to you shortly
              </div>
              <div className="notibody1 flex justify-center items-center">
                <Link href="/">
                  <Button variant="contained" size="small" color="success">
                    OK
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="m-5 md:grid md:grid-cols-2 md:justify-center md:gap-10 md:items-start">
          <div data-aos="zoom-in-up" className="text-left">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Rainwater Harvesting System
            </h1>

            <p className="text-[17px] text-justify md:text-lg mt-3">
              Water scarcity is a pressing global issue, and as populations
              continue to grow, it becomes imperative to explore alternative
              methods for water conservation. One such method gaining popularity
              is rainwater harvesting. This ancient practice has gained renewed
              attention in recent years due to its potential to mitigate water
              shortages, reduce strain on existing water sources, and promote
              sustainable water management. In this article, we will delve into
              the various aspects of rainwater harvesting systems, their
              benefits, and how they contribute to a more sustainable future.{" "}
            </p>

            <h2 className="text-2xl mt-5 md:text-3xl font-semibold">
              The Importance of Rainwater Harvesting
            </h2>
            <p className="text-[17px] text-justify md:text-lg mt-3">
              Rainwater is a precious resource that, if properly harnessed, can
              address water scarcity challenges faced by communities around the
              world.{" "}
              <Link
                href={"https://www.inrainwaterharvesting.com/"}
                className="text-green-600 hover:text-sky-500 font-semibold"
              >
                Rainwater harvesting
              </Link>{" "}
              offers several advantages over conventional water sources,
              including reduced reliance on municipal water supplies, lowered
              strain on groundwater reserves, and decreased{" "}
              <Link
                href={
                  "https://www.inrainconstruction.com/storm-water-recharge-and-management"
                }
                className="text-green-600 hover:text-sky-500 font-semibold"
              >
                storm water runoff
              </Link>{" "}
              that can lead to flooding and erosion. Additionally, rainwater is
              naturally soft and free from many contaminants found in other
              water sources, making it suitable for various non-potable uses
              such as irrigation, toilet flushing, and industrial processes.
            </p>

            <h3 className="text-2xl mt-5 md:text-3xl font-semibold">
              Components of a Rainwater Harvesting System
            </h3>
            <p className="text-[17px] text-justify md:text-lg mt-3">
              A rainwater harvesting system consists of several key components
              that work together to capture, store, and distribute rainwater.
              The primary components include: Catchment Surface: This can be the{" "}
              <Link
                href={
                  "https://www.inrainconstruction.com/roof-top-rainwater-harvesting-system-RRWHS-InRain"
                }
                className="text-green-600 hover:text-sky-500 font-semibold"
              >
                rooftop
              </Link>{" "}
              of a building, which acts as a surface to collect rainwater. The
              catchment surface should be made of materials that are safe and
              non-toxic for water storage. Polymer as strong as metal.
            </p>
            <ul className="list-disc m-5 text-[17px] text-justify md:text-lg">
              <li>
                <bold className="font-semibold">Gutters and Downspouts:</bold>{" "}
                These channels collect rainwater from the catchment surface and
                direct it into the storage system.
              </li>
              <li>
                <bold className="font-semibold">Leaf Screens and Filters:</bold>{" "}
                These prevent debris, leaves, and other contaminants from
                entering the storage system and clogging the pipes or tanks.
              </li>
              <li>
                <bold className="font-semibold">Storage Tanks:</bold> These are
                containers designed to hold and store the collected rainwater.
                Tanks can be above ground or underground, depending on space
                availability and local regulations.
              </li>
              <li>
                <bold className="font-semibold">First Flush Diverters:</bold>{" "}
                These devices ensure that the initial runoff, which may contain
                pollutants and debris, is diverted away from the storage system.
              </li>
              <li>
                <bold className="font-semibold">
                  Pumps and Distribution Systems:
                </bold>{" "}
                These components are used to extract and distribute the
                harvested rainwater for various uses, such as irrigation or
                indoor non-potable water needs.
              </li>
            </ul>

            <h3 className="text-2xl mt-5 md:text-3xl font-semibold">
              Benefits of Rainwater Harvesting
            </h3>
            <p className="text-[17px] text-justify md:text-lg mt-3">
              Implementing a{" "}
              <Link
                href={
                  "https://www.inrainconstruction.com/rainwater-harvesting-system-for-warehouse"
                }
                className="text-green-600 hover:text-sky-500 font-semibold"
              >
                Rainwater Harvesting System
              </Link>{" "}
              brings numerous benefits. Firstly, it reduces the strain on
              traditional water sources, such as rivers and groundwater, thereby
              ensuring their long-term sustainability. Secondly, rainwater
              harvesting helps mitigate the impact of urbanization by reducing
              stormwater runoff and the risk of localized flooding.
              Additionally, utilizing rainwater for non-potable uses like
              irrigation can result in significant cost savings for homeowners
              and businesses by offsetting the need for treated municipal water.
              <br></br>
              <br></br>
              Moreover, rainwater harvesting promotes self-sufficiency and
              resilience, particularly in regions prone to droughts or water
              restrictions. It empowers individuals and communities to take
              charge of their water supply and become less reliant on
              centralized infrastructure. Lastly, by reducing the demand for
              water from centralized sources, rainwater harvesting contributes
              to energy savings associated with water treatment and
              distribution.
            </p>

            <h3 className="text-2xl mt-5 md:text-3xl font-semibold">
              Considerations and Maintenance
            </h3>
            <p className="text-[17px] text-justify md:text-lg mt-3">
              When installing a{" "}
              <Link
                href={"/rainwater-harvesting-system-in-india"}
                className="text-green-600 hover:text-sky-500 font-semibold"
              >
                Rainwater Harvesting System,
              </Link>{" "}
              it is essential to consider factors such as local regulations, the
              size of the catchment area, and the intended uses of the harvested
              water. Regular maintenance, including cleaning gutters, screens,
              and filters, is crucial to ensure the system operates efficiently
              and the stored water remains clean and safe for its intended
              purposes.
            </p>
          </div>
          <div className="mt-5 flex flex-col items-center justify-center">
            <form className="form bg-gray-400 md:w-96" onSubmit={onFormSubmit}>
              <div className="flex justify-center mt-5">
                <Image
                  className="w-[100px]"
                  src={logo}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
              </div>
              <p className="form-heading mt-3 mb-3 text-black">Get In Touch</p>

              <div className="form-field">
                <input
                  placeholder="Name"
                  className="input-field"
                  type="text"
                  name="Name"
                  value={myname}
                  onChange={(e) => setMyname(e.target.value)}
                />
              </div>

              <div className="form-field">
                <input
                  placeholder="Email"
                  className="input-field"
                  type="email"
                  name="Email"
                  value={myemail}
                  onChange={(e) => setMyemail(e.target.value)}
                />
              </div>

              <div className="form-field">
                <input
                  placeholder="Mobile Number"
                  className="input-field"
                  type="tel"
                  name="Mobile_No"
                  value={mymobile}
                  onChange={(e) => setMymobile(e.target.value)}
                />
              </div>

              <div className="form-field">
                <textarea
                  placeholder="Message"
                  cols="30"
                  rows="3"
                  className="input-field"
                  name="message"
                  value={mymessage}
                  onChange={(e) => setMymessage(e.target.value)}
                ></textarea>
              </div>

              <div className="md:mt-2 md:mb-2">
                <input className="w-4 h-4 mr-2" type="checkbox" />
                <label className="text-black text-base">
                  Yes, I would like to receive communications by call / email
                  about Company's services.{" "}
                </label>
              </div>

              <button className="sendMessage-btn" type="submit">
                Send Message
              </button>
            </form>
            <Link href={"https://www.inrainconstruction.com/"}>
              <Image
                data-aos="zoom-in-up"
                className="w-full mt-10"
                src={harvesting11}
                alt="Rainwater Harvesting"
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

export default Service11;
