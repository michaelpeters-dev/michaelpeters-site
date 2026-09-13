import { Card } from "@/components/card";
import { profile } from "@/content/profile";

export default function HomePage() {
  return (
    <main className="mx-auto grid max-w-[1040px] gap-7 rounded-[22px] border border-line p-6 sm:p-9 md:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)] md:gap-10 lg:p-12">
      <section>
        <h1 className="mb-3 text-[28px] leading-tight font-semibold tracking-[-0.01em] text-ink sm:text-[34px]">
          {profile.name}
        </h1>
        <p>{profile.tagline}</p>
        <hr className="my-7 w-14 border-0 border-t border-line" />
        <dl>
          <dt className="text-muted">Location</dt>
          <dd className="mb-3.5 text-ink">{profile.location}</dd>
          <dt className="text-muted">Email</dt>
          <dd className="text-ink [overflow-wrap:anywhere]">{profile.email}</dd>
        </dl>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-8">
        <Card title="Highlights">
          <ul className="space-y-3">
            {profile.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>

        <Card title="Links">
          <ul className="space-y-3">
            {profile.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Interests">
          <ul className="flex flex-wrap gap-2.5">
            {profile.interests.map((item) => (
              <li key={item} className="rounded-full border border-line px-3 py-px">
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Honors">
          <ul className="space-y-3">
            {profile.honors.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </div>
    </main>
  );
}
