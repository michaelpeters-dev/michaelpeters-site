import type { Metadata } from "next";
import Link from "next/link";
import { GtLogo } from "@/components/gt-logo";
import { ProjectCard } from "@/components/project-card";
import { Paragraphs } from "@/components/prose";
import { course, intro, projects } from "@/content/cs2340";

export const metadata: Metadata = {
  title: `${course.code} · ${course.name}`,
  description: `${course.student}'s ${course.code} (${course.name}) projects at ${course.school}, ${course.term}.`,
  // Unlisted: reachable by link only, kept out of search results.
  robots: { index: false, follow: false },
};

const facts = [
  ["Student", course.student],
  ["Term", course.term],
  ["School", course.school],
];

export default function CoursePage() {
  return (
    <main className="mx-auto max-w-[920px] overflow-hidden rounded-[22px] border border-line">
      <header className="border-b-[3px] border-gold bg-navy px-5 pt-5 pb-7 text-white sm:px-12 sm:pt-8 sm:pb-10">
        <nav aria-label="Breadcrumb" className="mb-8 flex gap-2 text-[13px] text-white/60 sm:mb-10">
          <Link href="/" className="text-white/60 decoration-white/30 hover:text-white">
            michael c. peters
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-white">
            {course.slug}
          </span>
        </nav>

        <div className="flex items-center gap-4 sm:gap-7">
          <GtLogo reversed className="w-[72px] flex-none sm:w-[112px]" />
          <div>
            <h1 className="text-[34px] leading-none font-semibold tracking-[-0.02em] sm:text-[52px]">
              {course.code}
            </h1>
            <p className="mt-2 text-[15px] text-gold sm:text-[18px]">{course.name}</p>
          </div>
        </div>

        <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-3 sm:mt-10">
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt className="text-[12px] text-gold">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="px-5 py-6 sm:px-12 sm:py-9">
        <nav aria-label="On this page" className="flex flex-wrap gap-x-5 gap-y-1 text-[13px]">
          <a href="#about" className="text-muted">
            About me
          </a>
          {projects.map((project) => (
            <a key={project.number} href={`#project-${project.number}`} className="text-muted">
              Project {project.number}
            </a>
          ))}
        </nav>

        <section id="about" aria-labelledby="about-heading" className="mt-8">
          <h2 id="about-heading" className="mb-3 text-[13px] font-semibold text-muted">
            About me
          </h2>
          <Paragraphs text={intro} />
        </section>

        <section className="mt-10" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="mb-4 text-[13px] font-semibold text-muted">
            Projects
          </h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
