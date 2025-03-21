'use client';

import { Spotlight } from "@/components/ui/spotlight";
import { Globe } from "@/components/ui/globe";
import { HyperText } from "@/components/ui/hyper-text";
import { BackgroundPaths } from "@/components/ui/background-paths";

export function SplineSceneBasic() {
  const titleVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <BackgroundPaths
      className="w-full min-h-screen bg-aigc-dark-blue relative overflow-hidden"
    >
      <Spotlight
        className="-top-20 left-0 sm:-top-40 sm:left-10 md:left-60 md:-top-20" // Responsive spotlight positioning
        fill="white"
        size={400}
      />
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left content */}
        <div className="flex-1 p-4 sm:p-6 md:p-12 relative z-10 flex flex-col justify-center items-center md:items-start">
          <HyperText
            text="Innovate To Elevate"
            duration={800}
            framerProps={titleVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-aigc-white to-aigc-white"
            animateOnLoad={false} // Hover-only animation
          />
        </div>

        {/* Right content - Globe */}
        <div className="flex-1 relative flex items-center justify-center p-4 sm:p-6 md:p-0 md:-mt-16 lg:-mt-24">
          <Globe className="w-full h-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]" />
        </div>
      </div>
    </BackgroundPaths>
  );
}