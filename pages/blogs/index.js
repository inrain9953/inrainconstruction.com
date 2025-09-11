import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import {
  Blog,
  Blog2,
  Blog3,
  Blog4,
  Blog5,
  Blog6,
  Blog7,
  Blog8,
  Blog9,
  Blog10,
} from "../../components/Blogs/Blog";
import { Button } from "@mui/material";
import img1 from "../../public/blog1.jpg";
import img2 from "../../public/blog2.jpg";
import img3 from "../../public/blog3.jpg";
import img4 from "../../public/blog4.jpg";
import img5 from "../../public/blog5.jpg";
import img6 from "../../public/blog6.jpeg";
import img7 from "../../public/blog7.webp";
import img8 from "../../public/blog8.jpg";
import img9 from "../../public/blog9.jpg";
import img10 from "../../public/blog10.png";
import img11 from "../../public/blog11.jpg";
import img13 from "../../public/blog13.jpg";
import service11 from "../../public/service11.jpg";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PopUp from "@/components/popup";

const BlogsIndex = () => {
  const title = "Blogs | InRain® Construction Pvt. Ltd.";
  const desc =
    "Explore InRain Construction's blog for expert insights on rainwater harvesting, sustainable water management solutions, and innovative techniques like bioswales and box-type systems. Stay informed about modern practices to conserve our precious water resources.";
  const keyword =
    "Rainwater Harvesting, Water Conservation, Stormwater Management, Bioswale Systems, Sustainable Water Solutions, InRain Construction, Box Type Rainwater Harvesting, Water Management Techniques, Groundwater Recharge, Environmental Sustainability";
  const canonical = "https://www.inrainconstruction.com/blogs";
  const ogDescription =
    "Explore InRain Construction's blog for expert insights on rainwater harvesting, sustainable water management solutions, and innovative techniques like bioswales and box-type systems. Stay informed about modern practices to conserve our precious water resources.";
  const ogUrl = "https://www.inrainconstruction.com/blogs";
  const ogTitle = "Blogs | InRain® Construction Pvt. Ltd.";
  const twittertitle = "Blogs | InRain® Construction Pvt. Ltd.";
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
      <div className="mt-5">
        <Image
          className="w-full h-28 md:h-72 rounded-xl md:shadow-2xl relative"
          src={service11}
          alt="img"
          loading="eager"
          priority={true}
          unoptimized={true}
        />
        <div className="relative md:bottom-7 bottom-5 md:pl-10 pl-2">
          <p className="text-xs md:text-lg text-black">
            <Link href={"/"}>Home</Link> / Blogs
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="md:grid md:grid-cols-3 grid grid-cols-2 md:m-10"
      >
        {Blog.map((blog) => {
          return (
            <div className="m-5 mb-10">
              <div className="">
                <Image
                  className="md:w-full md:h-full w-[250px] h-[100px] rounded-xl hover:shadow-xl"
                  src={img1}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
                <p className="text-left mt-2 md:text-sm text-[8px] font-semibold">
                  {blog.BlogDate}
                </p>
                <Link href={blog.BlogLink}>
                  <h2 className="text-left hover:text-green-500 underline mt-1 md:text-2xl text-[12px] font-semibold text-blue-500">
                    {blog.BlogHead}
                  </h2>
                </Link>
                <p className="text-justify md:text-base text-[10px] md:mt-3 mt-1 mr-3">
                  {blog.BlogContent}
                </p>
                <div className="flex justify-start mt-2">
                  <Button variant="contained" size="small">
                    <Link
                      className="text-[8px] md:text-[13px]"
                      href={blog.BlogLink}
                    >
                      Read More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {Blog2.map((blog) => {
          return (
            <div className="m-5 mb-10">
              <div className="">
                <Image
                  className="md:w-full md:h-full w-[250px] h-[100px] rounded-xl hover:shadow-xl"
                  src={img2}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
                <p className="text-left mt-2 md:text-sm text-[8px] font-semibold">
                  {blog.BlogDate}
                </p>
                <Link href={blog.BlogLink}>
                  <h3 className="text-left hover:text-green-500 underline mt-1 md:text-2xl text-[12px] font-semibold text-blue-500">
                    {blog.BlogHead}
                  </h3>
                </Link>
                <p className="text-justify md:text-base text-[10px] md:mt-3 mt-1 mr-3">
                  {blog.BlogContent}
                </p>
                <div className="flex justify-start mt-2">
                  <Button variant="contained" size="small">
                    <Link
                      className="text-[8px] md:text-[13px]"
                      href={blog.BlogLink}
                    >
                      Read More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {Blog3.map((blog) => {
          return (
            <div className="m-5 mb-10">
              <div className="">
                <Image
                  className="md:w-full md:h-full w-[250px] h-[100px] rounded-xl hover:shadow-xl"
                  src={img3}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
                <p className="text-left mt-2 md:text-sm text-[8px] font-semibold">
                  {blog.BlogDate}
                </p>
                <Link href={blog.BlogLink}>
                  <h4 className="text-left hover:text-green-500 underline mt-1 md:text-2xl text-[12px] font-semibold text-blue-500">
                    {blog.BlogHead}
                  </h4>
                </Link>
                <p className="text-justify md:text-base text-[10px] md:mt-3 mt-1 mr-3">
                  {blog.BlogContent}
                </p>
                <div className="flex justify-start mt-2">
                  <Button variant="contained" size="small">
                    <Link
                      className="text-[8px] md:text-[13px]"
                      href={blog.BlogLink}
                    >
                      Read More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {Blog4.map((blog) => {
          return (
            <div className="m-5 mb-10">
              <div className="">
                <Image
                  className="md:w-full md:h-full w-[250px] h-[100px] rounded-xl hover:shadow-xl"
                  src={img4}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
                <p className="text-left mt-2 md:text-sm text-[8px] font-semibold">
                  {blog.BlogDate}
                </p>
                <Link href={blog.BlogLink}>
                  <h2 className="text-left hover:text-green-500 underline mt-1 md:text-2xl text-[12px] font-semibold text-blue-500">
                    {blog.BlogHead}
                  </h2>
                </Link>
                <p className="text-justify md:text-base text-[10px] md:mt-3 mt-1 mr-3">
                  {blog.BlogContent}
                </p>
                <div className="flex justify-start mt-2">
                  <Button variant="contained" size="small">
                    <Link
                      className="text-[8px] md:text-[13px]"
                      href={blog.BlogLink}
                    >
                      Read More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {Blog5.map((blog) => {
          return (
            <div className="m-5 mb-10">
              <div className="">
                <Image
                  className="md:w-full md:h-full w-[250px] h-[100px] rounded-xl hover:shadow-xl"
                  src={img5}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
                <p className="text-left mt-2 md:text-sm text-[8px] font-semibold">
                  {blog.BlogDate}
                </p>
                <Link href={blog.BlogLink}>
                  <h3 className="text-left hover:text-green-500 underline mt-1 md:text-2xl text-[12px] font-semibold text-blue-500">
                    {blog.BlogHead}
                  </h3>
                </Link>
                <p className="text-justify md:text-base text-[10px] md:mt-3 mt-1 mr-3">
                  {blog.BlogContent}
                </p>
                <div className="flex justify-start mt-2">
                  <Button variant="contained" size="small">
                    <Link
                      className="text-[8px] md:text-[13px]"
                      href={blog.BlogLink}
                    >
                      Read More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {Blog6.map((blog) => {
          return (
            <div className="m-5 mb-10">
              <div className="">
                <Image
                  className="md:w-full md:h-full w-[250px] h-[100px] rounded-xl hover:shadow-xl"
                  src={img6}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
                <p className="text-left mt-2 md:text-sm text-[8px] font-semibold">
                  {blog.BlogDate}
                </p>
                <Link href={blog.BlogLink}>
                  <h4 className="text-left hover:text-green-500 underline mt-1 md:text-2xl text-[12px] font-semibold text-blue-500">
                    {blog.BlogHead}
                  </h4>
                </Link>
                <p className="text-justify md:text-base text-[10px] md:mt-3 mt-1 mr-3">
                  {blog.BlogContent}
                </p>
                <div className="flex justify-start mt-2">
                  <Button variant="contained" size="small">
                    <Link
                      className="text-[8px] md:text-[13px]"
                      href={blog.BlogLink}
                    >
                      Read More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {Blog7.map((blog) => {
          return (
            <div className="m-5 mb-10">
              <div className="">
                <Image
                  className="md:w-full md:h-full w-[250px] h-[100px] rounded-xl hover:shadow-xl"
                  src={img7}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
                <p className="text-left mt-2 md:text-sm text-[8px] font-semibold">
                  {blog.BlogDate}
                </p>
                <Link href={blog.BlogLink}>
                  <h2 className="text-left hover:text-green-500 underline mt-1 md:text-2xl text-[12px] font-semibold text-blue-500">
                    {blog.BlogHead}
                  </h2>
                </Link>
                <p className="text-justify md:text-base text-[10px] md:mt-3 mt-1 mr-3">
                  {blog.BlogContent}
                </p>
                <div className="flex justify-start mt-2">
                  <Button variant="contained" size="small">
                    <Link
                      className="text-[8px] md:text-[13px]"
                      href={blog.BlogLink}
                    >
                      Read More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {Blog8.map((blog) => {
          return (
            <div className="m-5 mb-10">
              <div className="">
                <Image
                  className="md:w-full md:h-full w-[250px] h-[100px] rounded-xl hover:shadow-xl"
                  src={img8}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
                <p className="text-left mt-2 md:text-sm text-[8px] font-semibold">
                  {blog.BlogDate}
                </p>
                <Link href={blog.BlogLink}>
                  <h5 className="text-left hover:text-green-500 underline mt-1 md:text-2xl text-[12px] font-semibold text-blue-500">
                    {blog.BlogHead}
                  </h5>
                </Link>
                <p className="text-justify md:text-base text-[10px] md:mt-3 mt-1 mr-3">
                  {blog.BlogContent}
                </p>
                <div className="flex justify-start mt-2">
                  <Button variant="contained" size="small">
                    <Link
                      className="text-[8px] md:text-[13px]"
                      href={blog.BlogLink}
                    >
                      Read More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {Blog9.map((blog) => {
          return (
            <div className="m-5 mb-10">
              <div className="">
                <Image
                  className="md:w-full md:h-full w-[250px] h-[100px] rounded-xl hover:shadow-xl"
                  src={img9}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
                <p className="text-left mt-2 md:text-sm text-[8px] font-semibold">
                  {blog.BlogDate}
                </p>
                <Link href={blog.BlogLink}>
                  <h3 className="text-left hover:text-green-500 underline mt-1 md:text-2xl text-[12px] font-semibold text-blue-500">
                    {blog.BlogHead}
                  </h3>
                </Link>
                <p className="text-justify md:text-base text-[10px] md:mt-3 mt-1 mr-3">
                  {blog.BlogContent}
                </p>
                <div className="flex justify-start mt-2">
                  <Button variant="contained" size="small">
                    <Link
                      className="text-[8px] md:text-[13px]"
                      href={blog.BlogLink}
                    >
                      Read More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {Blog10.map((blog) => {
          return (
            <div className="m-5 mb-10">
              <div className="">
                <Image
                  className="md:w-full md:h-full w-[250px] h-[100px] rounded-xl hover:shadow-xl"
                  src={img10}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
                <p className="text-left mt-2 md:text-sm text-[8px] font-semibold">
                  {blog.BlogDate}
                </p>
                <Link href={blog.BlogLink}>
                  <h2 className="text-left hover:text-green-500 underline mt-1 md:text-2xl text-[12px] font-semibold text-blue-500">
                    {blog.BlogHead}
                  </h2>
                </Link>
                <p className="text-justify md:text-base text-[10px] md:mt-3 mt-1 mr-3">
                  {blog.BlogContent}
                </p>
                <div className="flex justify-start mt-2">
                  <Button variant="contained" size="small">
                    <Link
                      className="text-[8px] md:text-[13px]"
                      href={blog.BlogLink}
                    >
                      Read More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        <div>
          <div className="m-5 mb-10">
            <div className="">
              <Image
                className="md:w-full md:h-full w-[250px] h-[100px] rounded-xl hover:shadow-xl"
                src={img11}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
              <p className="text-left mt-2 md:text-sm text-[8px] font-semibold">
                May 09, 2025
              </p>
              <Link href={"/blogs/a-blueprint-for-sustainable-living"}>
                <h3 className="text-left hover:text-green-500 underline mt-1 md:text-2xl text-[12px] font-semibold text-blue-500">
                  A Blueprint for Sustainable Living
                </h3>
              </Link>
              <p className="text-justify md:text-base text-[10px] md:mt-3 mt-1 mr-3">
                In the heart of Bengaluru, architect Jaya Rayaprolu has crafted
                a home that stands as a beacon of sustainable living. Designed
                with a deep commitment to environmental stewardship, her
                residence ....
              </p>
              <div className="flex justify-start mt-2">
                <Button variant="contained" size="small">
                  <Link
                    className="text-[8px] md:text-[13px]"
                    href={"/blogs/a-blueprint-for-sustainable-living"}
                  >
                    Read More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="m-5 mb-10">
            <div className="">
              <Image
                className="md:w-full md:h-full w-[250px] h-[100px] rounded-xl hover:shadow-xl"
                src={img1}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
              <p className="text-left mt-2 md:text-sm text-[8px] font-semibold">
                July 05, 2025
              </p>
              <a
                href={
                  "/blogs/simple-and-practical-methods-for-groundwater-augmentation-in-our-homes"
                }
              >
                <h4 className="text-left hover:text-green-500 underline mt-1 md:text-2xl text-[12px] font-semibold text-blue-500">
                  Simple and Practical Methods for Groundwater Augmentation in
                  Our Homes
                </h4>
              </a>
              <p className="text-justify md:text-base text-[10px] md:mt-3 mt-1 mr-3">
                Groundwater, a hidden treasure beneath our feet, is facing a
                real crisis. As cities grow and our need for water increases,
                these vital underground reserves are shrinking at an alarming
                rate. But here's the good news: we, as individual homeowners
                ....
              </p>
              <div className="flex justify-start mt-2">
                <Button variant="contained" size="small">
                  <a
                    className="text-[8px] md:text-[13px]"
                    href={
                      "/blogs/simple-and-practical-methods-for-groundwater-augmentation-in-our-homes"
                    }
                  >
                    Read More
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="m-5 mb-10">
            <div className="">
              <Image
                className="md:w-full md:h-full w-[250px] h-[100px] rounded-xl hover:shadow-xl h-80"
                src={img13}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
              <p className="text-left mt-2 md:text-sm text-[8px] font-semibold">
                August 12, 2025
              </p>
              <Link
                href={"/blogs/top-five-rainwater-harvesting-companies-in-india"}
              >
                <h2 className="text-left hover:text-green-500 underline mt-1 md:text-2xl text-[12px] font-semibold text-blue-500">
                  #1 in the top 5 Rainwater Harvesting Companies in India
                  (2019–25)
                </h2>
              </Link>
              <p className="text-justify md:text-base text-[10px] md:mt-3 mt-1 mr-3">
                Water scarcity is one of the most pressing challenges of our
                time, and Rainwater Harvesting (RWH) has emerged as a vital
                solution to address it. By collecting and storing rainwater for
                later use or groundwater recharge, RWH systems reduce dependency
                on traditional water sources and contribute to environmental
                sustainability.
              </p>
              <div className="flex justify-start mt-2">
                <Button variant="contained" size="small">
                  <Link
                    className="text-[8px] md:text-[13px]"
                    href={
                      "/blogs/top-five-rainwater-harvesting-companies-in-india"
                    }
                  >
                    Read More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogsIndex;
