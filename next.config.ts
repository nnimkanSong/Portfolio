import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ช่วยให้สามารถโหลดไฟล์ static ได้ง่ายขึ้น
  images: {
    unoptimized: true, // ป้องกัน Next.js แปลงไฟล์ภาพ
  },
};

export default nextConfig;
