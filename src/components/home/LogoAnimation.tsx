"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PersonalLogo from "@/public/personal-logos/personal-logo-v2-blue.png";

const LogoAnimation = ({ children }: { children: React.ReactNode }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true); // Show content after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  if (!showContent) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white animate-fade-out">
        <div>
          <Image
            src={PersonalLogo}
            alt="Logo"
            width={192} // Set width (48 * 4 for w-48 equivalent)
            height={192} // Set height
            className="animate-twist"
            priority // Loads the image with priority
          />
        </div>
        {/* Animated Text */}
        <div className="flex flex-col items-center text-2xl font-bold">
          <span className="tracking-widest animate-running-text">
            Nathan Dinh
          </span>
          <span className="text-blue-400 animate-running-dev">Dev</span>
        </div>
      </div>
    );
  }

  return <>{children}</>; // Render server content after animation
};

export default LogoAnimation;
