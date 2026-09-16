"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/button";
import { FourStarsLogo } from "@/components/FourStarsLogo";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FaDiscord } from "react-icons/fa";

export function Hero() {
  const words = [
    "COMPETITIVE CODING",
    "ALGORITHMS & DATA STRUCTURES",
    "ICPC CONTESTS",
    "PROBLEM SOLVING",
  ];

  return (
    <section className="relative flex flex-col justify-center items-center w-full min-h-screen px-4 sm:px-6 lg:px-12 pt-24 pb-16 overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-yellow-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-amber-500/10 blur-[140px] pointer-events-none" />

      <div className="relative z-20 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Text & CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
        >
          {/* Heading */}
          <div className="space-y-2">
            <h2 className="text-sm sm:text-base font-semibold tracking-widest uppercase text-neutral-400">
              Welcome to
            </h2>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
              DJS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]">
                CODESTARS
              </span>
            </h1>
            <div className="h-16 sm:h-20 flex items-center justify-center lg:justify-start">
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-200">
                <FlipWords words={words} className="text-yellow-400" />
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
            A programming club that nurtures the spirit of computer programming
            amongst students. Join us to explore, learn, compete, and innovate in the
            world of competitive algorithms!
          </p>

          {/* Glowing Buttons Section */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="https://codeuncode.djscodestars.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                size="lg"
                className="gap-2"
              >
                <span>Explore CodeUncode</span>
                <HiOutlineArrowRight className="w-4 h-4" />
              </Button>
            </a>

            <a
              href="https://discord.gg/B7Macam5PH"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="glow"
                size="lg"
                className="gap-2 border-yellow-500/60"
              >
                <FaDiscord className="w-5 h-5 text-yellow-400" />
                <span>Join Discord</span>
              </Button>
            </a>

            <Link href="/leaderboard">
              <Button variant="outline" size="lg">
                Leaderboard
              </Button>
            </Link>
          </div>

        </motion.div>

        {/* Right Four Stars Logo Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative py-6"
        >
          {/* Interactive Four Stars Logo */}
          <FourStarsLogo
            size="xl"
            interactive={true}
            subtitle={null}
          />
        </motion.div>
      </div>
    </section>
  );
}
