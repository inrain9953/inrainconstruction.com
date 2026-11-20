import { Footer } from "@/components/Footer/Footer";
import ModularLocationTarget from "@/components/LocationTarget/ModularLocationTarget";
import { Navbar } from "@/components/Navbar/Navbar";
import PopUp from "@/components/popup";
import React from "react";
import ModularMetatag from "@/components/Metatag/ModularMetatag";

const ModularGwalior = () => {
  const loc = "Gwalior";
  return (
    <>
      <ModularMetatag loc={loc} slug={loc.toLowerCase()} />
      <Navbar />
      <PopUp />
      <ModularLocationTarget location="Gwalior" />
      <Footer />
    </>
  );
};

export default ModularGwalior;
