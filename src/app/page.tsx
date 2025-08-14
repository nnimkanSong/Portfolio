
import Navwork from "./ui/nav-work";
import Image from "next/image";
export default function Home() {
  return (
    <div className="" >

      <div id="home" className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#3D0000] to-[#FF0000] overflow-hidden z-[-1] ">
        <div
          className="absolute flex items-start justify-center whitespace-nowrap text-transparent text-[200px] animate-zoom-in-out"
          style={{
            WebkitTextStroke: "2px white",
            top: "65px",
          }}
        >
          Nathakon Nimkanchana
        </div>
      </div>
      <div className="h-[500px] text-white text-center flex flex-row max-[500px]:flex-col-reverse items-center justify-center gap-[170px] max-[1300px]:gap-[100px] max-[1100px]:gap-[50px] relative z-10 max-[500px]:pt-[500px] max-[500px]:pb-[500px] pt-[350px] pb-[350px]">
        <div className="w-[calc(525px+2vw)] max-[1100px]:w-[calc(300px+2vw)] flex flex-col flex-wrap text-white text-center justify-center ">
          <h1 className="text-[calc(0.9rem+2vw)] text-start font-bold">Hi,I'm Song</h1>
          <div className="text-[calc(1.1rem+2vw)] text-start font-bold">Full-Stack-Development</div>
          <div className="text=[calc(0.5rem+2vw)] text-start mt-[25px]  ">I build fast, modern, and scalable websites using React, Next.js, and JavaScript—focused on clean UI, great UX, and real business impact.</div>
          <div className="flex gap-[20px] mt-[50px] max-[500px]:justify-center">
            <button className="text-black p-[10px] bg-white rounded-[10px] h-[40px] w-[100px]
             hover:bg-white/30 hover:backdrop-blur-lg hover:text-white">Hire Me</button>
            <button className="text-black p-[10px] bg-white rounded-[10px] h-[40px] w-[100px]
             hover:bg-white/30 hover:backdrop-blur-lg hover:text-white">Portfolios</button>
          </div>


        </div>
        <div className="w-max flex justify-center items-center">
          <Image
            src="../img/Profile.jpg"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-[20px] max-[500px]:w-[220px] "
          />
          <div className="absolute inset-0 bg-black/70 text-white flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-lg">
            <h2 className="text-xl font-bold">Nathakon Nimkanchana</h2>
            <p className="mt-2 text-sm">Full-Stack Developer</p>
          </div>
        </div>
      </div>
      <div className="bg-black text-white h-[500px] p-[40px] flex flex-col items-center" id="about">
        <h1 className="text-[calc(1rem+2vw)] text-center tracking-tight
               bg-gradient-to-r from-[#FF0000] [#FF3F33] to-white 
               bg-clip-text text-transparent">My Recent Works</h1>
        <Navwork />
        <iframe src="" ></iframe>
      </div>
    </div>
  );
}
