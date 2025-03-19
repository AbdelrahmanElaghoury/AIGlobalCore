'use client';

import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Globe } from "@/components/ui/globe";
import { motion } from "framer-motion";

export function SplineSceneBasic() {
  const titleVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" }
    },
  };

  const subtitleVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" }
    },
  };

  return (
    <Card className="w-full min-h-screen bg-aigc-dark-blue relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
        size={400}
      />
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left content */}
        <div className="flex-1 p-6 md:p-12 relative z-10 flex flex-col justify-center items-center md:items-start">
          <motion.h1
            className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-aigc-white to-aigc-white"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            Innovate To Elevate
          </motion.h1>
          {/* <motion.p
            className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-aigc-white max-w-xl text-center md:text-left"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            Innovate To Elevate
          </motion.p> */}
        </div>

        {/* Right content - Globe */}
        <div className="flex-1 relative flex items-center justify-center md:-mt-16 lg:-mt-24">
          <Globe className="w-full h-full max-w-[500px] md:max-w-[600px]" />
        </div>
      </div>
    </Card>
  );
}