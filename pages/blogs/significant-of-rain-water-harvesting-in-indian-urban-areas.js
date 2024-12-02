import React from "react";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import {
  individualBLog10,
  sideBlogs1,
  sideBlogs2,
  sideBlogs3,
  sideBlogs4,
  sideBlogs5,
  sideBlogs6,
  sideBlogs7,
  sideBlogs8,
  sideBlogs9,
} from "@/components/Blogs/Blog";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import blog7img from "../../public/blog7.webp";
import blog1img from "../../public/blog1.jpg";
import blog2img from "../../public/blog2.jpg";
import blog3img from "../../public/blog3.jpg";
import blog4img from "../../public/blog4.jpg";
import blog5img from "../../public/blog5.jpg";
import blog6img from "../../public/blog6.jpeg";
import blog8img from "../../public/blog8.jpg";
import blog9img from "../../public/blog9.jpg";
import blog10img from "../../public/blog10.png"
import PopUp from "@/components/popup";

const Blog10 = () => {
  const title =
    "Significant of Rain Water Harvesting in Indian Urban Areas | Groundwater Recharge | InRain® Construction Pvt. Ltd.";
  const desc =
    "Discover the significance of Rainwater Harvesting Systems in Indian urban areas. Learn how this sustainable solution addresses water scarcity, groundwater recharge, flood reduction, and climate change adaptation while promoting eco-friendly urban development.";
  const keyword =
    "Rain Water Harvesting in Indian Urban Areas, groundwater recharge, Indian urban areas, Rainwater Harvesting System, water scarcity solutions, urban flood reduction, cost-effective water supply, conservation of freshwater, sustainable urban development, rainwater management, climate change adaptation, eco-friendly water solutions";
  const canonical =
    "https://www.inrainconstruction.com/blogs/significant-of-rain-water-harvesting-in-indian-urban-areas";
  const ogDescription =
    "Discover the significance of Rainwater Harvesting Systems in Indian urban areas. Learn how this sustainable solution addresses water scarcity, groundwater recharge, flood reduction, and climate change adaptation while promoting eco-friendly urban development.";
  const ogUrl =
    "https://www.inrainconstruction.com/blogs/significant-of-rain-water-harvesting-in-indian-urban-areas";
  const ogTitle =
    "Significant of Rain Water Harvesting in Indian Urban Areas | Groundwater Recharge | InRain® Construction Pvt. Ltd.";
  const twittertitle =
    "Significant of Rain Water Harvesting in Indian Urban Areas | Groundwater Recharge | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Discover the significance of Rainwater Harvesting Systems in Indian urban areas. Learn how this sustainable solution addresses water scarcity, groundwater recharge, flood reduction, and climate change adaptation while promoting eco-friendly urban development.";

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

      <div className="m-5 md:m-10">
        {individualBLog10.map((blog) => {
          return (
            <div className="md:flex md:gap-14 md:justify-center">
              <div className="md:w-[70%]">
                <div>
                  <Link href={"https://www.inrainconstruction.com/"}>
                    <Image
                      className="w-full md:w-1/2 h-80"
                      src={blog10img}
                      alt="Significant of Rain Water Harvesting in Indian Urban Areas"
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
                      <Link
                        className="text-blue-500 hover:text-green-500 font-semibold"
                        href={"https://www.inrainconstruction.com/"}
                      >
                        Rainwater Harvesting System
                      </Link>{" "}
                      is of extreme importance for Indian urban areas due to
                      quite a lot of pressing environmental, social and economic
                      challenges. the key reasons why rainwater harvesting is
                      significant given bellow:
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

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h2 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading2}
                    </h2>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      <Link
                        className="text-blue-500 hover:text-green-500 font-semibold"
                        href={
                          "https://www.inrainconstruction.com/ground-water-recharge-system-for-industries"
                        }
                      >
                        Groundwater
                      </Link>{" "}
                      is the primary source of drinking water for the urban
                      areas. Day by day pollution is increasing and over
                      withdraw are the main reason of down the ground water
                      levels.{" "}
                      <bold className="font-semibold">
                        The rainwater harvesting system is a best way to
                        recharge the ground water and increase the water level,
                      </bold>{" "}
                      this is very helpful to collect the water and save the
                      natural resources of water.
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading3}
                    </h3>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent3}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading4}
                    </h3>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      <Link
                        className="text-blue-500 hover:text-green-500 font-semibold"
                        href={
                          "https://www.inrainconstruction.com/rainwater-harvesting-system"
                        }
                      >
                        Rainwater Harvesting System
                      </Link>{" "}
                      is an affordable method for businesses and houses in the
                      urban areas for secure a dependable water source.
                      Rainwater harvesting system is cheaper than large
                      maintenance and centralized water supply system for our
                      building.{" "}
                      <bold className="font-semibold">
                        The rainwater harvesting system is one-time investment.
                        For making a rainwater system we required a storage
                        tank, pipes, filter etc.
                      </bold>{" "}
                      The water will be collecting from rainwater harvesting
                      system is very clean and good for health, and cleaner than
                      from rivers and lakes, river’s water is polluted and
                      harmful for health. Thus the reason is the{" "}
                      <bold className="font-semibold">
                        rainwater harvesting system is a cost-effective option
                        for urban areas.
                      </bold>
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading5}
                    </h3>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      The{" "}
                      <bold className="font-semibold">
                        rainwater harvesting system is the only way to reduces
                        dependence on freshwater sources
                      </bold>{" "}
                      such as lakes, rivers. This is especially important in
                      areas where resources for getting water are limited or
                      endangered. By using rain water harvesting system, they
                      are save water for their next generation. So that our
                      coming generation also get fresh water.
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading6}
                    </h3>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent6}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading7}
                    </h3>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent7}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading8}
                    </h3>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent8}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading9}
                    </h3>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent9}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading10}
                    </h3>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent10}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading11}
                    </h3>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent11}
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden md:block md:w-[30%]">
                {sideBlogs1.map((blog) => (
                  <div key={blog.id}>
                    <div className="md:mb-10 md:flex md:gap-4 md:items-center">
                      <div>
                        <Image
                          className="md:w-40"
                          src={blog1img}
                          alt="img"
                          loading="eager"
                          priority={true}
                          unoptimized={true}
                        />
                      </div>
                      <div>
                        <p className="text-left text-gray-500">
                          {blog.BlogDate}
                        </p>
                        <Link href={blog.BlogLink}>
                          <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                            {blog.BlogHead}
                          </h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {sideBlogs2.map((blog) => (
                  <div key={blog.id}>
                    <div className="md:mb-10 md:flex md:gap-4 md:items-center">
                      <div>
                        <Image
                          className="md:w-40"
                          src={blog2img}
                          alt="img"
                          loading="eager"
                          priority={true}
                          unoptimized={true}
                        />
                      </div>
                      <div>
                        <p className="text-left text-gray-500">
                          {blog.BlogDate}
                        </p>
                        <Link href={blog.BlogLink}>
                          <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                            {blog.BlogHead}
                          </h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {sideBlogs3.map((blog) => (
                  <div key={blog.id}>
                    <div className="md:mb-10 md:flex md:gap-4 md:items-center">
                      <div>
                        <Image
                          className="md:w-40"
                          src={blog3img}
                          alt="img"
                          loading="eager"
                          priority={true}
                          unoptimized={true}
                        />
                      </div>
                      <div>
                        <p className="text-left text-gray-500">
                          {blog.BlogDate}
                        </p>
                        <Link href={blog.BlogLink}>
                          <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                            {blog.BlogHead}
                          </h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {sideBlogs4.map((blog) => (
                  <div key={blog.id}>
                    <div className="md:mb-10 md:flex md:gap-4 md:items-center">
                      <div>
                        <Image
                          className="md:w-40"
                          src={blog4img}
                          alt="img"
                          loading="eager"
                          priority={true}
                          unoptimized={true}
                        />
                      </div>
                      <div>
                        <p className="text-left text-gray-500">
                          {blog.BlogDate}
                        </p>
                        <Link href={blog.BlogLink}>
                          <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                            {blog.BlogHead}
                          </h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {sideBlogs5.map((blog) => (
                  <div key={blog.id}>
                    <div className="md:mb-10 md:flex md:gap-4 md:items-center">
                      <div>
                        <Image
                          className="md:w-40"
                          src={blog5img}
                          alt="img"
                          loading="eager"
                          priority={true}
                          unoptimized={true}
                        />
                      </div>
                      <div>
                        <p className="text-left text-gray-500">
                          {blog.BlogDate}
                        </p>
                        <Link href={blog.BlogLink}>
                          <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                            {blog.BlogHead}
                          </h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {sideBlogs6.map((blog) => (
                  <div key={blog.id}>
                    <div className="md:mb-10 md:flex md:gap-4 md:items-center">
                      <div>
                        <Image
                          className="md:w-40"
                          src={blog6img}
                          alt="img"
                          loading="eager"
                          priority={true}
                          unoptimized={true}
                        />
                      </div>
                      <div>
                        <p className="text-left text-gray-500">
                          {blog.BlogDate}
                        </p>
                        <Link href={blog.BlogLink}>
                          <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                            {blog.BlogHead}
                          </h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {sideBlogs7.map((blog) => (
                  <div key={blog.id}>
                    <div className="md:mb-10 md:flex md:gap-4 md:items-center">
                      <div>
                        <Image
                          className="md:w-40"
                          src={blog7img}
                          alt="img"
                          loading="eager"
                          priority={true}
                          unoptimized={true}
                        />
                      </div>
                      <div>
                        <p className="text-left text-gray-500">
                          {blog.BlogDate}
                        </p>
                        <Link href={blog.BlogLink}>
                          <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                            {blog.BlogHead}
                          </h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {sideBlogs8.map((blog) => (
                  <div key={blog.id}>
                    <div className="md:mb-10 md:flex md:gap-4 md:items-center">
                      <div>
                        <Image
                          className="md:w-40"
                          src={blog8img}
                          alt="img"
                          loading="eager"
                          priority={true}
                          unoptimized={true}
                        />
                      </div>
                      <div>
                        <p className="text-left text-gray-500">
                          {blog.BlogDate}
                        </p>
                        <Link href={blog.BlogLink}>
                          <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                            {blog.BlogHead}
                          </h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {sideBlogs9.map((blog) => (
                  <div key={blog.id}>
                    <div className="md:mb-10 md:flex md:gap-4 md:items-center">
                      <div>
                        <Image
                          className="md:w-40"
                          src={blog9img}
                          alt="img"
                          loading="eager"
                          priority={true}
                          unoptimized={true}
                        />
                      </div>
                      <div>
                        <p className="text-left text-gray-500">
                          {blog.BlogDate}
                        </p>
                        <Link href={blog.BlogLink}>
                          <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                            {blog.BlogHead}
                          </h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Blog10;
