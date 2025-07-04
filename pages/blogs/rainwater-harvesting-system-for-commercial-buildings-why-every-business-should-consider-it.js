import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import {
  individualBLog3,
  sideBlogs1,
  sideBlogs10,
  sideBlogs11,
  sideBlogs2,
  sideBlogs4,
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

const Blog3 = () => {
  const title =
    "Rainwater Harvesting for Commercial Buildings: Why Every Business Should Consider It";
  const desc =
    "Discover the benefits of rainwater harvesting for commercial buildings. Learn how adopting this sustainable practice can reduce costs, enhance your business's eco-friendly image, and contribute to community well-being. Explore how Inrain Construction can help with expert rainwater harvesting installations.";
  const keyword =
    "Rainwater Harvesting for Commercial Buildings, Why Should Businesses Consider Rainwater Harvesting, Rainwater Harvesting, Commercial Buildings, Sustainable Water Management, Eco-Friendly Business Practices, Cost Savings, Municipal Water Reduction, Environmental Impact";
  const canonical =
    "https://www.inrainconstruction.com/blogs/rainwater-harvesting-system-for-commercial-buildings-why-every-business-should-consider-it";
  const ogDescription =
    "Discover the benefits of rainwater harvesting for commercial buildings. Learn how adopting this sustainable practice can reduce costs, enhance your business's eco-friendly image, and contribute to community well-being. Explore how Inrain Construction can help with expert rainwater harvesting installations.";
  const ogUrl =
    "https://www.inrainconstruction.com/blogs/rainwater-harvesting-system-for-commercial-buildings-why-every-business-should-consider-it";
  const ogTitle =
    "Rainwater Harvesting for Commercial Buildings: Why Every Business Should Consider It";
  const twittertitle =
    "Rainwater Harvesting for Commercial Buildings: Why Every Business Should Consider It";
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
          / Rainwater Harvesting for Commercial Buildings: Why Every Business
          Should Consider It
        </span>
      </div>
      <div className="m-5 md:m-10">
        {individualBLog3.map((blog) => {
          return (
            <div className="md:flex md:gap-14 md:justify-center">
              <div className="md:w-[70%]">
                <div>
                  <Link href={"https://www.inrainconstruction.com/"}>
                    <Image
                      className="w-full md:w-1/2"
                      src={blog3img}
                      alt="rainwater harvest"
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
                      Businesses are continually looking for creative methods to
                      reduce their environmental impact in their search for
                      sustainability. Rainwater harvesting in commercial
                      buildings is one such strategy that is gaining popularity.
                      We'll explore the many benefits of adopting this
                      environmentally beneficial practice in this article and
                      introduce you to Inrain Construction, a top company for
                      installing{" "}
                      <Link
                        className="text-blue-500 font-semibold"
                        href={
                          "https://www.inrainconstruction.com/rainwater-harvesting-system"
                        }
                      >
                        Rainwater Harvesting Systems.
                      </Link>
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

                  <div data-aos="zoom-in-up" className="mb-5 mt-10">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading4}
                    </h3>
                    <div className="mt-3  mb-3">
                      {blog.BlogSubHeadingContent4.map((content) => {
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

export default Blog3;
