import React from "react";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar/Navbar";
import PopUp from "@/components/popup";
import ICPLCertification from "@/components/ICPL/ICPLCertification";
import { Footer } from "@/components/Footer/Footer";
import Head from "next/head";

const reviews = [
  { id: 1, src: "/projects/1.jpeg", alt: "Working Site 1" },
  { id: 2, src: "/projects/2.jpeg", alt: "Working Site 2" },
  { id: 3, src: "/projects/3.jpeg", alt: "Working Site 3" },
  { id: 4, src: "/projects/4.jpeg", alt: "Working Site 4" },
  { id: 5, src: "/projects/5.jpeg", alt: "Working Site 5" },
  { id: 6, src: "/projects/6.jpeg", alt: "Working Site 6" },
  { id: 7, src: "/projects/7.jpeg", alt: "Working Site 7" },
  { id: 8, src: "/projects/8.jpeg", alt: "Working Site 8" },
  { id: 9, src: "/projects/9.jpeg", alt: "Working Site 9" },
  { id: 10, src: "/projects/10.jpeg", alt: "Working Site 10" },
  { id: 11, src: "/projects/11.jpeg", alt: "Working Site 11" },
  { id: 12, src: "/projects/12.jpeg", alt: "Working Site 12" },
  { id: 13, src: "/projects/13.jpeg", alt: "Working Site 13" },
  { id: 14, src: "/projects/14.jpeg", alt: "Working Site 14" },
  { id: 15, src: "/projects/15.jpeg", alt: "Working Site 15" },
  { id: 16, src: "/projects/16.jpeg", alt: "Working Site 16" },
  { id: 17, src: "/projects/17.jpeg", alt: "Working Site 17" },
  { id: 18, src: "/projects/18.jpeg", alt: "Working Site 18" },
];

const SiteWork = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const title = "InRain Site Gallery | Modular Rainwater Harvesting Images";
  const desc =
    "Are you searching for a Rainwater harvesting system? InRain Water Harvesting company that provides Best Rainwater harvesting system based on the technology adopted from Germany. Contact us today for a free consultation.";
  const keyword =
    "rainwater harvesting system images, modular rainwater harvesting images, rainwater harvesting filtration system images, roof top rainwater harvesting images, rainwater harvesting in delhi images, rainwater harvesting for industries images, water harvesting system";
  const canonical = "https://www.inrainconstruction.com/sitework-gallery/";
  const ogUrl = "https://www.inrainconstruction.com/sitework-gallery/";
  const ogTitle = "InRain Site Gallery | Modular Rainwater Harvesting Images";
  const ogDescription =
    "Are you searching for a Rainwater harvesting system? InRain Water Harvesting company that provides Best Rainwater harvesting system based on the technology adopted from Germany. Contact us today for a free consultation.";
  const twittertitle =
    "InRain Site Gallery | Modular Rainwater Harvesting Images";
  const twitterdescription =
    "Are you searching for a Rainwater harvesting system? InRain Water Harvesting company that provides Rainwater harvesting system based on the technology adopted from Germany. Contact us today for a free consultation.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="language" content="en" />
        <meta name="author" content="InRain® Construction Pvt. Ltd." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="description" content={desc} />
        <meta name="keywords" content={keyword} />
        <meta name="canonical" content={canonical} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={ogUrl} />
        <meta name="twitter:title" content={twittertitle} />
        <meta name="twitter:description" content={twitterdescription} />
        <meta
          property="og:site_name"
          content="InRain® Construction Pvt. Ltd."
        />
        <meta
          name="google-site-verification"
          content="Vger2ATzpz22dMQGSECVrk-fiHzoT9KVObqb1m9k3HA"
        />
      </Head>
      <Navbar />
      <PopUp />

      <div className="relative h-20 bg-gray-100 flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Site Work Gallery</h1>
      </div>
      {/* Gallery */}
      <div className="max-w-7xl mx-auto p-4">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {reviews.map((item) => (
            <motion.div
              key={item.id}
              layout
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(item.src)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={500}
                className="rounded-xl object-cover w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-[90%]"
            >
              <Image
                src={selectedImage}
                alt="Review Full"
                width={900}
                height={600}
                className="rounded-2xl object-contain m-auto h-auto w-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ICPLCertification />
      <Footer />
    </>
  );
};

export default SiteWork;
