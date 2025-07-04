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
      <div className="md:grid md:grid-cols-3 md:m-10">
        {Blog.map((blog) => {
          return (
            <div data-aos="zoom-in-up" className="m-5 mb-10">
              <div className="">
                <Image
                  className="w-full rounded-xl hover:shadow-xl"
                  src={img1}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
                <p className="text-left mt-2 text-sm font-semibold">
                  {blog.BlogDate}
                </p>
                <Link href={blog.BlogLink}>
                  <h1 className="text-left hover:text-green-500 underline mt-1 text-2xl font-semibold text-blue-500">
                    {blog.BlogHead}
                  </h1>
                </Link>
                <p className="text-justify text-base mt-3 mr-3">
                  {blog.BlogContent}
                </p>
                <div className="flex justify-start mt-2">
                  <Button variant="contained" size="small">
                    <Link href={blog.BlogLink}>Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {Blog2.map((blog) => {
          return (
            <div data-aos="zoom-in-up" className="m-5 mb-10">
              <div className="">
                <Image
                  className="w-full rounded-xl hover:shadow-xl"
                  src={img2}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
                <p className="text-left mt-2 text-sm font-semibold">
                  {blog.BlogDate}
                </p>
                <Link href={blog.BlogLink}>
                  <h1 className="text-left hover:text-green-500 underline mt-1 text-2xl font-semibold text-blue-500">
                    {blog.BlogHead}
                  </h1>
                </Link>
                <p className="text-justify text-base mt-3 mr-3">
                  {blog.BlogContent}
                </p>
                <div className="flex justify-start mt-2">
                  <Button variant="contained" size="small">
                    <Link href={blog.BlogLink}>Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {Blog3.map((blog) => {
          return (
            <div data-aos="zoom-in-up" className="m-5 mb-10">
              <div className="">
                <Image
                  className="w-full rounded-xl hover:shadow-xl"
                  src={img3}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
                <p className="text-left mt-2 text-sm font-semibold">
                  {blog.BlogDate}
                </p>
                <Link href={blog.BlogLink}>
                  <h1 className="text-left hover:text-green-500 underline mt-1 text-2xl font-semibold text-blue-500">
                    {blog.BlogHead}
                  </h1>
                </Link>
                <p className="text-justify text-base mt-3 mr-3">
                  {blog.BlogContent}
                </p>
                <div className="flex justify-start mt-2">
                  <Button variant="contained" size="small">
                    <Link href={blog.BlogLink}>Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {Blog4.map((blog) => {
          return (
            <div data-aos="zoom-in-up" className="m-5 mb-10">
              <div className="">
                <Image
                  className="w-full rounded-xl hover:shadow-xl"
                  src={img4}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
                <p className="text-left mt-2 text-sm font-semibold">
                  {blog.BlogDate}
                </p>
                <Link href={blog.BlogLink}>
                  <h1 className="text-left hover:text-green-500 underline mt-1 text-2xl font-semibold text-blue-500">
                    {blog.BlogHead}
                  </h1>
                </Link>
                <p className="text-justify text-base mt-3 mr-3">
                  {blog.BlogContent}
                </p>
                <div className="flex justify-start mt-2">
                  <Button variant="contained" size="small">
                    <Link href={blog.BlogLink}>Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {Blog5.map((blog) => {
          return (
            <div data-aos="zoom-in-up" className="m-5 mb-10">
              <div className="">
                <Image
                  className="w-full rounded-xl hover:shadow-xl"
                  src={img5}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
                <p className="text-left mt-2 text-sm font-semibold">
                  {blog.BlogDate}
                </p>
                <Link href={blog.BlogLink}>
                  <h1 className="text-left hover:text-green-500 underline mt-1 text-2xl font-semibold text-blue-500">
                    {blog.BlogHead}
                  </h1>
                </Link>
                <p className="text-justify text-base mt-3 mr-3">
                  {blog.BlogContent}
                </p>
                <div className="flex justify-start mt-2">
                  <Button variant="contained" size="small">
                    <Link href={blog.BlogLink}>Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {Blog6.map((blog) => {
          return (
            <div data-aos="zoom-in-up" className="m-5 mb-10">
              <div className="">
                <Image
                  className="w-full rounded-xl hover:shadow-xl"
                  src={img6}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
                <p className="text-left mt-2 text-sm font-semibold">
                  {blog.BlogDate}
                </p>
                <Link href={blog.BlogLink}>
                  <h1 className="text-left hover:text-green-500 underline mt-1 text-2xl font-semibold text-blue-500">
                    {blog.BlogHead}
                  </h1>
                </Link>
                <p className="text-justify text-base mt-3 mr-3">
                  {blog.BlogContent}
                </p>
                <div className="flex justify-start mt-2">
                  <Button variant="contained" size="small">
                    <Link href={blog.BlogLink}>Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {Blog7.map((blog) => {
          return (
            <div data-aos="zoom-in-up" className="m-5 mb-10">
              <div className="">
                <Image
                  className="w-full rounded-xl hover:shadow-xl h-80"
                  src={img7}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
                <p className="text-left mt-2 text-sm font-semibold">
                  {blog.BlogDate}
                </p>
                <Link href={blog.BlogLink}>
                  <h1 className="text-left hover:text-green-500 underline mt-1 text-2xl font-semibold text-blue-500">
                    {blog.BlogHead}
                  </h1>
                </Link>
                <p className="text-justify text-base mt-3 mr-3">
                  {blog.BlogContent}
                </p>
                <div className="flex justify-start mt-2">
                  <Button variant="contained" size="small">
                    <Link href={blog.BlogLink}>Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {Blog8.map((blog) => {
          return (
            <div data-aos="zoom-in-up" className="m-5 mb-10">
              <div className="">
                <Image
                  className="w-full rounded-xl hover:shadow-xl h-80"
                  src={img8}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
                <p className="text-left mt-2 text-sm font-semibold">
                  {blog.BlogDate}
                </p>
                <Link href={blog.BlogLink}>
                  <h1 className="text-left hover:text-green-500 underline mt-1 text-2xl font-semibold text-blue-500">
                    {blog.BlogHead}
                  </h1>
                </Link>
                <p className="text-justify text-base mt-3 mr-3">
                  {blog.BlogContent}
                </p>
                <div className="flex justify-start mt-2">
                  <Button variant="contained" size="small">
                    <Link href={blog.BlogLink}>Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {Blog9.map((blog) => {
          return (
            <div data-aos="zoom-in-up" className="m-5 mb-10">
              <div className="">
                <Image
                  className="w-full rounded-xl hover:shadow-xl h-80"
                  src={img9}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
                <p className="text-left mt-2 text-sm font-semibold">
                  {blog.BlogDate}
                </p>
                <Link href={blog.BlogLink}>
                  <h1 className="text-left hover:text-green-500 underline mt-1 text-2xl font-semibold text-blue-500">
                    {blog.BlogHead}
                  </h1>
                </Link>
                <p className="text-justify text-base mt-3 mr-3">
                  {blog.BlogContent}
                </p>
                <div className="flex justify-start mt-2">
                  <Button variant="contained" size="small">
                    <Link href={blog.BlogLink}>Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {Blog10.map((blog) => {
          return (
            <div data-aos="zoom-in-up" className="m-5 mb-10">
              <div className="">
                <Image
                  className="w-full rounded-xl hover:shadow-xl h-80"
                  src={img10}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
                <p className="text-left mt-2 text-sm font-semibold">
                  {blog.BlogDate}
                </p>
                <Link href={blog.BlogLink}>
                  <h1 className="text-left hover:text-green-500 underline mt-1 text-2xl font-semibold text-blue-500">
                    {blog.BlogHead}
                  </h1>
                </Link>
                <p className="text-justify text-base mt-3 mr-3">
                  {blog.BlogContent}
                </p>
                <div className="flex justify-start mt-2">
                  <Button variant="contained" size="small">
                    <Link href={blog.BlogLink}>Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        <div>
          <div data-aos="zoom-in-up" className="m-5 mb-10">
            <div className="">
              <Image
                className="w-full rounded-xl hover:shadow-xl h-80"
                src={img11}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
              <p className="text-left mt-2 text-sm font-semibold">
                May 09, 2025
              </p>
              <Link href={"/blogs/a-blueprint-for-sustainable-living"}>
                <h1 className="text-left hover:text-green-500 underline mt-1 text-2xl font-semibold text-blue-500">
                  A Blueprint for Sustainable Living
                </h1>
              </Link>
              <p className="text-justify text-base mt-3 mr-3">
                In the heart of Bengaluru, architect Jaya Rayaprolu has crafted
                a home that stands as a beacon of sustainable living. Designed
                with a deep commitment to environmental stewardship, her
                residence ....
              </p>
              <div className="flex justify-start mt-2">
                <Button variant="contained" size="small">
                  <Link href={"/blogs/a-blueprint-for-sustainable-living"}>
                    Read More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div data-aos="zoom-in-up" className="m-5 mb-10">
            <div className="">
              <Image
                className="w-full rounded-xl hover:shadow-xl h-80"
                src={img1}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
              <p className="text-left mt-2 text-sm font-semibold">
                July 05, 2025
              </p>
              <a
                href={
                  "/blogs/simple-and-practical-methods-for-groundwater-augmentation-in-our-homes"
                }
              >
                <h1 className="text-left hover:text-green-500 underline mt-1 text-2xl font-semibold text-blue-500">
                  Simple and Practical Methods for Groundwater Augmentation in
                  Our Homes
                </h1>
              </a>
              <p className="text-justify text-base mt-3 mr-3">
                Groundwater, a hidden treasure beneath our feet, is facing a
                real crisis. As cities grow and our need for water increases,
                these vital underground reserves are shrinking at an alarming
                rate. But here's the good news: we, as individual homeowners
                ....
              </p>
              <div className="flex justify-start mt-2">
                <Button variant="contained" size="small">
                  <a
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
      </div>
      <Footer />
    </>
  );
};

export default BlogsIndex;
