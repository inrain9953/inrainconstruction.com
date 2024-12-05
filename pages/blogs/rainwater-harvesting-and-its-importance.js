import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import {
  individualBLog7,
  sideBlogs1,
  sideBlogs10,
  sideBlogs2,
  sideBlogs3,
  sideBlogs4,
  sideBlogs5,
  sideBlogs6,
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
import blog10img from "../../public/blog10.png";
import PopUp from "@/components/popup";

const Blog7 = () => {
  const title =
    "Rainwater Harvesting and It's Importace: How InRain Rainwater Harvesting System is different from others?";
  const desc =
    "Discover the eco-friendly, cost-effective, and space-efficient InRain Rainwater Harvesting System. Our modular solutions offer easy installation, high percolation efficiency, minimal civil work, and superior groundwater recharge. Perfect for urban or rural setups, our systems save water, reduce flooding, and are scalable to meet your needs. Choose InRain for sustainable water management and a greener future.";
  const keyword =
    "Rainwater Harvesting and It's Importance, Water Conservation, Rainwater Harvesting, Commercial Buildings, Sustainable Water Management, Eco-Friendly Business Practices, Cost Effective, Municipal Water Reduction, Environmental Impact";
  const canonical =
    "https://www.inrainconstruction.com/blogs/rainwater-harvesting-and-its-importance";
  const ogDescription =
    "Discover the eco-friendly, cost-effective, and space-efficient InRain Rainwater Harvesting System. Our modular solutions offer easy installation, high percolation efficiency, minimal civil work, and superior groundwater recharge. Perfect for urban or rural setups, our systems save water, reduce flooding, and are scalable to meet your needs. Choose InRain for sustainable water management and a greener future.";
  const ogUrl =
    "https://www.inrainconstruction.com/blogs/rainwater-harvesting-and-its-importance";
  const ogTitle =
    "Rainwater Harvesting and It's Importace: How InRain Rainwater Harvesting System is different from others?";
  const twittertitle =
    "Rainwater Harvesting and It's Importace: How InRain Rainwater Harvesting System is different from others?";
  const twitterdescription =
    "Discover the eco-friendly, cost-effective, and space-efficient InRain Rainwater Harvesting System. Our modular solutions offer easy installation, high percolation efficiency, minimal civil work, and superior groundwater recharge. Perfect for urban or rural setups, our systems save water, reduce flooding, and are scalable to meet your needs. Choose InRain for sustainable water management and a greener future.";

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
          / Rainwater Harvesting and It's Importance: How InRain Rainwater Harvesting System is different from others?
        </span>
      </div>
      <div className="m-5 md:m-10">
        {individualBLog7.map((blog) => {
          return (
            <div className="md:flex md:gap-14 md:justify-center">
              <div className="md:w-[70%]">
                <div>
                  <Link href={"https://www.inrainconstruction.com/"}>
                    <Image
                      className="w-full md:w-1/2 h-80"
                      src={blog7img}
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
                    <p
                      className="text-[17px] text-justify md:text-lg mt-3 mb-3"
                      dangerouslySetInnerHTML={{ __html: blog.BlogMainContent }}
                    />
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <p className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading1}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h2 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading2}
                    </h2>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent2}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading3}
                    </h3>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      In areas where water is hard to come by,{" "}
                      <Link
                        className="text-blue-500 font-semibold"
                        href={
                          "https://www.inrainconstruction.com/rainwater-harvesting-system"
                        }
                      >
                        Rainwater Harvesting
                      </Link>{" "}
                      can be a real lifesaver. It provides a vital source of
                      water for homes, farms, and businesses. For communities
                      facing droughts or living in dry regions, this method
                      helps ensure they have the water they need to thrive.
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h4 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading4}
                    </h4>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent4}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h4 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading5}
                    </h4>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent5}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h5 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading6}
                    </h5>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent6}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h5 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading7}
                    </h5>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent7}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h5 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading8}
                    </h5>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent8}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h5 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading9}
                    </h5>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent9}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-10">
                    <h5 className="font-bold text-xl md:text-3xl">
                      Advantages of{" "}
                      <Link
                        className="text-blue-500 font-semibold"
                        href={
                          "https://www.inrainconstruction.com/modular-rainwater-harvesting"
                        }
                      >
                        Modular Rainwater Harvesting
                      </Link>{" "}
                      by InRain Construction Pvt. Ltd.
                    </h5>
                    <div className="mt-3 md:ml-5 mb-3">
                      {blog.BlogSubHeadingContent10.map((content) => {
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

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading11}
                    </h3>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-10">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading12}
                    </h3>
                    <div className="mt-3 md:ml-5 mb-3">
                      {blog.BlogSubHeadingContent12.map((content) => {
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
                      {blog.BlogSubHeading13}
                    </h3>
                    <div className="mt-3 md:ml-5 mb-3">
                      {blog.BlogSubHeadingContent13.map((content) => {
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
                        <p className="text-justify text-gray-500">
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
                        <p className="text-justify text-gray-500">
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
                        <p className="text-justify text-gray-500">
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
                        <p className="text-justify text-gray-500">
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
                        <p className="text-justify text-gray-500">
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
                        <p className="text-justify text-gray-500">
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
                        <p className="text-justify text-gray-500">
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

                {sideBlogs10.map((blog) => (
                  <div key={blog.id}>
                    <div className="md:mb-10 md:flex md:gap-4 md:items-center">
                      <div>
                        <Image
                          className="md:w-40"
                          src={blog10img}
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

export default Blog7;
