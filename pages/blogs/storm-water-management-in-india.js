import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import {
  individualBLog4,
  sideBlogs1,
  sideBlogs10,
  sideBlogs11,
  sideBlogs2,
  sideBlogs3,
  sideBlogs5,
  sideBlogs6,
  sideBlogs7,
  sideBlogs8,
  sideBlogs9,
} from "../../components/Blogs/Blog";
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
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import PopUp from "@/components/popup";
import SideBlogs from "@/components/Blogs/SideBlogs";

const Blog4 = () => {
  const title =
    "Stormwater Management in India | InRain® Construction Pvt. Ltd.";
  const desc =
    "Explore the importance of stormwater management in India, including methods for effective stormwater recharge and its benefits. Learn about solutions like permeable pavements, rain gardens, and detention basins to mitigate flooding, preserve water quality, and support sustainable urban development.";
  const keyword =
    "Stormwater Management in India, Significance of Stormwater Management, Flood Mitigation, Water Quality Preservation, Permeable Pavements, Rain Gardens, Detention Basins, Infiltration Trenches, Urban Planning, Environmental Sustainability, India Stormwater Solutions";
  const canonical =
    "https://www.inrainconstruction.com/blogs/storm-water-management-in-india";
  const ogDescription =
    "Explore the importance of stormwater management in India, including methods for effective stormwater recharge and its benefits. Learn about solutions like permeable pavements, rain gardens, and detention basins to mitigate flooding, preserve water quality, and support sustainable urban development.";
  const ogUrl =
    "https://www.inrainconstruction.com/blogs/storm-water-management-in-india";
  const ogTitle =
    "Stormwater Management in India | InRain® Construction Pvt. Ltd.";
  const twittertitle =
    "Stormwater Management in India | InRain® Construction Pvt. Ltd.";
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
          / Stormwater Management in India
        </span>
      </div>
      <div className="m-5 md:m-10">
        {individualBLog4.map((blog) => {
          return (
            <div className="md:flex md:gap-14 md:justify-center">
              <div className="md:w-[70%]">
                <div>
                  <Link href={"https://www.inrainconstruction.com/"}>
                    <Image
                      className="w-full md:w-1/2"
                      src={blog4img}
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
                      In our rapidly urbanizing world,{" "}
                      <Link
                        href={
                          "https://www.inrainconstruction.com/storm-water-recharge-and-management"
                        }
                        className="text-blue-500 font-semibold"
                      >
                        Stormwater Management
                      </Link>{" "}
                      is a critical concern. With the increasing frequency and
                      intensity of storms due to climate change, effective
                      stormwater recharge and management are essential to
                      prevent flooding, maintain water quality, and sustain
                      ecosystems. This article delves into the various aspects
                      of stormwater recharge and management, from its
                      significance to best practices for implementation.
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading1}
                    </h3>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent1}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-10">
                    <h2 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading2}
                    </h2>
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

                  <div data-aos="zoom-in-up" className="mb-5 mt-10">
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

                  <div className="mb-5 mt-10">
                    <h4 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading5}
                    </h4>
                    <p className="text-[17px] text-justify mt-3 mb-3 md:text-lg">
                      {blog.BlogSubHeadingContent5}
                    </p>
                  </div>

                  <div className="mb-5 mt-10">
                    <h4 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading6}
                    </h4>
                    <p className="text-[17px] text-justify mt-3 mb-3 md:text-lg">
                      {blog.BlogSubHeadingContent6}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-10">
                    <h4 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading7}
                    </h4>
                    <div className="mt-3 md:ml-5  mb-3">
                      {blog.BlogSubHeadingContent7.map((content) => {
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

export default Blog4;
