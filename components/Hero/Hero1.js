import React from "react";
import logo from "../../public/logo.png";
import TextTransition, { presets } from "react-text-transition";
import Image from "next/image";

const TEXTS = [
  "Rainwater Harvesting",
  "Rainwater Harvesting System For Warehouse",
  "Modular Rainwater Harvesting System",
  "Roof Top Rainwater Harvesting",
  "Polymer based Rainwater Harvesting System",
];

export const Hero1 = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div data-aos="fade-up" className="">
      <div className="relative hero1-background">
        <div className="absolute md:top-24 top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <TextTransition
            className="md:text-xl text-center text-base text-white"
            springConfig={presets.gentle}
          >
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </div>

        <div className="text-center">
          <div className="relative top-56 md:top-40">
            <Image
              className="w-28 pt-48 md:pt-32 m-auto"
              src={logo}
              alt="img"
              loading="eager"
              priority={true}
              unoptimized={true}
            />
            <p className="text-green-700 text-2xl font-semibold drop-shadow-md md:text-3xl">
              Rainwater Harvesting System in India<br></br>
              <bold className="text-base text-black">
                InRain<sup>®</sup> Construction Pvt. Ltd.(ICPL)
              </bold>
            </p>
            <p className="text-base font-semibold align-middle md:text-xl md:m-2">
              "A Water Conservation & Management Company"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
