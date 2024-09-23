import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import rain2 from "./../public/tree.png";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
const ThankYou = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16650006765"
      />
      <Script id="google-analytics" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16650006765');
        `}
      </Script>
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
        <Link href="/">
          <Button variant="contained">Go To Homepage</Button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ThankYou;
