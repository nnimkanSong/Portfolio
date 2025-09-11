// src/app/components/AOSInit.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,          // ระยะเวลา default ของแต่ละเอฟเฟกต์
      easing: "ease-out-cubic",
      offset: 80,             // เริ่มเล่นเมื่อเข้าใกล้ viewport กี่พิกเซล
      once: true,             // เล่นครั้งเดียว
      mirror: false,          // เลื่อนย้อนขึ้นไม่เล่นซ้ำ
    });
  }, []);

  return null;
}
