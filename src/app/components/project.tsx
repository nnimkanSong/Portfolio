import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  isLive: boolean;
};

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "CC Computer Club",
      description:
        "Developed a web project using Vite, React, JavaScript, CSS, and Node.js, deployed on Netlify. Responsible for designing the Info page in Figma and implementing it in code. Created as part of the CC Computer Club.",
      image: "../img/image.png",
      technologies: ["Vite + React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/nnimkanSong/AC-info/tree/main/cewebsite",
      isLive: false,
    },
    {
      title: "Rush Project intra 42 Bangkok",
      description:
        "Developed a portfolio website using HTML, CSS, and JavaScript, deployed on Netlify. Created as part of the Fun with Coding summer course under GenEd.",
      image: "../img/rust.png",
      technologies: ["Html", "CSS"],
      liveUrl: "https://project-intra-portfolio.netlify.app/skip",
      githubUrl: "https://github.com/42Bangkok-DPs/DP-Web",
      isLive: true,
    },
    {
      title: "Project ToDo List",
      description:
        "Developed a portfolio website using NextJS, Tailwind CSS, and TypeScript, deployed on Vercel. ",
      image: "../img/todo.png",
      technologies: ["NextJS", "Tailwind CSS", "TypeScript", "Prisma", "MongoDB"],
      liveUrl: "https://nathakon-todo.site/register",
      githubUrl: "https://github.com/nnimkanSong/To-Do-list.git",
      isLive: true,
    },
    {
      title: "PROJECT Room Booking System",
      description:
        "Developed a web projetct using MERN Stack. Created as part of the Software Development Process course course (3rd year).",
      image: "../img/RBS-kmitl.png",
      technologies: ["React", "CSS", "Express", "JavaScript", "MongoDB", "Node.js"],
      liveUrl: "https://www.kmitl-rbs.online/",
      githubUrl: "https://github.com/nnimkanSong/Project_Webapp",
      isLive: true,
    }
  ];

  return (
    <section
      id="portfolios"
      className="py-20 bg-muted/30"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-16 text-center text-4xl font-bold text-balance text-black"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Professional Experience
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols item-center">
            {projects.map((project, i) => (
              <article
                key={project.title}
                className="group relative flex flex-col overflow-hidden rounded-xl border bg-white  text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-800 dark:text-white"
                data-aos="zoom-in-up"
                data-aos-delay={100 + i * 100}   // ไล่ delay ต่อการ์ด
                data-aos-duration="700"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden" data-aos="fade-in" data-aos-delay="50">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={false}
                  />
                </div>

                <header className="px-5 pt-5" data-aos="fade-up" data-aos-delay="100">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                </header>

                <div className="flex flex-col px-5 pb-5 pt-3 h-full flex-1">
                  <div className="flex flex-col gap-3 flex-1" data-aos="fade-up" data-aos-delay="150">
                    <p className="leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <ul className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, j) => (
                        <li
                          key={tech}
                          className="rounded-md border px-2.5 py-1 text-xs font-medium text-zinc-700 transition-colors dark:border-zinc-800 dark:text-zinc-200"
                          title={tech}
                          data-aos="fade-up"
                          data-aos-delay={200 + j * 60} // ไล่ delay ต่อ badge
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2 items-end mt-4" data-aos="fade-up" data-aos-delay="250">
                    {project.isLive ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <button
                          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white outline-none ring-zinc-400 transition hover:bg-zinc-800 focus-visible:ring-2 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                          type="button"
                        >
                          Live Demo
                        </button>
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-md bg-zinc-300 px-4 py-2 text-sm font-medium text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"
                        type="button"
                      >
                        Demo Unavailable
                      </button>
                    )}


                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open GitHub repo for ${project.title}`}
                    >
                      <button
                        className="inline-flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm font-medium text-zinc-900 outline-none ring-zinc-400 transition hover:bg-zinc-50 focus-visible:ring-2 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-800/60"
                        type="button"
                        title="GitHub"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.79-.25.79-.56 0-.28-.01-1.03-.02-2.02-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.26 3.39.96.11-.76.41-1.26.75-1.55-2.56-.29-5.25-1.28-5.25-5.68 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.58.23 2.75.11 3.04.75.81 1.2 1.85 1.2 3.11 0 4.41-2.69 5.38-5.26 5.66.42.36.8 1.06.8 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-[1px] rounded-[11px] bg-gradient-to-br from-transparent via-transparent to-transparent" />
                  <div className="absolute -inset-px rounded-xl bg-[linear-gradient(120deg,rgba(99,102,241,.3),rgba(56,189,248,.3),rgba(236,72,153,.3))] opacity-30 blur-md" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}