import React from "react";
import Image from "next/image";
import blogImg1 from "@/public//blog11.jpg";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import PopUp from "@/components/popup";
import Link from "next/link";
import {
  sideBlogs1,
  sideBlogs10,
  sideBlogs2,
  sideBlogs3,
  sideBlogs4,
  sideBlogs5,
  sideBlogs6,
  sideBlogs7,
  sideBlogs8,
  sideBlogs9,
} from "@/components/Blogs/Blog";
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
import Head from "next/head";

const Blog11 = () => {
  const title =
    "Sustainable Living: Architect's Eco-Friendly Home in Bengaluru | InRain® Construction Pvt. Ltd.";
  const desc =
    "Explore the innovative design of a zero-waste home featuring rainwater harvesting and solar energy.";
  const keyword =
    "sustainable living, eco-friendly home, Bengaluru architect, rainwater harvesting, greywater recycling, biodigester, solar powered home, green building, zero waste home, Jaya Rayaprolu, sustainable architecture, renewable energy, eco-conscious living, sustainable home design, water conservation techniques";
  const canonical =
    "https://www.inrainconstruction.com/blogs/a-blueprint-for-sustainable-living";
  const ogDescription =
    "Explore the innovative design of a zero-waste home featuring rainwater harvesting and solar energy.";
  const ogUrl =
    "https://www.inrainconstruction.com/blogs/a-blueprint-for-sustainable-living";
  const ogTitle =
    "Sustainable Living: Architect's Eco-Friendly Home in Bengaluru | InRain® Construction Pvt. Ltd.";
  const twittertitle =
    "Sustainable Living: Architect's Eco-Friendly Home in Bengaluru | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Explore the innovative design of a zero-waste home featuring rainwater harvesting and solar energy.";

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
          / A Blueprint for Sustainable Living
        </span>
      </div>

      <div className="m-5 md:m-10 md:flex md:gap-14 md:justify-center">
        <div className="md:w-[70%]">
          <div>
            <p className="text-[30px] text-justify">
              In the heart of Bengaluru, architect Jaya Rayaprolu has crafted a
              home that stands as a beacon of sustainable living. Designed with
              a deep commitment to environmental stewardship, her residence
              seamlessly integrates water conservation, renewable energy, and
              eco-friendly construction techniques.
            </p>
          </div>
          <div className="mt-5">
            <Image
              className="m-auto rounded-2xl shadow-2xl"
              src={blogImg1}
              alt="water conservation bangalore"
            />
          </div>
          <div>
            <div className="md:text-justify text-center">
              <div className="mt-5">
                <h1 className="text-[35px] font-semibold">
                  🌿 A Blueprint for Sustainable Living
                </h1>
                <p className="text-[20px]">
                  Jaya's home is more than just a dwelling; it's a holistic
                  system that harmoniously blends with nature. By incorporating
                  innovative solutions, she has created a self-sufficient
                  environment that minimizes waste and maximizes resource
                  efficiency.
                </p>
              </div>
              <div className="mt-5">
                <h2 className="text-[35px] font-semibold">
                  💧 Harnessing the Power of Rain
                </h2>
                <p className="text-[20px]">
                  Central to the home's design is a robust rainwater harvesting
                  system. A substantial 30,000-litre underground sump collects
                  rainwater from the rooftop, accumulating approximately 1.3
                  lakh litres annually. This harvested water caters to various
                  household needs, including drinking, cooking, and washing,
                  significantly reducing dependence on external water sources.
                </p>
              </div>
              <div className="mt-5">
                <h2 className="text-[35px] font-semibold">
                  🔄 Recycling Greywater Naturally
                </h2>
                <p className="text-[20px]">
                  Understanding the importance of water reuse, Jaya has
                  implemented an effective greywater recycling system.
                  Wastewater from the kitchen and bathrooms first enters a
                  baffle tank for initial treatment. Subsequently, it flows into
                  a reed bed, where aquatic plants naturally purify the water.
                  The final stage involves a polishing tank, where sunlight
                  exposure eliminates remaining pathogens, rendering the water
                  suitable for gardening and toilet flushing.
                </p>
              </div>
              <div className="mt-5">
                <h2 className="text-[35px] font-semibold">
                  🚽 Zero Sewage Waste with Biodigester Technology
                </h2>
                <p className="text-[20px]">
                  To address sewage management, the home utilizes a
                  DRDO-developed biodigester. This compact system employs
                  bioenzymes to convert sewage into 95% pure water, which can be
                  used for irrigation or safely released into the soil, aiding
                  in groundwater recharge.
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-[35px] font-semibold">
                  🧱 Eco-Friendly Construction Materials
                </h3>
                <p className="text-[20px]">
                  The house is constructed using sun-dried bricks made from soil
                  excavated during the building process. This choice not only
                  reduces the carbon footprint but also ensures natural
                  insulation, keeping the interior cool during Bengaluru's hot
                  summers.
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-[35px] font-semibold">
                  ☀️ Embracing Solar Energy
                </h3>
                <p className="text-[20px]">
                  Equipped with 3kW solar panels, the home generates sufficient
                  electricity to meet its energy needs. This renewable energy
                  source powers all household appliances, resulting in zero
                  electricity bills and further emphasizing the home's
                  self-sufficiency.
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-[35px] font-semibold">
                  🌱 A Model for Future Homes
                </h3>
                <p className="text-[20px]">
                  Jaya Rayaprolu's residence exemplifies how thoughtful design
                  and sustainable practices can lead to a harmonious and
                  eco-friendly lifestyle. By integrating water conservation,
                  renewable energy, and natural building materials, her home
                  serves as an inspiring model for sustainable living in urban
                  settings.
                </p>
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
                  <p className="text-left text-gray-500">{blog.BlogDate}</p>
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
                  <p className="text-left text-gray-500">{blog.BlogDate}</p>
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
                  <p className="text-left text-gray-500">{blog.BlogDate}</p>
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
                  <p className="text-left text-gray-500">{blog.BlogDate}</p>
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
                  <p className="text-left text-gray-500">{blog.BlogDate}</p>
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
                  <p className="text-left text-gray-500">{blog.BlogDate}</p>
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
                  <p className="text-left text-gray-500">{blog.BlogDate}</p>
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
                  <p className="text-left text-gray-500">{blog.BlogDate}</p>
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
                  <p className="text-left text-gray-500">{blog.BlogDate}</p>
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
                  <p className="text-left text-gray-500">{blog.BlogDate}</p>
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

      <Footer />
    </>
  );
};

export default Blog11;
