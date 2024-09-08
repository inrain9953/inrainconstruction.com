import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import axios from "axios";
import Script from "next/script";
import { useRouter } from "next/router";

const ICPLMain = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
    });
  }, []);

  const [myname, setMyname] = useState("");
  const [myemail, setMyemail] = useState("");
  const [mymobile, setMymobile] = useState("");
  const [mymessage, setMymessage] = useState("");

  const router = useRouter();

  const handleICPLMynameChange = (e) => {
    setMyname(e.target.value);
  };

  function onICPLFormSubmissionAnimation() {
    document.querySelector(".loader").classList.add("onICPLContactAnimation");
    setTimeout(() => {
      document
        .querySelector(".loader")
        .classList.remove("onICPLContactAnimation");
      router.push("/thank-you");
    }, 2500);
  }

  
  const api = "ab6ca769-e97e-4a70-89fd-4ea195148385";
  const contactapikey = api;

  const onICPLFormSubmit = async (event) => {
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
      });
      if (response.data.success) {
        console.log("Data Submitted Successfully");
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  return (
    <>
      <div className="ICPLpage-background">
        <div className="pt-10 md:flex md:justify-center md:items-center md:gap-10">
          <div data-aos="zoom-in-up" className="text-center">
            <h1 className="text-base text-green-800 font-semibold align-middle md:text-2xl">
              "A Water Conservation and Management Company"
            </h1>
            <h2 className="text-black text-2xl font-semibold drop-shadow-md md:text-5xl md:m-5 mt-3 mb-3">
              InRain® Construction Pvt. Ltd.(ICPL)
            </h2>
            <a href="tel:+919953070003">
              <Button variant="contained" color="secondary">
                Call Us
              </Button>
            </a>
          </div>

          <div data-aos="zoom-in-up" className="m-5 mt-10 md:w-96">
            <div data-aos="zoom-in-up" className="contact-form">
              <div className="flex justify-center">
                <div className="form-card1">
                  <div className="form-card2 relative">
                    <form
                      className="form bg-gray-300"
                      onSubmit={onICPLFormSubmit}
                    >
                      <p className="form-heading mt-3 mb-3 text-black text-2xl">
                        Get A Free Quote
                      </p>

                      <div className="form-field">
                        <input
                          placeholder="Name"
                          className="input-field"
                          type="text"
                          name="Name"
                          value={myname}
                          onChange={handleICPLMynameChange}
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
                        onClick={onICPLFormSubmissionAnimation}
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
        </div>
      </div>
    </>
  );
};

export default ICPLMain;
