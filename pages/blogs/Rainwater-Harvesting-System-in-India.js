import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import blog6img from "../../public/blog6.jpeg";
import blog1img from "../../public/blog1.jpg";
import blog2img from "../../public/blog2.jpg";
import blog3img from "../../public/blog3.jpg";
import blog4img from "../../public/blog4.jpg";
import blog5img from "../../public/blog5.jpg";
import blog7img from "../../public/blog7.webp";
import {
  individualBLog6,
  sideBlogs1,
  sideBlogs2,
  sideBlogs3,
  sideBlogs4,
  sideBlogs5,
  sideBlogs6,
} from "@/components/Blogs/Blog";
import PopUp from "@/components/popup";

const Blog6 = () => {
  const title = "Rainwater Harvesting System in India";
  const desc =
    "Discover how rainwater harvesting systems can address water scarcity in India. Explore tailored solutions for businesses, environmentalists, and wealthy homeowners that ensure sustainability, cost savings, and water security. Learn about the benefits and steps for implementing a customized rainwater harvesting system to support a greener future.";
  const keyword =
    "Rainwater Harvesting System in India, Rainwater Harvesting System, Sustainable Living India, Water Conservation for Businesses, Rainwater Harvesting for Wealthy Homes, Environmental Water Solutions, Eco-Friendly Water Management, Custom Rainwater Harvesting, Rainwater Storage and Distribution, Modular Rainwater Harvesting System, Cost-Effective Water Solutions India, Rainwater Harvesting Installation India";
  const canonical =
    "https://www.inrainconstruction.com/blogs/rainwater-harvesting-system-in-india";
  const ogDescription =
    "Discover how rainwater harvesting systems can address water scarcity in India. Explore tailored solutions for businesses, environmentalists, and wealthy homeowners that ensure sustainability, cost savings, and water security. Learn about the benefits and steps for implementing a customized rainwater harvesting system to support a greener future.";
  const ogUrl =
    "https://www.inrainconstruction.com/blogs/rainwater-harvesting-system-in-india";
  const ogTitle = "Rainwater Harvesting System in India";
  const twittertitle =
    "Rainwater Harvesting System: Supercharge Your Life to Sustainable Living";
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
      <div className="m-5 md:m-10">
        {individualBLog6.map((blog) => {
          return (
            <div className="md:flex md:gap-14 md:justify-center">
              <div className="md:w-[70%]">
                <div>
                  <Image className="w-full md:w-1/2" src={blog6img} alt="img" />

                  <div data-aos="zoom-in-up" className="mt-5">
                    <h1 className="text-3xl md:text-4xl font-semibold">
                      {blog.BlogHead}
                    </h1>
                    <p className="text-[17px] md:text-lg mt-3 mb-3">
                      {blog.BlogMainContent}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading1}
                    </h3>
                    <p className="text-[17px] md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent1}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading2}
                    </h3>
                    <p className="text-[17px] md:text-lg mt-3 mb-3">
                      Rainwater harvesting collects and stores rain for future
                      use. This practice has been employed for centuries and is
                      gaining renewed attention as a sustainable water
                      management strategy. The significance of{" "}
                      <Link
                        className="text-blue-500 font-semibold"
                        href={
                          "https://www.inrainconstruction.com/rainwater-harvesting-system"
                        }
                      >
                        Rainwater Harvesting
                      </Link>{" "}
                      lies in its potential to alleviate water shortages, reduce
                      reliance on conventional water sources, and promote
                      sustainable living. By capturing and utilizing rainwater,
                      communities can decrease the pressure on groundwater
                      resources, mitigate flooding, and enhance water security.
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading3}
                    </h3>
                    <p className="text-[17px] md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent3}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading4}
                    </h3>
                    <p className="text-[17px] md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent4}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading5}
                    </h3>
                    <p className="text-[17px] md:text-lg mt-3 mb-3">
                      <Link
                        className="text-blue-500 font-semibold"
                        href={
                          "https://www.inrainconstruction.com/Rainwater-Harvesting-System-for-Roof-Top---Effective-Water-Solutions"
                        }
                      >
                        Rooftop Rainwater Harvesting
                      </Link>{" "}
                      captures rain directly from the roof, storing it in tanks
                      or directing it to recharge systems. It’s cost-effective
                      and enhances local groundwater levels when properly
                      implemented. This system typically includes gutters,
                      downspouts, and filters to remove debris. The collected
                      water can be used for irrigation, flushing toilets, or
                      other non-potable purposes.
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading6}
                    </h3>
                    <p className="text-[17px] md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent6}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-10">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading7}
                    </h3>
                    <div className="mt-3 md:ml-5 mb-3">
                      {blog.BlogSubHeadingContent7.map((content) => {
                        return (
                          <div className="mb-3">
                            <h4 className="text-[17px] md:text-xl font-semibold">
                              {content.head}
                            </h4>
                            <p className="text-[17px] md:text-lg">
                              {content.para}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading8}
                    </h3>
                    <p className="text-[17px] md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent8}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5">
                    <div className="mt-3 md:ml-5 mb-3">
                      {blog.BlogSubHeadingContent9.map((content) => {
                        return (
                          <div className="mb-3">
                            <h4 className="text-[17px] md:text-xl font-semibold">
                              {content.head}
                            </h4>
                            <p className="text-[17px] md:text-lg">
                              {content.para}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading10}
                    </h3>
                    <p className="text-[17px] md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent10}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5">
                    <div className="mt-3 md:ml-5  mb-3">
                      {blog.BlogSubHeadingContent11.map((content) => {
                        return (
                          <div className="mb-3">
                            <h4 className="text-[17px] md:text-xl font-semibold">
                              {content.head}
                            </h4>
                            <p className="text-[17px] md:text-lg">
                              {content.para}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <h3
                    data-aos="zoom-in-up"
                    className="font-bold text-xl md:text-3xl"
                  >
                    {blog.BlogSubHeading12}
                  </h3>
                  <p
                    data-aos="zoom-in-up"
                    className="text-[17px] mt-3 md:ml-5 mb-3 md:text-lg"
                  >
                    {blog.BlogSubHeadingContent12}
                  </p>
                </div>
              </div>

              <div className="hidden md:block md:w-[30%]">
                {sideBlogs1.map((blog) => (
                  <div key={blog.id}>
                    <div className="md:mb-10 md:flex md:gap-4 md:items-center">
                      <div>
                        <Image className="md:w-40" src={blog1img} alt="img" />
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
                        <Image className="md:w-40" src={blog2img} alt="img" />
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
                        <Image className="md:w-40" src={blog3img} alt="img" />
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
                        <Image className="md:w-40" src={blog4img} alt="img" />
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
                        <Image className="md:w-40" src={blog5img} alt="img" />
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
                        <Image className="md:w-40" src={blog6img} alt="img" />
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

export default Blog6;
