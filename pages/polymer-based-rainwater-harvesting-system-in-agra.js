import { Footer } from "@/components/Footer/Footer";
import PolymerTypeLocationTarget from "@/components/LocationTarget/PolymerTypeLocationTarget";
import PolymerMetatag from "@/components/Metatag/PolymerMetatag";
import { Navbar } from "@/components/Navbar/Navbar";
import PopUp from "@/components/popup";
import Head from "next/head";
import React from "react";

const PolymerTypeAgra = () => {
  const loc = "Agra";
  return (
    <>
      <PolymerMetatag loc={loc} slug={loc.toLowerCase()} />
      <Navbar />
      <PopUp />
      <PolymerTypeLocationTarget location={"Agra"} />
      <Footer />
    </>
  );
};

export default PolymerTypeAgra;
