"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const announcements = [
  {
    id: "1",
    tag: "CONTEST",
    title: "Mock Contest - Exclusively for 2nd Years!",
    date: "Upcoming",
    time: "6:00 PM - 8:30 PM",
    venue: "DJSCE Campus / Codeforces",
    desc: "Greetings, 2nd Years! Test and sharpen your Competitive Programming skills. New to CP? Don't worry—we've got you covered with curated beginner-to-intermediate problem sets!",
    linkText: "Register for Contest",
    linkUrl: "https://codeuncode.djscodestars.in/",
  },
  {
    id: "2",
    tag: "FLAGSHIP",
    title: "CodeUncode: Annual ICPC Style Championship",
    date: "Annual Event",
    time: "Full Day Contest",
    venue: "Auditorium & Online",
    desc: "The pinnacle collegiate coding showdown. Battle against the best minds in dynamic programming, graph algorithms, and combinatorics to claim the ultimate CodeStar crown.",
    linkText: "Explore CodeUncode",
    linkUrl: "https://codeuncode.djscodestars.in/",
  },
  {
    id: "3",
    tag: "RECRUITING",
    title: "Codestars Core & Co-Committee Applications",
    date: "Open Now",
    time: "Round 1 Active",
    venue: "Online Submission",
    desc: "Want to be part of the premier CP committee? Apply for Technical, Tech-Editorial, Creatives, and Event Management teams to lead workshops, contests, and tech initiatives.",
    linkText: "Apply to Committee",
    linkUrl: "https://discord.gg/B7Macam5PH",
  },
  {
    id: "4",
    tag: "WORKSHOP",
    title: "Graph Theory & Segment Trees Masterclass",
    date: "Every Weekend",
    time: "11:00 AM - 1:00 PM",
    venue: "Discord Stage & Lab 3",
    desc: "Hands-on walkthrough of Dijkstra, Floyd-Warshall, Fenwick Trees, and Lazy Propagation with real Codeforces Div 2 & Div 1 problem solving.",
    linkText: "Join Session",
    linkUrl: "https://discord.gg/B7Macam5PH",
  },
];

export function Events() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const filters = ["ALL", "CONTEST", "FLAGSHIP", "RECRUITING", "WORKSHOP"];

  const filteredAnnouncements =
    activeFilter === "ALL"
      ? announcements
      : announcements.filter((a) => a.tag === activeFilter);

  return (
    <section
      id="events"
      className="relative z-20 w-full py-24 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white">
            Latest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]">
              Announcements & Events
            </span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base md:text-lg">
            Stay updated with upcoming hackathons, ICPC contests, workshops, and
            committee recruitments from DJS CodeStars.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-yellow-400 text-black scale-105"
                    : "bg-neutral-900/80 text-neutral-400 border border-neutral-800 hover:text-yellow-400 hover:border-yellow-500/40"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid in Yellow & Black */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {filteredAnnouncements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-3xl bg-neutral-950/90 border border-neutral-800/80 hover:border-yellow-400/70 transition-all duration-300 hover:shadow-[0_0_35px_rgba(250,204,21,0.25)] flex flex-col justify-between"
            >
              {/* Card top banner */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-yellow-400/15 text-yellow-300 border border-yellow-400/40">
                    {item.tag}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Event Metadata */}
                <div className="flex flex-wrap gap-4 py-3 px-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/60 text-xs text-neutral-300 mb-6">
                  <div className="flex items-center gap-1.5">
                    <span>{item.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>{item.venue}</span>
                  </div>
                </div>
              </div>

              {/* Action Glowing Button */}
              <div className="pt-2 flex items-center justify-between">
                <a
                  href={item.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="glow"
                    size="sm"
                    className="w-full sm:w-auto gap-2"
                  >
                    <span>{item.linkText}</span>
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
