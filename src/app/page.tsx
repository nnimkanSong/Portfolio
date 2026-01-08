"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import { ProjectsSection } from "./components/project";
import { TechToolsSection } from "./components/tech&tool";

export default function Home() {
  const BASE_DELAY = 2500;

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      offset: 100,
      once: true,
      disable: false,
      // disable: () =>
      //   typeof window !== "undefined" &&
      //   window.matchMedia &&
      //   window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });

    // รีเฟรชหลังหน้าโหลดเสร็จ + กันกรณี asset มาไม่พร้อม
    const onLoad = () => {
      setTimeout(() => {
        AOS.refreshHard();
      }, BASE_DELAY);
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <>
      <div
        id="home"
        className="absolute top-0 left-0 w-full h-[1000px] bg-gradient-to-r from-[#3D0000] to-[#FF0000] overflow-hidden z-[-1]"
      >
        <div
          className="absolute flex items-start justify-center whitespace-nowrap text-transparent text-[200px] animate-zoom-in-out"
          style={{ WebkitTextStroke: "2px white", top: "65px" }}
          data-aos="zoom-in"
          data-aos-delay={BASE_DELAY + 0}
        >
          Nathakon Nimkanchana
        </div>
      </div>

      {/* Hero */}
      <div className="z-[2] h-[500px] text-white text-center flex flex-row max-[500px]:flex-col-reverse items-center justify-center gap-[170px] max-[1300px]:gap-[100px] max-[1100px]:gap-[50px] relative  max-[500px]:pt-[500px] max-[500px]:pb-[500px] pt-[350px] pb-[350px]">
        <div
          className="w-[calc(525px+2vw)] max-[1100px]:w-[calc(300px+2vw)] flex flex-col flex-wrap text-white text-center justify-center"
          data-aos="fade-right"
          data-aos-delay={BASE_DELAY + 100}
        >
          <h1
            className="text-[calc(0.9rem+2vw)] text-start font-bold"
            data-aos="fade-up"
            data-aos-delay={BASE_DELAY + 200}
          >
            I&apos;m Song — It&apos;s my site.
          </h1>

          <div
            className="text-[calc(1.1rem+2vw)] text-start font-bold text-black"
            data-aos="fade-up"
            data-aos-delay={BASE_DELAY + 300}
          >
            Full-Stack-Development
          </div>

          <div
            className="text=[calc(0.5rem+2vw)] text-start mt-[25px]"
            data-aos="fade-up"
            data-aos-delay={BASE_DELAY + 400}
          >
            I am currently studying in my 3nd year at King Mongkut&apos;s Institute of Technology Ladkrabang,
            Chumphon Campus, majoring in Computer Engineering.
          </div>

          <div className="flex gap-[20px] mt-[50px] max-[500px]:justify-center">
            <a
              href="/files/66200345_Resume.pdf"
              data-aos="fade-up"
              data-aos-delay={BASE_DELAY + 550}
              className="text-white p-[10px] bg-black rounded-[10px] h-[40px] w-[max-content] hover:bg-white/30 hover:backdrop-blur-lg hover:text-white"
            >
              Download Resume
            </a>
            <a
              href="#portfolios"
              data-aos="fade-up"
              data-aos-delay={BASE_DELAY + 700}
              className="text-black p-[10px] bg-white rounded-[10px] h-[40px] w-[100px] hover:bg-white/30 hover:backdrop-blur-lg hover:text-white cursor-pointer"
            >
              Portfolios
            </a>
          </div>
        </div>

        <div
          className="w-max flex justify-center items-center"
          data-aos="flip-right"
          data-aos-delay={BASE_DELAY + 250}
        >
          <Image
            src="../img/Profile.jpg"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-[20px] max-[500px]:w-[220px] "
          />
          {/* overlay (ไว้ค่อยผูก hover ก็ได้) */}
          <div className="absolute bg-black/70 text-white flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-lg">
            <h2 className="text-xl font-bold">Nathakon Nimkanchana</h2>
            <p className="mt-2 text-sm">Full-Stack Developer</p>
          </div>
        </div>
      </div>

      {/* Tech & Tools */}
      <div
        className="bg-gradient-to-r from-[#000000] to-[#000000] relative text-white text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <TechToolsSection />
      </div>

      {/* Projects */}
      <div
        className="bg-gradient-to-r from-[#E8EAED] to-[#E8EAED] relative text-white text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
        <ProjectsSection />
      </div>
    </>
  );
}
