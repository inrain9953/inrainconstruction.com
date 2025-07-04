import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import {
  individualBLog2,
  sideBlogs1,
  sideBlogs10,
  sideBlogs11,
  sideBlogs3,
  sideBlogs4,
  sideBlogs5,
  sideBlogs6,
  sideBlogs7,
  sideBlogs8,
  sideBlogs9,
} from "../../components/Blogs/Blog";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import blog1img from "../../public/blog1.jpg";
import blog2img from "../../public/blog2.jpg";
import blog3img from "../../public/blog3.jpg";
import blog4img from "../../public/blog4.jpg";
import blog5img from "../../public/blog5.jpg";
import blog6img from "../../public/blog6.jpeg";
import blog7img from "../../public/blog7.webp";
import blog8img from "../../public/blog8.jpg";
import blog9img from "../../public/blog9.jpg";
import blog10img from "../../public/blog10.png";
import blog11img from "@/public/blog11.jpg";
import PopUp from "@/components/popup";
import SideBlogs from "@/components/Blogs/SideBlogs";

const Blog2 = () => {
  const title =
    "Advancing Sustainability with Modular Rainwater Harvesting | InRain® Construction Pvt. Ltd.";
  const desc =
    "Explore the advantages of Modular Rainwater Harvesting Systems for sustainable water management. Learn how these space-efficient, quick-to-install systems offer high recharge capacity, low maintenance, and enhanced safety, making them an ideal solution for a greener future.";
  const keyword =
    "Advancing Sustainability with Modular Rainwater Harvesting, Modular Rainwater Harvesting System, Modular Rainwater Harvesting System Benefits, Sustainable Water Management, Rainwater Collection, Space-Efficient Water Systems, Low Maintenance Rainwater Solutions, InRain Construction Pvt. Ltd., Environmental Responsibility, Quick Installation, High Recharge Capacity";
  const canonical =
    "https://www.inrainconstruction.com/blogs/advancing-sustainability-with-modular-rainwater-harvesting-system";
  const ogDescription =
    "Explore the advantages of Modular Rainwater Harvesting Systems for sustainable water management. Learn how these space-efficient, quick-to-install systems offer high recharge capacity, low maintenance, and enhanced safety, making them an ideal solution for a greener future.";
  const ogUrl =
    "https://www.inrainconstruction.com/blogs/advancing-sustainability-with-modular-rainwater-harvesting-system";
  const ogTitle =
    "Advancing Sustainability with Modular Rainwater Harvesting | InRain® Construction Pvt. Ltd.";
  const twittertitle =
    "Advancing Sustainability with Modular Rainwater Harvesting | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Discover innovative rainwater harvesting and water management solutions with InRain Construction. Learn about sustainable practices like bioswales and box-type systems to conserve our natural resources.";

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
      <div className="m-5 md:m-10 bg-gray-500 rounded-xl p-2">
        <span className="text-xs md:text-lg text-black font-semibold">
          <Link className="hover:text-white" href={"/"}>
            Home
          </Link>{" "}
          /{" "}
          <Link className="hover:text-white" href={"/blogs"}>
            Blogs
          </Link>{" "}
          / Advancing Sustainability with Modular Rainwater Harvesting
        </span>
      </div>
      <div className="m-5 md:m-10">
        {individualBLog2.map((blog) => {
          return (
            <div className="md:flex md:gap-14 md:justify-center">
              <div className="md:w-[70%]">
                <div>
                  <Link href={"https://www.inrainconstruction.com/"}>
                    <Image
                      className="w-full md:w-1/2"
                      src={blog2img}
                      alt="img"
                      loading="eager"
                      priority={true}
                      unoptimized={true}
                    />
                  </Link>

                  <div data-aos="zoom-in-up" className="mt-5">
                    <h1 className="text-3xl md:text-4xl font-semibold">
                      {blog.BlogHead}
                    </h1>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogMainContent}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h2 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading1}
                    </h2>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      Utilizing modular technology, a{" "}
                      <Link
                        className="text-blue-500 font-semibold"
                        href={
                          "https://www.inrainconstruction.com/modular-rainwater-harvesting"
                        }
                      >
                        Modular Rainwater Harvesting System
                      </Link>{" "}
                      effectively stores and reuses rainfall. It's a progressive
                      strategy that tackles the need for plentiful water
                      resources in a world where water scarcity is becoming more
                      and more of a problem. This technique makes use of strong
                      polymer-based structures that are comparable in strength
                      to conventional metal systems.
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-10">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading2}
                    </h3>
                    <div className="mt-3 md:ml-5 mb-3">
                      {blog.BlogSubHeadingContent2.map((content) => {
                        return (
                          <div className="mb-3">
                            <h4 className="text-[17px] md:text-xl font-semibold">
                              {content.head}
                            </h4>
                            <p className="text-[17px] text-justify md:text-lg">
                              {content.para}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-10">
                    <h4 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading3}
                    </h4>
                    <div className="mt-3 mb-3">
                      {blog.BlogSubHeadingContent3.map((content) => {
                        return (
                          <div className="mb-3">
                            <p className="text-[17px] text-justify md:text-lg">
                              {content.para}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block md:w-[30%]">
                <SideBlogs />
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Blog2;
