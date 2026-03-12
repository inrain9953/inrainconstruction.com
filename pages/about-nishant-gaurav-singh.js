import { Navbar } from "@/components/Navbar/Navbar";
import PopUp from "@/components/popup";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Footer } from "@/components/Footer/Footer";
import md from "./../public/inrain-md.jpg";
import ICPLCertification from "@/components/ICPL/ICPLCertification";
import { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const images = [
  "/inrain_ppt/inrain1.jpg",
  "/inrain_ppt/inrain2.jpg",
  "/inrain_ppt/inrain3.jpg",
  "/inrain_ppt/inrain4.jpg",
  "/inrain_ppt/inrain5.jpg",
  "/inrain_ppt/inrain6.jpg",
  "/inrain_ppt/inrain7.jpg",
  "/inrain_ppt/inrain8.jpg",
  "/inrain_ppt/inrain9.jpg",
];

const AboutICPL = () => {
  const title =
    "About Nishant Gaurav Singh (ICPL) | InRain® Construction Pvt. Ltd.";
  const desc =
    "Modular Rainwater Harvesting by ICPL—India’s leader in sustainable, load-bearing, polymer-based RWH systems for smart cities, industries & urban infrastructure.";
  const keyword =
    "About Nishant Gaurav - InRain, Indian Green Building Council (IGBC) Certification, ICPL, Rainwater Harvesting, Modular Rainwater Harvesting System, Sustainable Water Management, Load-bearing RWH, Smart City Water Solutions, Urban Stormwater Management, Rainwater Harvesting India, Polymer Based RWH, Rooftop Harvesting. ";
  const canonical = "https://www.inrainconstruction.com/about_icpl";
  const ogUrl = "https://www.inrainconstruction.com/about_icpl";
  const ogTitle = "About ICPL | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Modular Rainwater Harvesting by ICPL—India’s leader in sustainable, load-bearing, polymer-based RWH systems for smart cities, industries & urban infrastructure.";
  const twittertitle = "About ICPL | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Modular Rainwater Harvesting by ICPL—India’s leader in sustainable, load-bearing, polymer-based RWH systems for smart cities, industries & urban infrastructure.";

  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [index, setIndex] = useState(0);
  const viewerRef = useRef(null);
  const correctPassword = "9953070003"; // change this

  const startPPT = () => {
    setIndex(0);
    setOpen(true);

    setTimeout(() => {
      if (viewerRef.current?.requestFullscreen) {
        viewerRef.current.requestFullscreen();
      }
    }, 100);
  };

  const closeViewer = () => {
    setOpen(false);

    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setOpen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
  const handleKeyDown = (e) => {
    if (!open) return;

    if (e.key === "ArrowRight") {
      nextSlide();
    }

    if (e.key === "ArrowLeft") {
      prevSlide();
    }

    if (e.key === "Escape") {
      closeViewer();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [open]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleToggle = () => {
    setShowPopup(true);
  };
  const checkPassword = () => {
    if (password === correctPassword) {
      setAuthorized(true);
      setShowPopup(false);
      setPassword("");
    } else {
      alert("Wrong Password");
      setPassword("");
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

      <div className="container mx-auto bg-gray-50 md:pl-10 md:pr-10 md:gap-5 p-4 md:grid md:grid-cols-2 justify-center items-center">
        <div className="text-justify">
          <h1 className="md:text-[30px] text-[20px] font-semibold">
            About NISHANT GAURAV SINGH - InRain
          </h1>
          <p className="md:text-[17px] text-[15px] drop-shadow-lg md:mt-2">
            InRain® Construction Pvt. Ltd. (ICPL) is the{" "}
            <a
              className="text-sky-500 hover:text-green-500 md:text-[20px] text-[18px] font-semibold"
              target="_blank"
              href="https://www.inrainconstruction.com/modular-rainwater-harvesting"
            >
              Modular Rainwater Harvesting
            </a>{" "}
            subsidiary of Singh & Singh Construction—an experienced civil
            construction firm with over 30 years of expertise in India.
            Leveraging this foundation, ICPL has become a national leader in
            sustainable water management.
            <br />
            <br />
            With more than{" "}
            <bold className="text-green-500 text-[18px] md:text-[20px] font-semibold">
              4,000 successful installations
            </bold>
            , ICPL’s innovative,{" "}
            <a
              className="text-sky-500 hover:text-green-500 text-[18px] md:text-[20px] font-semibold"
              target="_blank"
              href="https://www.inrainconstruction.com/co-polymer-based-rainwater-harvesting-system"
            >
              Polymer-based Rainwater Harvesting Systems
            </a>{" "}
            have conserved billions of gallons of rainwater across the
            residential, commercial, and public sectors. Our flagship solution
            is a cutting-edge, scientific RWH system featuring a world‑first
            load‑bearing modular structure capable of supporting over
            50 t/m²—ideal for high-traffic areas like roads and parking lots.
            <br />
            <br />
            Our in‑house R&D and manufacturing facilities allow us to uphold
            strict quality, safety, and sustainability standards—principles we
            proudly champion as part of the{" "}
            <bold className="text-green-500 text-[18px] md:text-[20px] font-semibold">
              “Make in India”
            </bold>{" "}
            initiative. ICPL’s rainwater harvesting technology—based on
            German-inspired modular designs—offers quick installation, high
            water-use efficiency (95% usable capacity vs. ~55% in traditional
            civil pits), and low maintenance requirements.
            <br />
            <br />
            Our systems aren’t just functional—they’re also aesthetic and
            adaptable, delivering turnkey solutions for rooftops, underground
            recharge pits, and{" "}
            <a
              href="https://www.inrainconstruction.com/storm-water-recharge-and-management"
              target="_blank"
              className="text-sky-500 hover:text-green-500 text-[18px] md:text-[20px] font-semibold"
            >
              Stormwater Management in Urban and Industrial Environments.
            </a>
            <br />
            <br />
            Backed by decades of civil expertise and a passion for eco-friendly
            innovation, ICPL empowers clients—from municipal bodies and smart
            cities to residential societies and industries—to sustainably manage
            water resources while reducing environmental impact.
          </p>
        </div>
        <div className="md:flex mt-5 md:mt-0 md:flex-col justify-center items-center">
          <Image
            src={md}
            alt="Mr. Nishant Gaurav (Chairman & Managing Director)"
            className="w-96 h-auto m-auto rounded-2xl shadow-2xl "
            loading="eager"
            priority={true}
            unoptimized={true}
          />
          <h2
            onClick={handleToggle}
            className="md:text-[20px] cursor-pointer text-[18px] text-center m-2 font-semibold"
          >
            Mr. Nishant Gaurav
            <br />( Chairman & Managing Director )
          </h2>
          <p className="md:text-[14px] text-[12px] text-center">
            A dynamic leader driving innovation and excellence in the Rainwater
            Harvesting industry.
          </p>
          <div className="mt-5 h-5 flex gap-2 justify-center items-center">
            {/* Buttons (visible only after correct password) */}
            {authorized && (
              <div className="mt-4 space-x-3">
                <Button
                  onClick={startPPT}
                  variant="contained"
                  className="bg-sky-500 rounded-xl"
                >
                  Start PPT
                </Button>
                <Link
                  href={
                    "https://drive.google.com/file/d/1fDlStawe6z9hgybtZscTy9BmC5G7MVeZ/view?usp=sharing"
                  }
                  target="_blank"
                >
                  <Button variant="contained" className="bg-sky-500 rounded-xl">
                    Show TDS
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div>
          <h2 className="text-center text-xl font-semibold">
            Indian Green Building Council (IGBC) Certification
          </h2>
        </div>
        <div className="md:flex justify-center items-center gap-5 mt-5">
          <div>
            <Image
              className="md:h-[350px]"
              width={500}
              height={500}
              src={"/igbc_certificate.jpg"}
            />
          </div>
          <div className="m-2 md:m-0">
            <Image width={500} height={500} src={"/igbc_award.jpg"} />
          </div>
        </div>
      </div>

      {/* Password Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[300px] shadow-xl">
            <h3 className="text-lg font-semibold mb-3">Enter Password</h3>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border w-full p-2 rounded mb-4"
              placeholder="Password"
            />

            <div className="flex justify-between">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>

              <button
                onClick={checkPassword}
                className="px-4 py-2 bg-sky-500 text-white rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Viewer */}
      {open && (
        <div
          ref={viewerRef}
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
        >
          {/* Close Button */}
          <button
            onClick={closeViewer}
            className="absolute top-6 right-6 text-white"
          >
            <CloseIcon fontSize="large" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute bg-green-500 left-10 text-white"
          >
            <ArrowBackIosNewIcon fontSize="large" />
          </button>

          {/* Image */}
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={images[index]}
              alt="ppt slide"
              width={1600}
              height={900}
              className="object-contain max-h-[95vh] w-auto"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-10 text-white bg-green-500"
          >
            <ArrowForwardIosIcon fontSize="large" />
          </button>
        </div>
      )}

      <ICPLCertification />
      <Footer />
    </>
  );
};

export default AboutICPL;
