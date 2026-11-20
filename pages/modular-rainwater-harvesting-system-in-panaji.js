import { Footer } from "@/components/Footer/Footer";
import ModularLocationTarget from "@/components/LocationTarget/ModularLocationTarget";
import { Navbar } from "@/components/Navbar/Navbar";
import PopUp from "@/components/popup";
import React from "react";
import ModularMetatag from "@/components/Metatag/ModularMetatag";

const ModularPanaji = () => {
  const loc = "Panaji";
  return (
    <>
      <ModularMetatag loc={loc} slug={loc.toLowerCase()} />
      <Navbar />
      <PopUp />
      <ModularLocationTarget location="Panaji" />
      <Footer />
    </>
  );
};

export default ModularPanaji;
