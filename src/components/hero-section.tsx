'use client';

import { Spotlight } from "@/components/ui/spotlight";
import { Globe } from "@/components/ui/globe";
import { HyperText } from "@/components/ui/hyper-text";
import { BackgroundPaths } from "@/components/ui/background-paths"; // Import BackgroundPaths

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
      className="w-full min-h-screen bg-aigc-dark-blue relative overflow-hidden" // Match original Card styling
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
        size={400}
      />
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left content */}
        <div className="flex-1 p-6 ml-12 md:p-12 relative z-10 flex flex-col justify-center items-center md:items-start">
          <HyperText
            text="Innovate To Elevate"
            duration={800}
            framerProps={titleVariants}
            className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-aigc-white to-aigc-white"
            animateOnLoad={false} // Hover-only animation, or set to true for load + hover
          />
        </div>

        {/* Right content - Globe */}
        <div className="flex-1 relative flex items-center justify-center md:-mt-16 lg:-mt-24">
          <Globe className="w-full h-full max-w-[500px] md:max-w-[600px]" />
        </div>
      </div>
    </BackgroundPaths>
  );
}