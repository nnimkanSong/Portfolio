import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'zoom-in-out': {
          '0%, 100%': { transform: 'scale(1.3)', opacity: '0.1' },
          '50%': { transform: 'scale(1.5)', opacity: '0.1' },
        },
      },
      animation: {
        'zoom-in-out': 'zoom-in-out 5s ease-in-out infinite', // ใช้ครั้งเดียว
        // 'zoom-in-out': 'zoom-in-out 4s ease-in-out infinite', // ถ้าอยากให้เล่นวนเรื่อย ๆ
      },
    },
  },
  plugins: [],
}

