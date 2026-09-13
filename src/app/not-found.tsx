import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="mx-auto max-w-[560px] rounded-[22px] border border-line p-8 sm:p-10">
      <h1 className="mb-3 text-[26px] font-semibold text-ink">Page not found</h1>
      <p>
        Nothing lives at this address. Go back to the <Link href="/">homepage</Link>.
      </p>
    </main>
  );
}
