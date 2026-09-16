"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiMenuAlt2,
  HiX,
  HiHome,
  HiOutlineCode,
  HiOutlineChartBar,
  HiOutlineCalendar,
  HiOutlineSparkles,
  HiOutlinePhotograph,
  HiOutlineBookOpen,
  HiOutlineUsers,
} from "react-icons/hi";
import { FaDiscord, FaInstagram, FaLinkedin, FaYoutube, FaTrophy } from "react-icons/fa";

const navItems = [
  { name: "Home", link: "/", icon: HiHome },
  { name: "Problem Recommender", link: "/problems", icon: HiOutlineCode },
  { name: "Leaderboard", link: "/leaderboard", icon: FaTrophy },
  { name: "CF Analyzer", link: "/analyzer", icon: HiOutlineChartBar },
  { name: "Events & Announcements", link: "/#events", icon: HiOutlineCalendar },
  {
    name: "CodeUncode",
    link: "https://codeuncode.djscodestars.in/",
    icon: HiOutlineSparkles,
    external: true,
  },
  { name: "Gallery", link: "/gallery", icon: HiOutlinePhotograph },
  { name: "Resources", link: "/resources", icon: HiOutlineBookOpen },
  { name: "Team", link: "/team", icon: HiOutlineUsers },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change or ESC key
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {/* Fixed Left-Hand Side Menu Button */}
      <div className="fixed top-5 left-5 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex h-11 w-11 items-center justify-center rounded-xl bg-black/80 border border-neutral-700 text-yellow-400 backdrop-blur-xl hover:border-yellow-400 active:scale-95 transition-all duration-200"
          aria-label="Open Navigation Menu"
        >
          <HiMenuAlt2 className="w-6 h-6 text-yellow-400" />
        </button>
      </div>

      {/* Slide-out Left Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Left Drawer Sheet */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="relative w-80 sm:w-96 max-w-[85vw] h-full bg-black/95 border-r border-yellow-500/30 backdrop-blur-2xl shadow-[0_0_50px_rgba(250,204,21,0.2)] p-6 flex flex-col justify-between z-10 custom-scrollbar overflow-y-auto"
            >
              <div>
                {/* Header: Brand & Close button */}
                <div className="flex items-center justify-between pb-6 border-b border-yellow-500/20">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 relative flex items-center justify-center rounded-xl bg-yellow-500/10 border border-yellow-500/40 p-1 group-hover:border-yellow-400 group-hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] transition-all">
                      <img
                        src="/codestarslogo.svg"
                        alt="CodeStars Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-base font-extrabold tracking-wide text-white group-hover:text-yellow-400 transition-colors">
                        DJS <span className="text-yellow-400">CODESTARS</span>
                      </h2>
                      <p className="text-[11px] text-neutral-400 font-mono">
                        Programming Club
                      </p>
                    </div>
                  </Link>

                  {/* Close button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl text-neutral-400 hover:text-yellow-400 hover:bg-yellow-400/10 border border-transparent hover:border-yellow-500/30 transition-all duration-200"
                    aria-label="Close menu"
                  >
                    <HiX className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="mt-6 flex flex-col space-y-1.5">
                  {navItems.map((item) => {
                    const isActive = pathname === item.link;
                    const IconComponent = item.icon;

                    if (item.external) {
                      return (
                        <a
                          key={item.name}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-4 py-3 rounded-xl text-neutral-300 hover:text-yellow-300 hover:bg-yellow-500/10 border border-transparent hover:border-yellow-500/30 transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-3">
                            <IconComponent className="w-5 h-5 text-yellow-400/70 group-hover:text-yellow-400 group-hover:scale-110 transition-all" />
                            <span className="text-sm font-medium">{item.name}</span>
                          </div>
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded border border-yellow-500/40 text-yellow-400">
                            Ext ↗
                          </span>
                        </a>
                      );
                    }

                    return (
                      <Link
                        key={item.name}
                        href={item.link}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                          isActive
                            ? "bg-yellow-400/15 text-yellow-400 border border-yellow-400/50 shadow-[0_0_15px_rgba(250,204,21,0.2)] font-semibold"
                            : "text-neutral-300 hover:text-yellow-300 hover:bg-yellow-500/10 border border-transparent hover:border-yellow-500/30"
                        }`}
                      >
                        <IconComponent
                          className={`w-5 h-5 transition-all ${
                            isActive
                              ? "text-yellow-400"
                              : "text-neutral-400 group-hover:text-yellow-400 group-hover:scale-110"
                          }`}
                        />
                        <span>{item.name}</span>
                        {isActive && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_8px_#facc15]" />
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Footer Section in Drawer */}
              <div className="pt-6 mt-6 border-t border-yellow-500/20">
                {/* Discord Community Button */}
                <a
                  href="https://discord.gg/B7Macam5PH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-yellow-400 text-black font-bold text-sm hover:bg-yellow-300 active:scale-[0.98] transition-all duration-200"
                >
                  <FaDiscord className="w-5 h-5" />
                  <span>Join Our Discord</span>
                </a>

                {/* Social Links */}
                <div className="mt-4 flex items-center justify-center gap-4">
                  <a
                    href="https://www.instagram.com/djsce_codestars/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-neutral-900 border border-yellow-500/20 text-neutral-400 hover:text-yellow-400 hover:border-yellow-400/50 hover:shadow-[0_0_12px_rgba(250,204,21,0.3)] transition-all"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/djs-codestars/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-neutral-900 border border-yellow-500/20 text-neutral-400 hover:text-yellow-400 hover:border-yellow-400/50 hover:shadow-[0_0_12px_rgba(250,204,21,0.3)] transition-all"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://youtube.com/@djscodestars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-neutral-900 border border-yellow-500/20 text-neutral-400 hover:text-yellow-400 hover:border-yellow-400/50 hover:shadow-[0_0_12px_rgba(250,204,21,0.3)] transition-all"
                    aria-label="YouTube"
                  >
                    <FaYoutube className="w-4 h-4" />
                  </a>
                </div>

                <p className="mt-4 text-center text-[11px] text-neutral-500">
                  © {new Date().getFullYear()} DJS CodeStars. All rights reserved.
                </p>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
