// app/AppShell.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
// import Background from "./ui/background";
import Nav from "./ui/nav";
import Footer from "./ui/footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  const overlayRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const text = "NATHAKON".split("");

  useEffect(() => {
    if (!overlayRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(lettersRef.current, { opacity: 0, y: 10 });

      gsap
        .timeline({ defaults: { ease: "power3.inOut" } })
        .to(lettersRef.current, {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.25,
          ease: "power2.out",
        })
        .to({}, { duration: 1.2 })
        .to(lettersRef.current, {
          opacity: 0,
          y: -8,
          stagger: { each: 0.06, from: "end" }, 
          duration: 0.05,
          ease: "power2.in",
          onComplete: () => setLoading(false),
        });
    }, overlayRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* <Background> */}
        <Nav />
        {children}
        <Footer />
      {/* </Background> */}

      {loading && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[9999] bg-black text-white flex items-center justify-center"
        >
          <h1
            className="text-2xl md:text-3xl font-bold flex"
            style={{ letterSpacing: "0.2em" }} 
          >
            {text.map((char, i) => (
              <span
                key={i}
                ref={(el) => {
                  if (el) lettersRef.current[i] = el;
                }}
                style={{ display: "inline-block" }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>
      )}
    </>
  );
}
