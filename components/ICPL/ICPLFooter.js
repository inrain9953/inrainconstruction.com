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
import { Link } from "react-scroll";
import Image from "next/image";
import { clientSlider1, clientSlider2 } from "../constant";
import Marquee from "react-fast-marquee";

const ICPLFooter = () => {
  return (
    <>
      <div>
        <div className="mt-20">
          <h3
            data-aos="fade-up"
            className="text-center font-bold text-2xl md:text-4xl"
          >
            Our Happy Clients
          </h3>
          <div className="flex flex-col gap-3 mt-5 mb-8">
            <div className="w-full flex">
              <Marquee
                gradient={false}
                speed={80}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
                className="md:h-[230px] h-[200px]"
              >
                {clientSlider1.map((item, i) => (
                  <div
                    key={i}
                    className="m-3 shadow-xl rounded-2xl md:h-[160px] h-[110px]"
                  >
                    <Image
                      src={item.img}
                      width={200}
                      height={200}
                      alt={item.name}
                      className="rounded-2xl border h-[100%] w-[100%]"
                    />
                    <p className="flex items-center justify-center text-center text-[15px] font-semibold mt-3">
                      {item.description}
                    </p>
                  </div>
                ))}
              </Marquee>
            </div>

            <div className="w-full flex">
              <Marquee
                gradient={false}
                speed={80}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="right"
                className="md:h-[230px] h-[200px]"
              >
                {clientSlider2.map((item, i) => (
                  <div
                    key={i}
                    className="m-3 shadow-xl rounded-2xl md:h-[160px] h-[110px]"
                  >
                    <Image
                      src={item.img}
                      width={200}
                      height={200}
                      alt={item.name}
                      className="rounded-2xl border h-[100%] w-[100%]"
                    />
                    <p className="flex items-center justify-center text-center text-[15px] mt-3 font-semibold">
                      {item.description}
                    </p>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="footer-background">
          <div className="md:flex md:mr-7">
            <div data-aos="fade-up" className="text-left ml-7 pt-10 md:w-[25%]">
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
              data-aos="fade-up"
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
              data-aos="fade-up"
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
              data-aos="fade-up"
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
