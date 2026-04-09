import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import { useState } from "react";
import contactbg from "./../public/contact_bg.jpg";
import logo from "./../public/logo.png";
import tree from "./../public/tree.png";
import { Button } from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import PopUp from "@/components/popup";
import { MailOutline } from "@mui/icons-material";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  const title = "Contact US | InRain® Construction Pvt. Ltd.";
  const desc =
    "Contact US : The Company has Successfully Installed Morethan 400 Rain Water Harvesting Projects. sales@inrainwaterharvesting.com";
  const canonical = "https://www.inrainconstruction.com/contact-us";
  const keyword =
    "Contact Us, InRain Water Harvesting, ICPL Contact, InRain® Construction Pvt. Ltd., Rainwater Harvesting for Industries";
  const ogUrl = "https://www.inrainconstruction.com/contact-us";
  const ogTitle = "Contact US | InRain™ Construction Pvt. Ltd.";
  const ogDescription =
    "Contact US : The Company has Successfully Installed Morethan 400 Rain Water Harvesting Projects. sales@inrainwaterharvesting.com";
  const twittertitle = "Contact US | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Contact US : The Company has Successfully Installed Morethan 400 Rain Water Harvesting Projects. sales@inrainwaterharvesting.com";

  const [myname, setMyname] = useState("");
  const [myemail, setMyemail] = useState("");
  const [mymobile, setMymobile] = useState("");
  const [mymessage, setMymessage] = useState("");
  const GoogleAds = "This is not from Google Ads";

  const handleMynameChange = (e) => {
    setMyname(e.target.value);
  };

  function onFormSubmissionAnimation() {
    document.querySelector(".loader").classList.add("onContactAnimation");
    setTimeout(() => {
      document
        .querySelector(".onContactFormSubmission")
        .classList.add("onContactSubmitAnimation");
    }, 2100);
  }

  const api = "ab6ca769-e97e-4a70-89fd-4ea195148385";
  const contactapikey = api;

  const onFormSubmit = async (event) => {
    if (!myname || !myemail || !mymobile || !mymessage) {
      alert("Please fill all the fields");
      return;
    }

    event.preventDefault();
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

    try {
      const response = await axios.post("/api/signup", {
        myname,
        myemail,
        mymobile,
        mymessage,
        GoogleAds,
      });
      if (response.data.success) {
        setTimeout(() => {
          document
            .querySelector(".loader")
            .classList.remove("onContactAnimation");
        }, 2000);
      }
    } catch (error) {
      alert(
        "An error occurred while submitting the form. Please try again later.",
      );
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="language" content="en" />
        <meta name="author" content="InRain® Construction Pvt. Ltd." />
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
      <div data-aos="fade-up">
        <div>
          <Image
            className="w-full h-28 md:h-72 md:rounded-xl md:shadow-2xl relative"
            src={contactbg}
            alt="img"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
          <div className="absolute md:bottom-1 bottom-0 md:left-10 left-2">
            <p className="text-xs md:text-lg text-white">
              <Link href={"/"}>Home</Link> / Contact Us
            </p>
          </div>
        </div>
        <div className="hidden md:block text-center absolute top-10 right-10 text-white">
          <h1 className="text-3xl font-semibold">Contact Us</h1>
          <div>
            <p className="text-lg mt-2 mb-2">
              The Company has Successfully Installed Morethan 4000+ Rainwater
              Harvesting Projects.
            </p>
            <a
              className="hover:text-green-500 mr-5"
              href="mailto:sales@inrainwaterharvesting.com"
            >
              <MailOutline fontSize="small" />
              sales@inrainwaterharvesting.com
            </a>
            <a className="hover:text-green-500 ml-5" href="tel:+919910220794">
              <CallIcon fontSize="small" />
              +91-9910220794
            </a>
          </div>
          <div>
            <a
              className="font-medium text-base hover:text-sky-700"
              href="https://maps.app.goo.gl/QSZoYkgd8GufagvC6"
            >
              <LocationOnIcon fontSize="small" />
              Plot No 06, KH431, 1st floor, Main Road Chattarpur-Satbari,
              Satbari, New delhi 110074
            </a>
          </div>
        </div>
      </div>

      <div className="loader md:top-[80%] top-0 right-0 left-0 md:left-[40%] bottom-0 hidden"></div>
      <div className="hidden onContactFormSubmission justify-center items-center z-20 fixed left-0 right-0 top-0 bottom-0">
        <div className="notification1">
          <div className="notiglow1"></div>
          <div className="notiborderglow1"></div>
          <div className="notititle1">Thank you {myname}</div>
          <div className="notibody1">
            Our team will reach out to you shortly
          </div>
          <div className="notibody1 flex justify-center items-center">
            <Link href="/">
              <Button variant="contained" size="small" color="success">
                OK
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="md:flex m-10 md:justify-center md:items-center md:gap-10 md:w-[75%] md:m-auto"
      >
        <div className="hidden md:block">
          <Image
            className="w-full"
            src={tree}
            alt="img"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
        </div>

        <div className="block md:hidden text-center text-black">
          <h1 className="text-3xl font-semibold">Contact Us</h1>
          <div>
            <p className="text-base mt-2 mb-2">
              The Company has Successfully Installed Morethan 400 Rainwater
              Harvesting Projects.
            </p>
            <a
              className="hover:text-green-500"
              href="mailto:sales@inrainwaterharvesting.com"
            >
              <MailOutline fontSize="small" />
              sales@inrainwaterharvesting.com
            </a>
            <br />
            <a className="hover:text-green-500" href="tel:+919910220794">
              <CallIcon fontSize="small" />
              +91-9910220794
            </a>
          </div>
          <div>
            <a
              className="font-medium text-base hover:text-sky-700"
              href="https://maps.app.goo.gl/QSZoYkgd8GufagvC6"
            >
              <LocationOnIcon fontSize="small" />
              Plot No 06, KH431, 1st floor, Main Road Chattarpur-Satbari,
              Satbari, New delhi 110074
            </a>
          </div>
        </div>

        <div data-aos="fade-up" className="mt-10 mb-10 contact-form">
          <div className="flex justify-center">
            <div className="form-card1">
              <div className="form-card2 relative">
                <form className="form bg-gray-400" onSubmit={onFormSubmit}>
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
                  <p className="form-heading mt-3 mb-3 text-black">
                    Get In Touch
                  </p>

                  <div className="form-field">
                    <input
                      placeholder="Name"
                      className="input-field"
                      type="text"
                      name="Name"
                      value={myname}
                      onChange={handleMynameChange}
                    />
                  </div>

                  <div className="form-field">
                    <input
                      placeholder="Email"
                      className="input-field"
                      type="email"
                      name="Email"
                      value={myemail}
                      onChange={(e) => setMyemail(e.target.value)}
                    />
                  </div>

                  <div className="form-field">
                    <input
                      placeholder="Mobile Number"
                      className="input-field"
                      type="tel"
                      name="Mobile_No"
                      value={mymobile}
                      onChange={(e) => setMymobile(e.target.value)}
                    />
                  </div>

                  <div className="form-field">
                    <textarea
                      placeholder="Message"
                      cols="30"
                      rows="3"
                      className="input-field"
                      name="message"
                      value={mymessage}
                      onChange={(e) => setMymessage(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="md:mt-2 md:mb-2">
                    <input className="w-4 h-4 mr-2" type="checkbox" />
                    <label className="text-black text-base">
                      Yes, I would like to receive communications by call /
                      email about Company's services.{" "}
                    </label>
                  </div>

                  <button
                    onClick={onFormSubmissionAnimation}
                    className="sendMessage-btn"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
