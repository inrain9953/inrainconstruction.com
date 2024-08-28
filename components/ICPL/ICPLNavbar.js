import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import logo from "../../public/logo.png";
import stamp from "../../public/stamp.png";
import trophy from "../../public/trophy.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useState } from "react";
import Image from "next/image";

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
            <div className="ml-2 flex items-center">
              <PhoneIcon className="mr-1" fontSize="small" />
              <a
                className="hover:text-green-700 text-xs font-semibold"
                href="tel:+919953070003"
              >
                +91-9953070003
              </a>{" "}
              &nbsp;<p className="mr-1 ml-1 text-xs">|</p>
              <a
                className="hover:text-green-700 text-xs font-semibold"
                href="tel:+01135823511"
              >
                011-35823511
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white h-20 md:h-20 flex justify-between items-center">
          <div className="md:ml-7 ml-2">
            <Link href="/">
              <Image
                className="h-16 w-20 md:h-14"
                src={logo}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </Link>
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
            <Link className="hover:text-green-500" href="/">
              Home
            </Link>
            <Link className="hover:text-green-500" href="/about">
              About Us
            </Link>
            <Link className="hover:text-green-500" href="/products">
              Products
            </Link>
            {/* <a className="hover:text-green-500" href="#">
              Media
            </a> */}
            <p
              className="hover:text-green-500 cursor-pointer"
              onClick={() => {
                document
                  .querySelector(".onHover")
                  .classList.toggle("showService");
              }}
            >
              Services
              <ArrowDropDownIcon className="ArrowDown" />
              {/* <ArrowDropUpIcon className="ArrowUp" /> */}
            </p>
            <Link className="hover:text-green-500" href="/solutions">
              Solutions
            </Link>
            <Link className="hover:text-green-500" href="/contact-us">
              Contact us
            </Link>
          </div>
        </div>
        {/* For Desktop View */}
        <hr />
      </div>

      <div className="fixed hidden z-20 onHover left-1/2 -translate-x-1/2">
        <ul className="bg-white flex flex-col gap-3 rounded-lg p-5">
          <Link href="/rainwater-harvesting-system-for-warehouse">
            <li className="hover:text-green-500">
              <ArrowRightAltIcon size="small" />
              Rainwater Harvesting System For Warehouses
            </li>
          </Link>
          <Link href="/co-polymer-based-rainwater-harvesting-system">
            <li className="hover:text-green-500">
              <ArrowRightAltIcon size="small" />
              Co-Polymer based Rainwater Harvesting System
            </li>
          </Link>
          <Link href="/modular-rainwater-harvesting">
            <li className="hover:text-green-500">
              <ArrowRightAltIcon size="small" />
              Modular Rainwater Harvesting System
            </li>
          </Link>
          <Link href="/frp-based-rainwater-harvesting-system">
            <li className="hover:text-green-500">
              <ArrowRightAltIcon size="small" />
              FRP based Rainwater Harvesting System
            </li>
          </Link>
          <Link href="/Rainwater-Harvesting-System-for-Roof-Top-Effective-Water-Solutions">
            <li className="hover:text-green-500">
              <ArrowRightAltIcon size="small" />
              Rooftop Rainwater Harvesting System
            </li>
          </Link>
          <Link href="/ground-water-recharge-system-for-industries">
            <li className="hover:text-green-500">
              <ArrowRightAltIcon size="small" />
              Ground Water Recharge System For Industries
            </li>
          </Link>
          <Link href="/rainwater-harvesting-vendors-in-delhi-gurgaon">
            <li className="hover:text-green-500">
              <ArrowRightAltIcon size="small" />
              Rainwater Harvesting Vendors in Delhi-Gurgaon
            </li>
          </Link>
          <Link href="/box-type-rainwater-harvesting">
            <li className="hover:text-green-500">
              <ArrowRightAltIcon size="small" />
              Box Type Rainwater Harvesting System
            </li>
          </Link>
          <Link href="/storm-water-recharge-and-management">
            <li className="hover:text-green-500">
              <ArrowRightAltIcon size="small" />
              Storm Water Recharge and Management
            </li>
          </Link>
          <Link href="/bioswale-for-rainwater-drain">
            <li className="hover:text-green-500">
              <ArrowRightAltIcon size="small" />
              Bioswale for Rainwater Drain
            </li>
          </Link>
          <Link href="/rainwater-harvesting-system">
            <li className="hover:text-green-500">
              <ArrowRightAltIcon size="small" />
              Rainwater Harvesting System
            </li>
          </Link>
          <Link href="/rainwater-harvesting-installation-company">
            <li className="hover:text-green-500">
              <ArrowRightAltIcon size="small" />
              Rainwater Harvesting Installation Company
            </li>
          </Link>
          <Link href="/rainwater-harvesting-manufacturers">
            <li className="hover:text-green-500">
              <ArrowRightAltIcon size="small" />
              Rainwater Harvesting Manufacturers
            </li>
          </Link>
        </ul>
      </div>

      <div className="loader top-0 right-0 left-0 bottom-0 fixed hidden"></div>

      {/* For Mobile View (SideNav) */}
      <div className="md:hidden">
        <ul
          className="sidebar-ul mt-28 rounded-xl bg-sky-300 font-semibold"
          style={openSidebarMenu ? { top: "1px" } : {}}
        >
          <li className="hover:text-green-500">
            <Link href="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="/about" style={{ textDecoration: "none" }}>
              About Us
            </Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="/products" style={{ textDecoration: "none" }}>
              Products
            </Link>
          </li>
          <li className="text-center cursor-pointer">
            <p
              onClick={() => {
                document
                  .querySelector(".onHoverMobile")
                  .classList.toggle("showServiceMobile");
              }}
              style={{ textDecoration: "none" }}
            >
              Services
              <ArrowDropDownIcon />
            </p>
            <div className="relative text-left hidden z-20 onHoverMobile">
              <ul className="flex flex-col gap-2 rounded-lg p-5 text-xs font-normal bg-sky-600">
                <li className="hover:text-green-500">
                  <Link href="/rainwater-harvesting-system-for-warehouse">
                    <ArrowRightAltIcon size="small" />
                    Rainwater Harvesting System For Warehouses
                  </Link>
                </li>
                <li className="hover:text-green-500">
                  <Link href="/co-polymer-based-rainwater-harvesting-system">
                    <ArrowRightAltIcon size="small" />
                    Co-Polymer based Rainwater Harvesting System
                  </Link>
                </li>
                <li className="hover:text-green-500">
                  <Link href="/modular-rainwater-harvesting">
                    <ArrowRightAltIcon size="small" />
                    Modular Rainwater Harvesting System
                  </Link>
                </li>
                <li className="hover:text-green-500">
                  <Link href="/frp-based-rainwater-harvesting-system">
                    <ArrowRightAltIcon size="small" />
                    FRP based Rainwater Harvesting System
                  </Link>
                </li>
                <li className="hover:text-green-500">
                  <Link href="/Rainwater-Harvesting-System-for-Roof-Top-Effective-Water-Solutions">
                    <ArrowRightAltIcon size="small" />
                    Rooftop Rainwater Harvesting System
                  </Link>
                </li>
                <li className="hover:text-green-500">
                  <Link href="/ground-water-recharge-system-for-industries">
                    <ArrowRightAltIcon size="small" />
                    Ground Water Recharge System For Industries
                  </Link>
                </li>
                <li className="hover:text-green-500">
                  <Link href="/rainwater-harvesting-vendors-in-delhi-gurgaon">
                    <ArrowRightAltIcon size="small" />
                    Rainwater Harvesting Vendors in Delhi-Gurgaon
                  </Link>
                </li>
                <li className="hover:text-green-500">
                  <Link href="/box-type-rainwater-harvesting">
                    <ArrowRightAltIcon size="small" />
                    Box Type Rainwater Harvesting System
                  </Link>
                </li>
                <li className="hover:text-green-500">
                  <Link href="/storm-water-recharge-and-management">
                    <ArrowRightAltIcon size="small" />
                    Storm Water Recharge and Management
                  </Link>
                </li>
                <li className="hover:text-green-500">
                  <Link href="/bioswale-for-rainwater-drain">
                    <ArrowRightAltIcon size="small" />
                    Bioswale for Rainwater Drain
                  </Link>
                </li>
                <li className="hover:text-green-500">
                  <Link href="/rainwater-harvesting-system">
                    <ArrowRightAltIcon size="small" />
                    Rainwater Harvesting System
                  </Link>
                </li>
                <li className="hover:text-green-500">
                  <Link href="/rainwater-harvesting-installation-company">
                    <ArrowRightAltIcon size="small" />
                    Rainwater Harvesting Installation Company
                  </Link>
                </li>
                <li className="hover:text-green-500">
                  <Link href="/rainwater-harvesting-manufacturers">
                    <ArrowRightAltIcon size="small" />
                    Rainwater Harvesting Manufacturers
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="hover:text-green-500">
            <Link href="/solutions" style={{ textDecoration: "none" }}>
              Solutions
            </Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="/contact-us" style={{ textDecoration: "none" }}>
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
