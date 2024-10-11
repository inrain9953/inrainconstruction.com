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
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Link } from "react-scroll";
import Image from "next/image";
import { clientSlider1, clientSlider2 } from "../constant";

const ICPLFooter = () => {
  return (
    <>
      <div>
        <div className="mt-20">
          <h3
            data-aos="zoom-in-up"
            className="text-center font-bold text-2xl md:text-4xl"
          >
            Our Happy Clients
          </h3>
          <div
            data-aos="zoom-in-up"
            className="flex overflow-clip align-middle drop-shadow-2xl"
          >
            {clientSlider1.map((items) => (
              <div className="m-7 w-36 md:m-10 carouselAnimation md:w-44">
                <Image
                  alt="img"
                  className="h-20 min-w-20 md:min-w-28 md:h-28 drop-shadow-xl"
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
            data-aos="zoom-in-up"
            className="flex overflow-clip align-middle drop-shadow-2xl"
          >
            {clientSlider2.map((items) => (
              <div className="m-7 w-36 md:m-10 carouselAnimation md:w-44">
                <Image
                  alt="img"
                  className="h-20 min-w-20 md:min-w-28 md:h-28 drop-shadow-xl"
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

      <div>
        <div className="footer-background">
          <div className="md:flex md:mr-7">
            <div
              data-aos="zoom-in-up"
              className="text-left ml-7 pt-10 md:w-[25%]"
            >
              <Link href="#">
                <Image
                  className="w-24 mb-5"
                  src={logo}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
              </Link>
              <div className="flex mb-7 gap-5">
                <Link
                  className="hover:text-white cursor-pointer"
                  to={"icplMain"}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <FacebookIcon fontSize="large" />
                </Link>
                <Link
                  className="hover:text-white cursor-pointer"
                  to={"icplMain"}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <InstagramIcon fontSize="large" />
                </Link>
                <Link
                  className="hover:text-white cursor-pointer"
                  to={"icplMain"}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <XIcon fontSize="large" />
                </Link>
                <Link
                  className="hover:text-white cursor-pointer"
                  to={"icplMain"}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <LinkedInIcon fontSize="large" />
                </Link>
                <Link
                  className="hover:text-white cursor-pointer"
                  to={"icplMain"}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <YouTubeIcon fontSize="large" />
                </Link>
              </div>
            </div>

            <div
              data-aos="zoom-in-up"
              className="text-left ml-7 mb-7 md:w-[25%] md:pt-10"
            >
              <h3 className="text-2xl font-semibold pb-3 m-1 text-white">
                Quick Links
              </h3>
              <p>
                <Link
                  className="font-medium cursor-pointer text-lg m-1 text-white hover:text-sky-700"
                  to={"icplMain"}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Home
                </Link>
              </p>
              <p>
                <Link
                  className="font-medium cursor-pointer text-lg m-1 text-white hover:text-sky-700"
                  to={"icplAbout"}
                  spy={true}
                  smooth={true}
                  offset={250}
                  duration={500}
                >
                  About Us
                </Link>
              </p>
              <p>
                <Link
                  className="font-medium cursor-pointer text-lg m-1 text-white hover:text-sky-700"
                  to="icplProducts"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                >
                  Products
                </Link>
              </p>
              <p>
                <Link
                  className="font-medium cursor-pointer text-lg m-1 text-white hover:text-sky-700"
                  to="icplSolutions"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                >
                  Solutions
                </Link>
              </p>
              <p>
                <Link
                  className="font-medium cursor-pointer text-lg m-1 text-white hover:text-sky-700"
                  to="icplMain"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Contact Us
                </Link>
              </p>
            </div>

            <div
              data-aos="zoom-in-up"
              className="text-left ml-7 mb-7 md:w-[25%] md:pt-10"
            >
              <Link
                className="text-2xl font-semibold cursor-pointer pb-3 m-1 text-white hover:text-sky-700"
                to="icplProducts"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                Our Products
              </Link>
              <Link
                to="icplMain"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <p className="list-none text-[15px] cursor-pointer text-white hover:tracking-wide hover:text-sky-700">
                  <ArrowRightAltIcon fontSize="medium" />
                  Rainwater Harvesting System
                </p>
              </Link>
              <Link
                to="icplMain"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <p className="list-none text-[15px] cursor-pointer text-white hover:tracking-wide hover:text-sky-700">
                  <ArrowRightAltIcon fontSize="medium" />
                  Rainwater Harvesting System in Delhi
                </p>
              </Link>
              <Link
                to="icplMain"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <p className="list-none text-[15px] cursor-pointer text-white hover:tracking-wide hover:text-sky-700">
                  <ArrowRightAltIcon fontSize="medium" />
                  Modular Rainwater Harvesting System
                </p>
              </Link>
              <Link
                to="icplMain"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <p className="list-none text-[15px] cursor-pointer text-white hover:tracking-wide hover:text-sky-700">
                  <ArrowRightAltIcon fontSize="medium" />
                  Rooftop Rainwater Harvesting System
                </p>
              </Link>
              <Link
                to="icplMain"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <p className="list-none text-[15px] cursor-pointer text-white hover:tracking-wide hover:text-sky-700">
                  <ArrowRightAltIcon fontSize="medium" />
                  Polymer Based Rainwater Harvesting System
                </p>
              </Link>
              <Link
                to="icplMain"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <p className="list-none text-[15px] cursor-pointer text-white hover:tracking-wide hover:text-sky-700">
                  <ArrowRightAltIcon fontSize="medium" />
                  Storm Water Management Company
                </p>
              </Link>
              <Link
                to="icplMain"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <p className="list-none text-[15px] cursor-pointer text-white hover:tracking-wide hover:text-sky-700">
                  <ArrowRightAltIcon fontSize="medium" />
                  Modular Rainwater Harvesting System for Industries
                </p>
              </Link>
            </div>

            <div
              data-aos="zoom-in-up"
              className="text-left ml-7 md:w-[25%] md:pt-10"
            >
              <h3 className="text-2xl font-semibold m-1 mb-2 text-white">
                Our Office
              </h3>
              <div className="flex mb-5">
                <LocationOnIcon className="mr-2" />
                <Link
                  to="icplMain"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <p className="font-medium text-base cursor-pointer text-white hover:text-sky-700">
                    Plot No 06, KH431, 1st floor, Main Road Chattarpur-Satbari,
                    Satbari, New delhi 110074
                  </p>
                </Link>
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
              <p className="list-none mb-2 text-white hover:text-sky-700">
                <a className=" text-base" href="tel:+919910220794">
                  <CallIcon fontSize="small" />
                  +91-9910220794
                </a>
              </p>
              <p className="list-none mb-2 text-white hover:text-sky-700">
                <a className="text-base" href="tel:+9101143791960">
                  <CallIcon fontSize="small" />
                  +91 01135823511
                </a>
              </p>
            </div>
          </div>

          <div className="text-center p-4">
            <p className="text-xs md:text-sm">
              ©Copyright 2024 InRain Construction Pvt Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ICPLFooter;
