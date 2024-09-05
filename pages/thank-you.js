import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import rain2 from "./../public/tree.png";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
const ThankYou = () => {
  return (
    <>
      <Navbar />
      <div className="m-10 h-40 rounded-2xl flex justify-center items-center bg-green-400">
        <p className="text-xl text-center font-semibold p-5">
          Thank you for your interest<br></br>Our team will get back to you
          soon...
        </p>
      </div>
      <Image
        alt="img"
        className="w-1/2 md:w-1/4 drop-shadow-2xl object-cover m-auto"
        src={rain2}
        loading="eager"
        priority={true}
        unoptimized={true}
      />
      <div className="m-10 text-center">
        <Link href="www.inrainconstruction.com">
          <Button variant="contained">Go To Homepage</Button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ThankYou;
