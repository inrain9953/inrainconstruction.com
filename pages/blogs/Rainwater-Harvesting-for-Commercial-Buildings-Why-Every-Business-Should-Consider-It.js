import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import {
  individualBLog3,
  sideBlogs1,
  sideBlogs2,
  sideBlogs4,
  sideBlogs5,
  sideBlogs6,
  sideBlogs7,
} from "../../components/Blogs/Blog";
import blog1img from "../../public/blog1.jpg";
import blog2img from "../../public/blog2.jpg";
import blog3img from "../../public/blog3.jpg";
import blog4img from "../../public/blog4.jpg";
import blog5img from "../../public/blog5.jpg";
import blog6img from "../../public/blog6.jpeg";
import blog7img from "../../public/blog7.webp";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import PopUp from "@/components/popup";

const Blog3 = () => {
  const title =
    "Rainwater Harvesting for Commercial Buildings: Why Every Business Should Consider It";
  const desc =
    "Discover the benefits of rainwater harvesting for commercial buildings. Learn how adopting this sustainable practice can reduce costs, enhance your business's eco-friendly image, and contribute to community well-being. Explore how Inrain Construction can help with expert rainwater harvesting installations.";
  const keyword =
    "Rainwater Harvesting, Commercial Buildings, Sustainable Water Management, Inrain Construction, Eco-Friendly Business Practices, Cost Savings, Municipal Water Reduction, Environmental Impact";
  const canonical =
    "https://www.inrainconstruction.com/blogs/Rainwater-Harvesting-for-Commercial-Buildings-Why-Every-Business-Should-Consider-It";
  const ogDescription =
    "Discover the benefits of rainwater harvesting for commercial buildings. Learn how adopting this sustainable practice can reduce costs, enhance your business's eco-friendly image, and contribute to community well-being. Explore how Inrain Construction can help with expert rainwater harvesting installations.";
  const ogUrl =
    "https://www.inrainconstruction.com/blogs/Rainwater-Harvesting-for-Commercial-Buildings-Why-Every-Business-Should-Consider-Itblogs/Rainwater-Harvesting-System:-Supercharge-Your-Life-to-Sustainable-Living";
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
      <div className="m-5 md:m-10">
        {individualBLog3.map((blog) => {
          return (
            <div className="md:flex md:gap-14 md:justify-center">
              <div className="md:w-[70%]">
                <div>
                  <Image className="w-full md:w-1/2" src={blog3img} alt="img" />

                  <div data-aos="zoom-in-up" className="mt-5">
                    <h1 className="text-3xl md:text-4xl font-semibold">
                      {blog.BlogHead}
                    </h1>
                    <p className="text-[17px] md:text-lg mt-3 mb-3">
                      Businesses are continually looking for creative methods to
                      reduce their environmental impact in their search for
                      sustainability. Rainwater harvesting in commercial
                      buildings is one such strategy that is gaining popularity.
                      We'll explore the many benefits of adopting this
                      environmentally beneficial practice in this article and
                      introduce you to Inrain Construction, a top company for
                      installing <Link className="text-blue-500 font-semibold" href={"https://www.inrainconstruction.com/rainwater-harvesting-system"}>Rainwater Harvesting Systems.</Link>
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
                            <p className="text-[17px] md:text-lg">
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
                            <p className="text-[17px] md:text-lg">
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
                            <p className="text-[17px] md:text-lg">
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

                {sideBlogs7.map((blog) => (
                  <div key={blog.id}>
                    <div className="md:mb-10 md:flex md:gap-4 md:items-center">
                      <div>
                        <Image className="md:w-40" src={blog7img} alt="img" />
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

export default Blog3;
