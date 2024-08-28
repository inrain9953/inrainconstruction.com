import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Button } from "@mui/material";
import logo from "../../public/logo.png";
import stamp from "../../public/stamp.png";
import trophy from "../../public/trophy.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";

export const Navbar = () => {
  function OpenContactForm() {
    document.querySelector(".contact-form").classList.toggle("hidden");
  }

  const [openSidebarMenu, setOpenSidebarMenu] = useState(false);
  function openSidebar() {
    setOpenSidebarMenu(!openSidebarMenu);
  }

  const api = "ab6ca769-e97e-4a70-89fd-4ea195148385";
  const contactapikey = api;
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  function SubmissionAnimation() {
    document.querySelector(".loader").classList.add("onAnimation");
    setTimeout(() => {
      document
        .querySelector(".onFormSubmission")
        .classList.add("onSubmitAnimation");
    }, 2100);
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    setTimeout(() => {
      document.querySelector(".loader").classList.remove("onAnimation");
    }, 2000);

    const formData = new FormData(event.target);

    formData.append("access_key", contactapikey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
  };

  return (
    <>
      <div className=" sticky z-50 top-0">
        <div className="bg-sky-400 flex justify-between items-center p-1">
          {/* For Desktop View */}
          <div className="hidden md:block">
            <div className="ml-5 flex">
              <EmailIcon className="mr-1" fontSize="small" />
              <a
                className="hover:text-green-700 text-sm font-semibold"
                href="mailto:mail@inrainconstruction.com"
              >
                mail@inrainconstruction.com
              </a>{" "}
              &nbsp;
              {/* <a href='mailto:sales@inrainwaterharvesting.com'>sales@inrainwaterharvesting.com</a> */}
              &nbsp; &nbsp; &nbsp;
              <PhoneIcon className="mr-1" fontSize="small" />
              <a
                className="hover:text-green-700 text-sm font-semibold"
                href="tel:+919953070003"
              >
                +91-9953070003
              </a>{" "}
              &nbsp;<p className="mr-2 ml-2 text-sm">|</p>
              <a
                className="hover:text-green-700 text-sm font-semibold"
                href="tel:+01135823511"
              >
                011-35823511
              </a>
            </div>
          </div>

          {/* For Mobile View */}
          <div className="md:hidden">
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

          <div className="md:mr-5 mr-2">
            <Button onClick={OpenContactForm} variant="contained" size="small">
              REQUEST QUOTE
            </Button>
          </div>
        </div>

        <div className="bg-white h-20 md:h-16 flex justify-between items-center">
          <div className="md:ml-7 ml-2">
            <Link href="/">
              <Image className="h-16 w-20 md:h-14" src={logo} alt="img" />
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
            <Link className="hover:text-green-500" href="/about-us">
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
            <Link className="hover:text-green-500" href="/blogs">
              Blogs
            </Link>
          </div>
        </div>
        {/* For Desktop View */}
        <hr />
      </div>

      <div className="fixed hidden z-20 onHover left-1/2 -translate-x-1/2">
        <ul className="bg-white flex flex-col gap-2 shadow-2xl rounded-xl p-5">
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
      <div className="hidden onFormSubmission justify-center items-center z-20 fixed left-0 right-0 top-0 bottom-0">
        <div className="notification">
          <div className="notiglow"></div>
          <div className="notiborderglow"></div>
          <div className="notititle">Thank you {name}</div>
          <div className="notibody">Our team will reach out to you shortly</div>
          <div className="notibody flex justify-center items-center">
            <a href="/">
              <Button variant="contained" size="small" color="success">
                OK
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="hidden contact-form z-10 fixed left-0 right-0 bottom-10">
        <div className="flex justify-center">
          <div className="form-card1 relative m-7 md:w-[30%] md:top-10">
            <div className="form-card2">
              <form onSubmit={onSubmit} className="form bg-gray-400">
                <div className="flex justify-center mt-5">
                  <Image
                    className="w-[100px]"
                    src={logo}
                    alt="img"
                    loading="eager"
                    priority={true}
                    unoptimized={true}
                  />
                </div>
                <p className="form-heading">Get In Touch</p>

                <div className="form-field">
                  <input
                    name="Name"
                    placeholder="Name"
                    className="input-field"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>

                <div className="form-field">
                  <input
                    name="Email"
                    placeholder="Email"
                    className="input-field"
                    type="email"
                  />
                </div>

                <div className="form-field">
                  <input
                    name="Mobile_no"
                    placeholder="Mobile Number"
                    className="input-field"
                    type="tel"
                  />
                </div>

                <div className="form-field">
                  <textarea
                    name="Message"
                    placeholder="Message"
                    cols="30"
                    rows="3"
                    className="input-field"
                  ></textarea>
                </div>

                <div className="md:mt-2 md:mb-2">
                  <input className="w-4 h-4 mr-2" type="checkbox" />
                  <label className="text-black text-base">
                    Yes, I would like to receive communications by call / email
                    about Company's services.{" "}
                  </label>
                </div>

                <button
                  onClick={SubmissionAnimation}
                  type="submit"
                  className="sendMessage-btn"
                >
                  Send Message
                </button>
              </form>
              <CloseIcon
                onClick={() =>
                  document
                    .querySelector(".contact-form")
                    .classList.toggle("hidden")
                }
                className="absolute cursor-pointer text-white top-3 right-3"
              />
            </div>
          </div>
        </div>
      </div>

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
            <Link href="/about-us" style={{ textDecoration: "none" }}>
              About Us
            </Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="/products" style={{ textDecoration: "none" }}>
              Products
            </Link>
          </li>
          {/* <li>
              <a href="/products" style={{ textDecoration: "none" }}>
                Media
              </a>
            </li> */}
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
              <ul className="flex flex-col gap-2 rounded-lg p-5 mobileNavbarServices font-normal bg-sky-600">
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
          <li className="hover:text-green-500">
            <Link href="/blogs" style={{ textDecoration: "none" }}>
              Blogs
            </Link>
          </li>
        </ul>
      </div>
      {/* For Mobile View (SideNav) */}
    </>
  );
};
