import { Footer } from "@/components/Footer/Footer";
import ModularLocationTarget from "@/components/LocationTarget/ModularLocationTarget";
import { Navbar } from "@/components/Navbar/Navbar";
import PopUp from "@/components/popup";
import React from "react";
import ModularMetatag from "@/components/Metatag/ModularMetatag";

const ModularImphal = () => {
  const loc = "Imphal";
  return (
    <>
      <ModularMetatag loc={loc} slug={loc.toLowerCase()} />
      <Navbar />
      <PopUp />
      <ModularLocationTarget location="Imphal" />
      <Footer />
    </>
  );
};

export default ModularImphal;
