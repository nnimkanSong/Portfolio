"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";


gsap.registerPlugin(ScrollToPlugin);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const go = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setOpen(false);
    gsap.to(window, {
      duration: 0.1,
      scrollTo: { y: target, offsetY: 80 },
      ease: "power2.out",
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={` fixed top-0 left-0 w-full z-50 transition-all  
      ${scrolled ? "bg-black/60 backdrop-blur-md shadow-lg " : "bg-transparent"}`}
      data-aos="fade-down"
      data-aos-delay="2500"     // 👈 ดีเลย์ 2.5 วินาที
    >
      <div className="mx-auto max-w-6xl h-[72px] px-4 md:px-6 flex items-center justify-between text-white">
        <a
          href="#home"
          onClick={(e) => go(e, "#home")}
          className="font-bold text-lg"
        >
          <Image
            src="../img/logo.png"
            alt="logo"
            width={130}
            height={50}
            className="object-contain"
          />
        </a>

        <ul className="hidden md:flex items-center gap-6">
          <li><a href="#about" onClick={(e) => go(e, "#about")} className="hover:opacity-80">About</a></li>
          <li><a href="#resume" onClick={(e) => go(e, "#resume")} className="hover:opacity-80">Resume</a></li>
          <li><a href="#portfolios" onClick={(e) => go(e, "#portfolios")} className="hover:opacity-80">Portfolios</a></li>
          <li><a href="#contact" onClick={(e) => go(e, "#contact")} className="hover:opacity-80">Contact</a></li>
          <li>
            {/* <button className="px-4 py-2 rounded-xl bg-white text-black hover:bg-white/80 transition">
              Hire Me
            </button> */}
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg ring-1 ring-white/20 hover:bg-white/10"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-[#EADEDE] backdrop-blur-lg
          
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="px-4 pb-4 space-y-3 text-black">
          <li><a href="#about" onClick={(e) => go(e, "#about")} className="block py-2 hover:opacity-70">About</a></li>
          <li><a href="#resume" onClick={(e) => go(e, "#resume")} className="block py-2 hover:opacity-70">Resume</a></li>
          <li><a href="#portfolios" onClick={(e) => go(e, "#portfolios")} className="block py-2 hover:opacity-70">Portfolios</a></li>
          <li>
            {/* <button className="w-max px-4 py-2 rounded-xl bg-black text-white hover:opacity-80 transition">
              Hire Me
            </button> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}
