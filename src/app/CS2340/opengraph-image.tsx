import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { GT_FILL_PATH, GT_OUTLINE_PATH, GT_VIEWBOX } from "@/components/gt-logo";
import { course } from "@/content/cs2340";

// The preview card shown when the /CS2340 link is pasted into Canvas, Slack, iMessage, etc.
export const alt = `${course.code} ${course.name}, ${course.student}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [regular, semibold] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/fonts/IBMPlexMono-Regular.ttf")),
    readFile(join(process.cwd(), "src/assets/fonts/IBMPlexMono-SemiBold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#003057",
          color: "#ffffff",
          fontFamily: "IBM Plex Mono",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 44 }}>
          <svg width="230" viewBox={GT_VIEWBOX}>
            <path fill="#ffffff" d={GT_OUTLINE_PATH} />
            <path fill="#b3a369" d={GT_FILL_PATH} />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 96, fontWeight: 600, lineHeight: 1, letterSpacing: -2 }}>
              {course.code}
            </div>
            <div style={{ marginTop: 18, fontSize: 40, color: "#b3a369" }}>{course.name}</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 30 }}>
          <div style={{ width: 96, height: 4, marginBottom: 28, background: "#b3a369" }} />
          <div>{course.student}</div>
          {/* One string, not several: the image renderer wants a single child here. */}
          <div style={{ marginTop: 6, color: "rgba(255,255,255,0.72)" }}>
            {`${course.term}, ${course.school}. Project links and source code.`}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "IBM Plex Mono", data: regular, weight: 400, style: "normal" },
        { name: "IBM Plex Mono", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
