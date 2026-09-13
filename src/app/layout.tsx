import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Michael C. Peters",
    template: "%s · Michael C. Peters",
  },
  description: "Michael C. Peters, computer science at Georgia Tech.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plex.variable} h-full`}>
      <body className="min-h-full px-4 py-4 sm:px-5 sm:py-10">{children}</body>
    </html>
  );
}
