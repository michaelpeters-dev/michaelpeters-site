import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "@/content/profile";

// The preview card shown when the homepage link is shared.
export const alt = profile.name;
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
          padding: 48,
          background: "#ffffff",
          fontFamily: "IBM Plex Mono",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 80,
            border: "3px solid #e5e4df",
            borderRadius: 44,
          }}
        >
          <div style={{ fontSize: 84, fontWeight: 600, color: "#161616", letterSpacing: -1 }}>
            {profile.name}
          </div>
          <div style={{ marginTop: 20, fontSize: 40, color: "#6f7275" }}>{profile.tagline}</div>
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
