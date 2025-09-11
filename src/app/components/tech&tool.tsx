"use client"
import AOSInit from "@/app/components/AOSInit";
import {
  SiJavascript, SiTypescript, SiPython, SiC, SiCplusplus,
  SiReact, SiNextdotjs, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiFastapi, SiDjango, SiGraphql,
  SiMongodb, SiMysql, SiPostgresql, SiFirebase,
  SiGit, SiDocker, SiKubernetes, SiDotnet,
} from "react-icons/si"

const techCategories = [
  {
    title: "Programming Languages",
    technologies: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
    ],
  },
  {
    title: "Frontend Development",
    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffff" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Backend Development",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffff" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    ],
  },
  {
    title: "Databases",
    technologies: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "DevOps & Cloud",
    technologies: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
    ],
  },
];

export function TechToolsSection() {
  return (
    <>
      <AOSInit />
      <section className="py-20 px-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h1
              className="text-4xl md:text-5xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              Tech &amp; Tools
            </h1>
            <p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              The technologies, frameworks, and tools I use to bring ideas to life
            </p>
          </div>

          <div className="flex flex-wrap gap-8 flex-row justify-center">
            {techCategories.map((cat, iCat) => (
              <div
                key={cat.title}
                className="rounded-xl border border-border/50 bg-background shadow-sm p-6"
                data-aos="zoom-in-up"
                data-aos-delay={100 + iCat * 100}         // stagger ระหว่างหมวด
                data-aos-duration="700"
              >
                <h3 className="text-lg font-semibold text-primary mb-4" data-aos="fade-right" data-aos-delay="50">
                  {cat.title}
                </h3>

                <div className="flex gap-6 justify-center flex-wrap">
                  {cat.technologies.map((tech, iTech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-center text-center w-16"
                      data-aos="fade-up"
                      data-aos-delay={iTech * 80}         // stagger ไอคอนในหมวด
                      data-aos-duration="600"
                    >
                      <tech.icon
                        className="h-10 w-10 cursor-pointer hover:scale-110 transition-transform"
                        style={{ color: tech.color }}
                        title={tech.name}
                      />
                      <span className="sr-only">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
