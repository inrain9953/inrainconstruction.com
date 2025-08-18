import React from "react";
import logo from "../../public/without-bg-logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { MailOutline } from "@mui/icons-material";
import CallIcon from "@mui/icons-material/Call";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";
import Image from "next/image";
import { clientSlider1, clientSlider2 } from "../constant";

export const Footer = () => {
  return (
    <>
      <div className="">
        <div className="mt-20">
          <p
            data-aos="fade-up"
            className="text-center font-bold text-2xl md:text-4xl"
          >
            Our Happy Clients
          </p>
          <div
            data-aos="fade-up"
            className="flex overflow-clip align-middle drop-shadow-2xl"
          >
            {clientSlider1.map((items) => (
              <div className="m-7 w-36 md:m-10 carouselAnimation md:w-44">
                <Image
                  alt="img"
                  className="h-20 min-w-20 md:min-w-28 md:h-28 drop-shadow-xl rounded-lg"
                  src={items.img}
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                ></Image>
                <p className="text-center font-semibold text-sm md:text-lg m-2">
                  {items.description}
                </p>
              </div>
            ))}
          </div>

          <div
            data-aos="fade-up"
            className="flex overflow-clip align-middle drop-shadow-2xl"
          >
            {clientSlider2.map((items) => (
              <div className="m-7 w-36 md:m-10 carouselAnimation md:w-44">
                <Image
                  alt="img"
                  className="h-20 min-w-20 md:min-w-28 md:h-28 drop-shadow-xl rounded-lg"
                  src={items.img}
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                ></Image>
                <p className="text-center font-semibold text-sm md:text-lg m-2">
                  {items.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div data-aos="fade-up">
        <iframe
          width="100%"
          height="450"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=InRain%20Construction%20Private%20Limited%20-%20Rainwater%20Harvesting%20System%20&amp;%20Modular%20Rainwater%20Harvesting%20System%20in%20Delhi%20New%20Delhi+(InRain%20Construction%20Pvt.%20Ltd.)&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>

      <div>
        <div className="footer-background">
          <div className="md:flex md:mr-7">
            <div
              data-aos="fade-up"
              className="text-left ml-7 pt-10 md:w-[25%]"
            >
              <Link href="/">
                <Image
                  className="w-24 mb-5"
                  src={logo}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
              </Link>
              <div className="flex gap-5">
                <a
                  className="hover:text-sky-600"
                  target="_blank"
                  href={
                    "https://www.facebook.com/inrainconstructions"
                  }
                >
                  <FacebookIcon fontSize="large" />
                </a>
                <a
                  className="hover:text-red-600"
                  target="_blank"
                  href={"https://www.instagram.com/inrainconstruction/"}
                >
                  <InstagramIcon fontSize="large" />
                </a>
                <a
                  className="hover:text-white"
                  target="_blank"
                  href={"https://x.com/InrainC"}
                >
                  <XIcon fontSize="large" />
                </a>
                <a
                  className="hover:text-sky-800"
                  target="_blank"
                  href={
                    "https://www.linkedin.com/company/35590476/admin/dashboard/"
                  }
                >
                  <LinkedInIcon fontSize="large" />
                </a>
                <a
                  className="hover:text-red-600"
                  target="_blank"
                  href={
                    "https://youtube.com/@inrainharvesting?si=Fxx_8_rhzHt2ZBLF"
                  }
                >
                  <YouTubeIcon fontSize="large" />
                </a>
              </div>

              <div className="mb-7 mt-5 flex flex-col">
                <a
                  className="text-[15px] text-white hover:text-sky-700"
                  href="/modular-rainwater-harvesting-system-in-india"
                >
                  Modular Rainwater Harvesting System in India
                </a>
                <a
                  className="text-[15px] text-white hover:text-sky-700"
                  href="/rainwater-harvesting-system-in-india"
                >
                  Rainwater Harvesting System in India
                </a>
                <a
                  className="text-[15px] text-white hover:text-sky-700"
                  href="/polymer-based-rainwater-harvesting-system-in-india"
                >
                  Polymer based Rainwater Harvesting System in India
                </a>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="text-left ml-7 mb-7 md:w-[25%] md:pt-10"
            >
              <p className="text-2xl font-semibold pb-3 m-1 text-white">
                Quick Links
              </p>
              <p className="font-medium text-lg m-1 text-white">
                <Link className="hover:text-sky-700" href="/">
                  Home
                </Link>
              </p>
              <p className="font-medium text-lg m-1 text-white">
                <Link className="hover:text-sky-700" href="/about-us">
                  About Us
                </Link>
              </p>
              <p className="font-medium text-lg m-1 text-white">
                <Link className="hover:text-sky-700" href="/products">
                  Products
                </Link>
              </p>
              <p className="font-medium text-lg m-1 text-white">
                <Link className="hover:text-sky-700" href="/solutions">
                  Solutions
                </Link>
              </p>
              <p className="font-medium text-lg m-1 text-white">
                <Link className="hover:text-sky-700" href="/contact-us">
                  Contact Us
                </Link>
              </p>
              <p className="font-medium text-lg m-1 text-white">
                <Link className="hover:text-sky-700" href="/blogs">
                  Blogs
                </Link>
              </p>
            </div>

            <div
              data-aos="fade-up"
              className="text-left ml-7 mb-7 md:w-[25%] md:pt-10"
            >
              <p className="text-2xl font-semibold pb-3 m-1 text-white">
                Our Products
              </p>
              <Link href="/rainwater-harvesting-system">
                <p className="list-none text-[15px] text-white hover:tracking-wide hover:text-sky-700">
                  <ArrowRightAltIcon fontSize="medium" />
                  Rainwater Harvesting System
                </p>
              </Link>
              <Link href="/rainwater-harvesting-vendors-in-delhi-gurgaon">
                <p className="list-none text-[15px] text-white hover:tracking-wide hover:text-sky-700">
                  <ArrowRightAltIcon fontSize="medium" />
                  Rainwater Harvesting System in Delhi
                </p>
              </Link>
              <Link href="/modular-rainwater-harvesting">
                <p className="list-none text-[15px] text-white hover:tracking-wide hover:text-sky-700">
                  <ArrowRightAltIcon fontSize="medium" />
                  Modular Rainwater Harvesting System
                </p>
              </Link>
              <Link href="/roof-top-rainwater-harvesting-system-(RRWHS)-InRain">
                <p className="list-none text-[15px] text-white hover:tracking-wide hover:text-sky-700">
                  <ArrowRightAltIcon fontSize="medium" />
                  Rooftop Rainwater Harvesting System
                </p>
              </Link>
              <Link href="/co-polymer-based-rainwater-harvesting-system">
                <p className="list-none text-[15px] text-white hover:tracking-wide hover:text-sky-700">
                  <ArrowRightAltIcon fontSize="medium" />
                  Polymer Based Rainwater Harvesting System
                </p>
              </Link>
              <Link href="/storm-water-recharge-and-management">
                <p className="list-none text-[15px] text-white hover:tracking-wide hover:text-sky-700">
                  <ArrowRightAltIcon fontSize="medium" />
                  Storm Water Management Company
                </p>
              </Link>
              <Link href="/modular-rainwater-harvesting">
                <p className="list-none text-[15px] text-white hover:tracking-wide hover:text-sky-700">
                  <ArrowRightAltIcon fontSize="medium" />
                  Modular Rainwater Harvesting System for Industries
                </p>
              </Link>
            </div>

            <div
              data-aos="fade-up"
              className="text-left ml-7 md:w-[25%] md:pt-10 pb-10 md:pb-0"
            >
              <p className="text-2xl font-semibold m-1 mb-2 text-white">
                Our Office
              </p>
              <div className="flex mb-5">
                <LocationOnIcon className="mr-2" />
                <a href="https://maps.app.goo.gl/QSZoYkgd8GufagvC6">
                  <p className="font-medium text-base text-white hover:text-sky-700">
                    Plot No 06, KH431, 1st floor, Main Road Chattarpur-Satbari,
                    Satbari, New delhi 110074
                  </p>
                </a>
              </div>
              <p className="list-none mb-2 text-white hover:text-sky-700">
                <a
                  className="text-base"
                  href="mailto:sales@inrainwaterharvesting.com"
                >
                  <MailOutline />
                  sales@inrainwaterharvesting.com
                </a>
              </p>
              <p className="list-none mb-2 text-white">
                <a
                  className=" text-base hover:text-sky-700"
                  href="tel:+919910220794"
                >
                  <CallIcon fontSize="small" />
                  +91-9910220794
                </a>
                <br />
                <a
                  className=" text-base hover:text-sky-700"
                  href="tel:01135823511"
                >
                  <CallIcon fontSize="small" />
                  +01135823511
                </a>
                <br />
                <a
                  className=" text-base hover:text-sky-700"
                  href="tel:+919953070003"
                >
                  <CallIcon fontSize="small" />
                  +91-9953070003
                </a>
              </p>
            </div>
          </div>

          <div className="text-center p-4 pb-10 md:pb-5">
            <p className="text-xs md:text-sm">
              &copy; 2025 InRain Construction Pvt Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
