import { Footer } from "@/components/Footer/Footer";
import PolymerTypeLocationTarget from "@/components/LocationTarget/PolymerTypeLocationTarget";
import PolymerMetatag from "@/components/Metatag/PolymerMetatag";
import { Navbar } from "@/components/Navbar/Navbar";
import PopUp from "@/components/popup";
import React from "react";

const PolymerTypeMuzaffarnagar = () => {
  const loc = "Muzaffarnagar";
  return (
    <>
      <PolymerMetatag loc={loc} slug={loc.toLowerCase()} />
      <Navbar />
      <PopUp />
      <PolymerTypeLocationTarget location={"Muzaffarnagar"} />
      <Footer />
    </>
  );
};

export default PolymerTypeMuzaffarnagar;
