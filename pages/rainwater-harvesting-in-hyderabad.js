import { Footer } from '@/components/Footer/Footer'
import { Hero1 } from '@/components/Hero/Hero1'
import LocationTarget from '@/components/LocationTarget/LocationTarget'
import { Navbar } from '@/components/Navbar/Navbar'
import React from 'react'
import Head from 'next/head'

const RainwaterHyderabad = () => {
    const loc = "Hyderabad";

  const title =
    `Rainwater Harvesting System in ${loc} | Rainwater Harvesting System Service Provider in ${loc}`;
  const desc =
    `Are you finding Rainwater Harvesting System in ${loc}. We have the best quality Rainwater Harvesting System that helps you with harvesting rainwater. Don't we late to Rainwater Harvesting System Service Provider in ${loc} at the best price?`;
  const keyword =
    `Rooftop Rainwater Harvesting System in ${loc}, Modular Rainwater Harvesting System in ${loc}, Rainwater Harvesting Tank in ${loc}, Polymer Type Rainwater Harvesting System in ${loc}, Storm water Management in ${loc}`;
  const canonical =
    "https://www.inrainconstruction.com/rainwater-harvesting-in-hyderabad";
  const ogUrl =
    "https://www.inrainconstruction.com/rainwater-harvesting-in-hyderabad";
  const ogTitle =
    `Rainwater Harvesting System in ${loc} | Rainwater Harvesting System Service Provider in ${loc}`;
  const ogDescription =
    `Are you finding Rainwater Harvesting System in ${loc}. We have the best quality Rainwater Harvesting System that helps you with harvesting rainwater. Don't we late to Rainwater Harvesting System Service Provider in ${loc} at the best price?`;
  const twittertitle =
    "Rainwater Harvesting System in India | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Are you searching for a Rainwater harvesting system? InRain Water Harvesting company that provides Rainwater harvesting system based on the technology adopted from Germany. Contact us today for a free consultation.";

  return (
    <>
    <Navbar />
    <Hero1 />
    <LocationTarget location={"Hyderabad"} />
    <Footer />
    </>
  )
}

export default RainwaterHyderabad