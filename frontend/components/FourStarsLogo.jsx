"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function FourStarsLogo({
  className = "",
  size = "default", // 'sm', 'default', 'lg', 'xl'
  interactive = true,
  subtitle = null,
}) {
  const [isGlowing, setIsGlowing] = useState(false);
  const [touchWave, setTouchWave] = useState(false);

  const handleTouch = () => {
    setIsGlowing(true);
    setTouchWave(true);
    setTimeout(() => setTouchWave(false), 800);
    setTimeout(() => setIsGlowing(false), 2000);
  };

  const sizeClasses = {
    sm: "w-24 h-24 sm:w-32 sm:h-32",
    default: "w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72",
    lg: "w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96",
    xl: "w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px]",
  }[size] || "w-48 h-48 sm:w-64 sm:h-64";

  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center select-none cursor-pointer group ${className}`}
      onTouchStart={handleTouch}
      onMouseEnter={() => setIsGlowing(true)}
      onMouseLeave={() => setIsGlowing(false)}
      onClick={handleTouch}
      role="button"
      tabIndex={0}
      aria-label="DJS CodeStars Four Stars Logo"
    >
      {/* Background ambient radial aura */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-700 pointer-events-none ${
          isGlowing
            ? "bg-gradient-to-r from-yellow-500/40 via-amber-400/50 to-yellow-300/40 blur-3xl scale-125 opacity-100"
            : "bg-gradient-to-r from-yellow-500/15 via-amber-400/15 to-yellow-300/15 blur-2xl scale-95 opacity-40 group-hover:opacity-80"
        }`}
      />

      {/* Radiant touch pulse ring */}
      {touchWave && (
        <motion.div
          initial={{ scale: 0.8, opacity: 1 }}
          animate={{ scale: 1.8, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 rounded-full border-2 border-yellow-400 pointer-events-none shadow-[0_0_30px_#facc15]"
        />
      )}

      {/* The 4-Stars Logo Graphic */}
      <motion.div
        animate={{
          scale: isGlowing ? 1.06 : 1,
          rotate: isGlowing ? [0, -1, 1, 0] : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 15 },
          rotate: { duration: 0.5 },
        }}
        className={`relative ${sizeClasses} transition-all duration-300 flex items-center justify-center`}
      >
        <img
          src="/codestarslogo.svg"
          alt="DJS CodeStars Four Stars Logo"
          className={`w-full h-full object-contain transition-all duration-300 ${
            isGlowing
              ? "drop-shadow-[0_0_20px_rgba(250,204,21,0.95)] drop-shadow-[0_0_45px_rgba(234,179,8,0.85)] drop-shadow-[0_0_75px_rgba(250,204,21,0.5)] brightness-110"
              : "drop-shadow-[0_0_12px_rgba(250,204,21,0.4)] drop-shadow-[0_0_25px_rgba(234,179,8,0.25)] group-hover:drop-shadow-[0_0_25px_rgba(250,204,21,0.75)]"
          }`}
        />
      </motion.div>

      {subtitle && (
        <p className="mt-2 text-xs sm:text-sm text-neutral-400 text-center max-w-xs">
          {subtitle}
        </p>
      )}
    </div>
  );
}
