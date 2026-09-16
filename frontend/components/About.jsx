"use client";
import React from "react";
import { FourStarsLogo } from "@/components/FourStarsLogo";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  HiOutlineSparkles,
  HiOutlineCode,
  HiOutlineFire,
  HiOutlineAcademicCap,
} from "react-icons/hi";

export function About() {
  const highlights = [
    {
      title: "ICPC & CP Culture",
      desc: "Comprehensive mentoring, regular division rounds, and curated problem sets to prepare coders for ICPC Regionals.",
      icon: HiOutlineCode,
    },
    {
      title: "CodeUncode Flagship",
      desc: "Our marquee competitive coding contest featuring fierce algorithmic problem solving and high-caliber participants.",
      icon: HiOutlineFire,
    },
    {
      title: "Algorithmic Workshops",
      desc: "In-depth sessions on Dynamic Programming, Graph Algorithms, Range Queries, Combinatorics, and Number Theory.",
      icon: HiOutlineAcademicCap,
    },
  ];

  return (
    <section
      id="about"
      className="relative z-20 w-full py-24 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Radial yellow backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-yellow-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/40 bg-black/60 backdrop-blur-md shadow-[0_0_15px_rgba(250,204,21,0.2)]">
            <HiOutlineSparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-yellow-400">
              The CodeStars Spirit
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white">
            You already have{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 drop-shadow-[0_0_25px_rgba(250,204,21,0.5)]">
              what it takes.
            </span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Four stars represent precision, algorithmic elegance, collaborative spirit,
            and relentless problem solving. Touch or interact with the emblem below:
          </p>
        </div>

        {/* Scroll-Down Four Stars Logo Showcase with Touch Glow */}
        <div className="relative py-8 flex flex-col items-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950/80 border border-yellow-500/30 backdrop-blur-xl shadow-[0_0_40px_rgba(250,204,21,0.15)] hover:border-yellow-400/60 hover:shadow-[0_0_60px_rgba(250,204,21,0.3)] transition-all duration-500">
            <FourStarsLogo
              size="xl"
              interactive={true}
              subtitle={null}
            />
          </div>
        </div>

        {/* Highlight Cards in Yellow & Black */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-4">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative p-6 sm:p-8 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-yellow-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.25)] hover:-translate-y-1 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black group-hover:shadow-[0_0_20px_rgba(250,204,21,0.6)] transition-all duration-300 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-2">
                    {h.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {h.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 flex items-center justify-between">
                  <span className="text-xs font-mono text-yellow-400/80 uppercase">
                    Learn More
                  </span>
                  <span className="text-yellow-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Glowing Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <a
            href="https://discord.gg/B7Macam5PH"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="default"
              size="lg"
              className=""
            >
              Join Our Coding Community
            </Button>
          </a>
          <a
            href="https://codeuncode.djscodestars.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              Visit CodeUncode
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
