"use client";

import React from "react";
import logo from "../../public/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const TEXTS = [
  "Rainwater Harvesting",
  "Rainwater Harvesting System For Warehouse",
  "Modular Rainwater Harvesting System",
  "Roof Top Rainwater Harvesting",
  "Polymer based Rainwater Harvesting System",
];

export const Hero1 = () => {
  const [index, setIndex] = React.useState(0);
  const containerRef = useRef(null);

  // TEXT ROTATION
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  // RAIN ANIMATION
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement("canvas");

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "0";

    container.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rainDrops = [];
    let animationFrame;

    class RainDrop {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vy = 4 + Math.random() * 4;
        this.length = 10 + Math.random() * 20;
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.strokeStyle = "rgba(255,255,255,0.5)";
        ctx.stroke();
      }

      update() {
        this.y += this.vy;

        if (this.y > height) {
          this.y = -20;
          this.x = Math.random() * width;
        }
      }
    }

    for (let i = 0; i < 500; i++) {
      rainDrops.push(new RainDrop());
    }

    function animate() {
      ctx.fillStyle = "#8bc6d9";
      ctx.fillRect(0, 0, width, height);

      rainDrops.forEach((drop) => {
        drop.update();
        drop.draw();
      });

      animationFrame = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div data-aos="fade-up">
      <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
        <div className="absolute md:top-24 top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="md:text-xl text-center text-base text-white"
            >
              {TEXTS[index % TEXTS.length]}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="text-center relative z-10">
          <div className="relative top-56 md:top-40 pl-2 pr-2">
            <Image
              className="w-28 pt-48 md:pt-32 m-auto"
              src={logo}
              alt="img"
              loading="eager"
              priority
              unoptimized
            />

            <p className="text-green-700 text-2xl font-semibold drop-shadow-md md:text-3xl">
              Rainwater Harvesting System in India
              <br />
              <span className="text-base text-white">
                InRain<sup>®</sup> Construction Pvt. Ltd.(ICPL)
              </span>
            </p>

            <p className="text-black font-semibold align-middle md:text-xl md:m-2">
              "A Water Conservation & Management Company"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};