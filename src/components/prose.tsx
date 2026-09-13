import { Fragment } from "react";

// Renders a line of content text. Anything wrapped in `backticks` becomes code.
export function Prose({ text }: { text: string }) {
  return text.split("`").map((part, i) =>
    i % 2 ? (
      <code key={i} className="rounded bg-gold-tint px-1 text-[13px] text-gold-ink">
        {part}
      </code>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

export function Paragraphs({ text }: { text: string[] }) {
  return text.map((paragraph) => (
    <p key={paragraph} className="mt-3 max-w-[68ch] first:mt-0">
      <Prose text={paragraph} />
    </p>
  ));
}
