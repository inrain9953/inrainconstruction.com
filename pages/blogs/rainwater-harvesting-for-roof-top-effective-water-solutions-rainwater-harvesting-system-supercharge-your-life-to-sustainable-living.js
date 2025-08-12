import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import { individualBLog5 } from "../../components/Blogs/Blog";
import blog5img from "../../public/blog5.jpg";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import PopUp from "@/components/popup";
import SideBlogs from "@/components/Blogs/SideBlogs";

const Blog5 = () => {
  const title =
    "Rainwater Harvesting System for Roof Top-Effective Water Solutions | InRain® Construction Pvt. Ltd.";
  const desc =
    "Learn about Roof Top Rainwater Harvesting Systems, a sustainable solution for water scarcity. Discover how this system collects, filters, and stores rainwater from rooftops, offering benefits such as cost savings, reduced flooding, and environmental responsibility. Find out how to install and maintain these systems effectively.";
  const keyword =
    "Rainwater Harvesting System for Roof Top, Understanding Roof Top Rainwater Harvesting System, Rainwater Harvesting System in India, Sustainable Living India, Water Conservation for Businesses, Rainwater Harvesting for Wealthy Homes, Environmental Water Solutions, Eco-Friendly Water Management, Custom Rainwater Harvesting, Rainwater Storage and Distribution, Cost-Effective Water Solutions India, Rainwater Harvesting Installation India";
  const canonical =
    "https://www.inrainconstruction.com/blogs/rainwater-harvesting-for-roof-top-effective-water-solutions-rainwater-harvesting-system-supercharge-your-life-to-sustainable-living";
  const ogDescription =
    "Learn about Roof Top Rainwater Harvesting Systems, a sustainable solution for water scarcity. Discover how this system collects, filters, and stores rainwater from rooftops, offering benefits such as cost savings, reduced flooding, and environmental responsibility. Find out how to install and maintain these systems effectively.";
  const ogUrl =
    "https://www.inrainconstruction.com/blogs/rainwater-harvesting-for-roof-top-effective-water-solutions-rainwater-harvesting-system-supercharge-your-life-to-sustainable-living";
  const ogTitle =
    "Rainwater Harvesting System for Roof Top-Effective Water Solutions | InRain® Construction Pvt. Ltd.";
  const twittertitle =
    "Rainwater Harvesting System for Roof Top-Effective Water Solutions | InRain® Construction Pvt. Ltd.";
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
          / Rainwater Harvesting System for Roof Top - Effective Water Solutions
        </span>
      </div>
      <div className="m-5 md:m-10">
        {individualBLog5.map((blog) => {
          return (
            <div className="md:flex md:gap-14 md:justify-center">
              <div className="md:w-[70%]">
                <div>
                  <Link href={"/https://www.inrainconstruction.com/"}>
                    <Image
                      className="w-full md:w-1/2"
                      src={blog5img}
                      alt="img"
                      loading="eager"
                      priority={true}
                      unoptimized={true}
                    />
                  </Link>

                  <div data-aos="fade-up" className="mt-5">
                    <h1 className="text-3xl md:text-4xl font-semibold">
                      {blog.BlogHead}
                    </h1>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogMainContent}
                    </p>
                  </div>

                  <div data-aos="fade-up" className="mb-5 mt-5">
                    <h2 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading1}
                    </h2>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      <Link
                        className="text-blue-600 font-semibold"
                        href={
                          "https://www.inrainconstruction.com/Rainwater-Harvesting-System-for-Roof-Top---Effective-Water-Solutions"
                        }
                      >
                        The RoofTop Rainwater Harvesting System
                      </Link>{" "}
                      is a method of collecting and storing rainwater that falls
                      on the roof of a building. This harvested rainwater is
                      then utilized for various purposes, reducing the
                      dependence on conventional water sources. The system
                      consists of collecting rainwater from the roof, filtering
                      it, and storing it in tanks or reservoirs. The stored
                      water can be used for domestic, agricultural, or
                      industrial purposes.
                    </p>
                  </div>

                  <div data-aos="fade-up" className="mb-5 mt-10">
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

                  <div data-aos="fade-up" className="mb-5 mt-10">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading3}
                    </h3>
                    <div className="mt-3 md:ml-5 mb-3">
                      {blog.BlogSubHeadingContent3.map((content) => {
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

                  <div data-aos="fade-up" className="mb-5 mt-10">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading4}
                    </h3>
                    <div className="mt-3 md:ml-5  mb-3">
                      {blog.BlogSubHeadingContent4.map((content) => {
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

                  <div data-aos="fade-up" className="mb-5 mt-10">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading5}
                    </h3>
                    <p className="text-[17px] text-justify mt-3 mb-3 md:text-lg">
                      {blog.BlogSubHeadingContent5}
                    </p>
                  </div>

                  <div data-aos="fade-up" className="mb-5 mt-10">
                    <h4 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading6}
                    </h4>
                    <div className="mt-3 md:ml-5  mb-3">
                      {blog.BlogSubHeadingContent6.map((content) => {
                        return (
                          <div className="mb-3">
                            <h5 className="text-[17px] md:text-xl font-semibold">
                              {content.head}
                            </h5>
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

export default Blog5;
