"use client";
import React from "react";
import Link from "next/link";
import { FourStarsLogo } from "@/components/FourStarsLogo";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Problem Recommender", href: "/problems" },
    { name: "Leaderboard", href: "/leaderboard" },
    { name: "CF Analyzer", href: "/analyzer" },
    { name: "Events & Contests", href: "/#events" },
    { name: "CodeUncode", href: "https://codeuncode.djscodestars.in/", external: true },
    { name: "Discord Community", href: "https://discord.gg/B7Macam5PH", external: true },
  ];

  return (
    <footer className="relative z-20 w-full pt-16 pb-12 overflow-hidden text-neutral-300">
      {/* Background yellow ambient radiance */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-yellow-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Column 1: Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h3 className="text-base font-bold text-yellow-400 uppercase tracking-widest border-b border-yellow-500/30 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-yellow-400 transition-colors flex items-center gap-1.5 justify-center md:justify-start group"
                    >
                      <span className="text-yellow-500/40 group-hover:text-yellow-400 transition-colors">
                        ›
                      </span>
                      <span>{link.name}</span>
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-yellow-400 transition-colors flex items-center gap-1.5 justify-center md:justify-start group"
                    >
                      <span className="text-yellow-500/40 group-hover:text-yellow-400 transition-colors">
                        ›
                      </span>
                      <span>{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Logo and Mission */}
          <div className="flex flex-col items-center text-center space-y-4">
            <FourStarsLogo
              size="sm"
              interactive={true}
              subtitle={null}
            />
            <h2 className="text-2xl font-black text-white tracking-wide">
              DJS <span className="text-yellow-400">CODESTARS</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              A community for students who enjoy competitive programming, algorithms,
              workshops, and building things together.
            </p>
          </div>

          {/* Column 3: Contact and Socials */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-4">
            <h3 className="text-base font-bold text-yellow-400 uppercase tracking-widest border-b border-yellow-500/30 pb-2 inline-block">
              Connect With Us
            </h3>
            <div className="space-y-2 text-sm text-neutral-400 flex flex-col items-center md:items-end">
              <p className="flex items-center gap-2 justify-center md:justify-end text-xs sm:text-sm">
                <HiOutlineLocationMarker className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>DJSCE, Vile Parle West, Mumbai - 400056</span>
              </p>
              <a
                href="mailto:contact@djscodestars.com"
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                <HiOutlineMail className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>contact@djscodestars.com</span>
              </a>
              <p className="flex items-center gap-2">
                <HiOutlinePhone className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>+91 89285 27980 / +91 93216 00186</span>
              </p>
            </div>

            {/* Glowing Social Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://discord.gg/B7Macam5PH"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-neutral-900 border border-yellow-500/30 text-yellow-400 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_20px_rgba(250,204,21,0.7)] transition-all duration-300"
                aria-label="Discord"
              >
                <FaDiscord className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/djsce_codestars/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-neutral-900 border border-yellow-500/30 text-yellow-400 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_20px_rgba(250,204,21,0.7)] transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/djs-codestars/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-neutral-900 border border-yellow-500/30 text-yellow-400 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_20px_rgba(250,204,21,0.7)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@djscodestars"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-neutral-900 border border-yellow-500/30 text-yellow-400 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_20px_rgba(250,204,21,0.7)] transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 text-center text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} DJS CodeStars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
