import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import logo from "../../public/logo.png";
import stamp from "../../public/stamp.png";
import trophy from "../../public/trophy.png";
import { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

const ICPLNavbar = () => {
  const [openSidebarMenu, setOpenSidebarMenu] = useState(false);
  function openSidebar() {
    setOpenSidebarMenu(!openSidebarMenu);
  }

  return (
    <>
      <div className=" sticky z-50 top-0">
        <div className="bg-sky-400 flex justify-center items-center p-1 md:hidden">
          {/* For Mobile View */}
          <div className="">
            <div className="flex items-center">
              <PhoneIcon className="mr-1" fontSize="small" />
              <a
                className="hover:text-green-700 text-md font-semibold"
                href="tel:+919910220794"
              >
                +91-9910220794
              </a>{" "}
            </div>
          </div>
        </div>

        <div className="bg-white h-20 md:h-20 flex justify-between items-center">
          <div className="md:ml-7 ml-2">
            <Image
              className="h-16 w-20 md:h-14"
              src={logo}
              alt="img"
              loading="eager"
              priority={true}
              unoptimized={true}
            />
          </div>

          {/* Hamburger */}
          <div className="mr-2 md:hidden">
            <label className="hamburger">
              <input type="checkbox" onClick={openSidebar} />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
          {/* Hamburger */}

          {/* For Desktop View */}
          <div className="hidden md:block">
            <div className="flex gap-5 mr-7">
              <div className="flex items-center">
                <div className="mr-2 text-right">
                  <p className="text-base font-semibold uppercase">
                    The Best Industrial
                  </p>
                  <p className="text-sm text-gray-600">Solution Provider</p>
                </div>
                <Image
                  className="h-10"
                  src={trophy}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
              </div>

              <div className="flex items-center">
                <div className="mr-2 text-right">
                  <p className="text-base font-semibold uppercase">
                    Certified Company
                  </p>
                  <p className="text-sm text-gray-600">ISO 9001:2015</p>
                </div>
                <Image
                  className="h-10"
                  src={stamp}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
              </div>

              <div className="flex items-center">
                <div className="mr-2 text-right">
                  <p className="text-base font-semibold uppercase">
                    Certified Company
                  </p>
                  <p className="text-sm text-gray-600">ISO 14001:2015</p>
                </div>
                <Image
                  className="h-10"
                  src={stamp}
                  alt="img"
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                />
              </div>
            </div>
          </div>
          {/* For Desktop View */}
        </div>
        <hr className="border-1"></hr>

        {/* For Desktop View */}
        <div className="bg-white hidden md:block">
          <div className="flex justify-center items-center gap-20 h-10 text-[17px]">
            <Link
              to={"icplMain"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-green-500 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to={"icplAbout"}
              spy={true}
              smooth={true}
              offset={250}
              duration={500}
              className="hover:text-green-500 cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="icplProducts"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="hover:text-green-500 cursor-pointer"
            >
              Products
            </Link>
            <Link
              to="icplSolutions"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="hover:text-green-500 cursor-pointer"
            >
              Solutions
            </Link>
            <Link
              to="icplMain"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-green-500 cursor-pointer"
            >
              Contact us
            </Link>
          </div>
        </div>
        {/* For Desktop View */}
        <hr />
      </div>

      <div className="loader top-0 right-0 left-0 bottom-0 fixed hidden"></div>

      {/* For Mobile View (SideNav) */}
      <div className="md:hidden">
        <ul
          className="sidebar-ul mt-28 rounded-xl bg-sky-300 font-semibold"
          style={openSidebarMenu ? { top: "1px" } : {}}
        >
          <li className="hover:text-green-500">
            <Link
              to={"icplMain"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
          </li>
          <li className="hover:text-green-500">
            <Link
              to={"icplAbout"}
              spy={true}
              smooth={true}
              offset={250}
              duration={500}
              style={{ textDecoration: "none" }}
            >
              About Us
            </Link>
          </li>
          <li className="hover:text-green-500">
            <Link
              to="icplProducts"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              style={{ textDecoration: "none" }}
            >
              Products
            </Link>
          </li>
          <li className="hover:text-green-500">
            <Link
              to="icplSolutions"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              style={{ textDecoration: "none" }}
            >
              Solutions
            </Link>
          </li>
          <li className="hover:text-green-500">
            <Link
              to="icplMain"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={{ textDecoration: "none" }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      {/* For Mobile View (SideNav) */}
    </>
  );
};

export default ICPLNavbar;
