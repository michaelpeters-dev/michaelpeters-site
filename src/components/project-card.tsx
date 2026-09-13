import { Fragment, type ReactNode } from "react";
import type { Project, ProjectLink } from "@/content/cs2340";
import { Paragraphs, Prose } from "./prose";

// "https://example.com/a/b/" -> "example.com/a/b", so graders see the real address.
// On narrow screens the address may break before a "." or "/", never mid-word.
function DisplayUrl({ href }: { href: string }) {
  const { host, pathname } = new URL(href);
  const parts = (host + pathname).replace(/\/$/, "").split(/(?=[./])/);
  return parts.map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <wbr />}
      {part}
    </Fragment>
  ));
}

function LinkRow({ link }: { link: ProjectLink }) {
  return (
    <div className="grid gap-x-6 gap-y-0.5 py-2.5 sm:grid-cols-[150px_1fr]">
      <dt className="text-muted">{link.label}</dt>
      <dd className="[overflow-wrap:anywhere]">
        {link.href ? (
          <a href={link.href} className="text-navy decoration-gold/60 hover:decoration-gold">
            {link.text ?? <DisplayUrl href={link.href} />}
          </a>
        ) : (
          <span className="text-muted">Not posted yet</span>
        )}
      </dd>
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mt-8">
      <h4 id={`${id}-heading`} className="mb-3 text-[13px] font-semibold text-muted">
        {title}
      </h4>
      {children}
    </section>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded bg-gold-tint px-[7px] text-[11.5px] leading-[1.7] whitespace-nowrap text-gold-ink">
      {children}
    </span>
  );
}

function Video({ video, title }: { video: NonNullable<Project["video"]>; title: string }) {
  if (video.youtubeId) {
    return (
      <>
        <div className="aspect-video overflow-hidden rounded-xl border border-line bg-navy">
          <iframe
            className="size-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
            title={`${title} demo video`}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <p className="mt-2.5 text-[13px] text-muted">
          <a href={`https://www.youtube.com/watch?v=${video.youtubeId}`}>Open on YouTube</a>
        </p>
      </>
    );
  }
  if (video.href) {
    return (
      <p>
        <a href={video.href} className="text-navy decoration-gold/60 hover:decoration-gold">
          Watch the demo video
        </a>
      </p>
    );
  }
  return (
    <p className="rounded-xl border border-dashed border-line px-4 py-6 text-center text-muted">
      Demo video coming soon.
    </p>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const upcoming = !project.links;
  const id = `project-${project.number}`;

  return (
    <article
      id={id}
      className={`rounded-2xl border border-line px-5 py-5 sm:px-7 sm:py-6 ${upcoming ? "border-dashed" : ""}`}
    >
      <h3 className="text-[20px] leading-tight font-semibold text-navy">
        Project {project.number}
        <span className="ml-3 border-l-2 border-gold pl-3 font-normal text-ink">{project.title}</span>
      </h3>

      {project.links && (
        <dl className="mt-4 divide-y divide-line border-t border-line">
          {project.links.map((link) => (
            <LinkRow key={link.label} link={link} />
          ))}
        </dl>
      )}

      {project.note && <p className="mt-3 text-muted">{project.note}</p>}

      {project.description && (
        <Section id={`${id}-about`} title="About the app">
          <Paragraphs text={project.description} />
        </Section>
      )}

      {project.userStories && (
        <Section id={`${id}-stories`} title="Screens and user stories">
          <ul className="divide-y divide-line border-t border-line">
            {project.userStories.map((item) => (
              <li
                key={item.story}
                className="grid gap-x-6 gap-y-1 py-3 sm:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
              >
                <div>
                  <p className="text-ink">
                    {item.story}
                    {item.tag && (
                      <>
                        {" "}
                        <Tag>{item.tag}</Tag>
                      </>
                    )}
                  </p>
                  <p className="mt-0.5 text-[13px] text-gold-ink">{item.screen}</p>
                </div>
                <p>
                  <Prose text={item.how} />
                </p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {project.process && (
        <Section id={`${id}-process`} title="How I worked">
          <Paragraphs text={project.process} />
        </Section>
      )}

      {project.video && (
        <Section id={`${id}-video`} title="Demo video">
          <Video video={project.video} title={project.title} />
        </Section>
      )}
    </article>
  );
}
