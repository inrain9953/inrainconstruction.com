import { Footer } from "@/components/Footer/Footer";
import ModularLocationTarget from "@/components/LocationTarget/ModularLocationTarget";
import { Navbar } from "@/components/Navbar/Navbar";
import PopUp from "@/components/popup";
import React from "react";
import ModularMetatag from "@/components/Metatag/ModularMetatag";

const ModularGreaterNoida = () => {
  const loc = "Greater Noida";
  return (
    <>
      <ModularMetatag loc={loc} slug={loc.toLowerCase().replace(" ", "-")} />
      <Navbar />
      <PopUp />
      <ModularLocationTarget location="Greater Noida" />
      <Footer />
    </>
  );
};

export default ModularGreaterNoida;
