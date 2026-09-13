import type { ReactNode } from "react";

export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-line px-6 pt-[22px] pb-[26px]">
      <h2 className="mb-3.5 text-[13px] font-semibold text-muted">{title}</h2>
      {children}
    </section>
  );
}
