import React from "react";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import {
  individualBLog9,
  sideBlogs1,
  sideBlogs2,
  sideBlogs3,
  sideBlogs4,
  sideBlogs5,
  sideBlogs6,
  sideBlogs7,
  sideBlogs8,
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
import PopUp from "@/components/popup";

const Blog9 = () => {
  const title =
    "Eco-Friendly Benefits of a Modular Rainwater Harvesting System";
  const desc =
    "Explore the eco-friendly benefits of modular rainwater harvesting systems. Learn how they reduce stormwater runoff, conserve freshwater, recharge groundwater, combat urban heat islands, and offer adaptable, scalable solutions for sustainable water management.";
  const keyword =
    "modular rainwater harvesting, eco-friendly water management, stormwater runoff reduction, groundwater recharge, urban heat island effect, freshwater conservation, sustainable water solutions, green infrastructure, rainwater collection systems, adaptable rainwater harvesting, scalable water systems, rainwater for irrigation, urban water sustainability";
  const canonical =
    "https://www.inrainconstruction.com/blogs/eco-friendly-benefits-of-a-modular-rainwater-harvesting-system";
  const ogDescription =
    "Explore the eco-friendly benefits of modular rainwater harvesting systems. Learn how they reduce stormwater runoff, conserve freshwater, recharge groundwater, combat urban heat islands, and offer adaptable, scalable solutions for sustainable water management.";
  const ogUrl =
    "https://www.inrainconstruction.com/blogs/eco-friendly-benefits-of-a-modular-rainwater-harvesting-system";
  const ogTitle =
    "Eco-Friendly Benefits of a Modular Rainwater Harvesting System";
  const twittertitle =
    "Eco-Friendly Benefits of a Modular Rainwater Harvesting System";
  const twitterdescription =
    "Explore the eco-friendly benefits of modular rainwater harvesting systems. Learn how they reduce stormwater runoff, conserve freshwater, recharge groundwater, combat urban heat islands, and offer adaptable, scalable solutions for sustainable water management.";

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
        {individualBLog9.map((blog) => {
          return (
            <div className="md:flex md:gap-14 md:justify-center">
              <div className="md:w-[70%]">
                <div>
                  <Image
                    className="w-full md:w-1/2 h-80"
                    src={blog9img}
                    alt="img"
                    loading="eager"
                    priority={true}
                    unoptimized={true}
                  />

                  <div data-aos="zoom-in-up" className="mt-5">
                    <h1 className="text-3xl md:text-4xl font-semibold">
                      {blog.BlogHead}
                    </h1>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogMainContent}
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading1}
                    </h3>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent1} <br />
                      <br />
                      The{" "}
                      <Link
                        className="text-blue-500 font-semibold"
                        href={
                          "https://www.inrainconstruction.com/modular-rainwater-harvesting"
                        }
                      >
                        Modular Rainwater Harvesting system
                      </Link>{" "}
                      are designed to collect rainwater right where is
                      waterfalls. This system very flexible and also
                      customizable to fit your place, this is suitable for both
                      rural areas or business places. This is mange storm water
                      overflow efficiently. These systems help to keep our
                      waterways clean and less risk of overflowing. The modular
                      rainwater harvesting system cost is lower than other. The
                      storing and capturing this water, they significantly
                      reduce the amount of overflow that goes into drainage
                      system.
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading2}
                    </h3>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent2}
                      <br />
                      <br />
                      Collecting the rainwater for things like toilet flushing,
                      gardening and irrigation, this system can expressively
                      reduce the pressure on usual supplies of fresh water. This
                      modular rainwater harvesting system is especially
                      important for those areas they have limited resources of
                      fresh water. When we are using rainwater for irrigation it
                      is actually improve soil health and also decrease the need
                      for chemical composts for crops. Rainwater is generally
                      cleaner and free from the pollutants found in preserved
                      municipal water supplies.
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading3}
                    </h3>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent3}
                      <br />
                      <br />
                      The modular rainwater harvesting systems is designed to
                      encourage this soaking process. The system allowing the
                      collected rainwater to seep back into the ground soil.
                      This is not only helps to refill local aquifers but this
                      is also beneficial for our surrounding environment. When
                      will ground water levels increase it makes to healthy
                      plant life and better habitats for the wildlife. Also
                      improving groundwater recharge can good result in cleaner
                      water in wells, which very important for both people and
                      the environment.
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading4}
                    </h3>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent4}
                      <br />
                      <br />
                      Modular rainwater harvesting systems can help combat this
                      issue. By combining these systems with green
                      infrastructure—like green roofs, permeable pavements, and
                      urban gardens—cities can encourage the growth of plants
                      that cool down the environment. Plants release moisture
                      into the air through a process called transpiration, which
                      helps lower temperatures. This cooling effect not only
                      makes outdoor spaces more comfortable for residents but
                      also reduces the need for energy-intensive air
                      conditioning, helping to lower greenhouse gas emissions.
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading5}
                    </h3>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent5}
                      <br />
                      <br />
                      Additionally, these systems can be built gradually,
                      allowing communities to start small and expand as needed.
                      This makes it easier for both urban and rural areas to
                      adopt rainwater harvesting practices, making sustainable
                      water management accessible to more people. As more
                      communities implement these modular systems, the combined
                      benefits—like better water quality, reduced flooding, and
                      increased biodiversity—can help create stronger and more
                      resilient cities and landscapes.
                    </p>
                  </div>

                  <div data-aos="zoom-in-up" className="mb-5 mt-5">
                    <h3 className="font-bold text-xl md:text-3xl">
                      {blog.BlogSubHeading9}
                    </h3>
                    <p className="text-[17px] text-justify md:text-lg mt-3 mb-3">
                      {blog.BlogSubHeadingContent9}
                      <br />
                      <br />
                      As communities look for ways to become more resilient
                      against climate change and water shortages, adopting these
                      systems can be a game-changer for creating a greener and
                      more sustainable future. Investing in modular rainwater
                      harvesting not only helps the environment but also
                      supports the health and well-being of local communities.
                      <br />
                      <br />
                      By working together and committing to sustainable
                      practices, we can make the most of rainwater and improve
                      our water management strategies for years to come.
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
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Blog9;
