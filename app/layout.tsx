import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oluwafemi-ayansola-portfolio-rho.vercel.app"),
  title: { default: "OA. — Oluwafemi Ayansola", template: "%s · OA." },
  description: "Oluwafemi Ayansola is a software engineer, product builder and UI/UX designer creating digital products with a point of view.",
  keywords: ["Oluwafemi Ayansola", "software engineer", "product builder", "UI/UX designer", "Lagos", "Nigeria"],
  openGraph: { title: "OA. — Oluwafemi Ayansola", description: "Software engineering, product design and digital products with a point of view.", url: "https://oluwafemi-ayansola-portfolio-rho.vercel.app", siteName: "OA.", locale: "en_NG", type: "website" },
  twitter: { card: "summary_large_image", title: "OA. — Oluwafemi Ayansola", description: "Software engineer · Product builder · UI/UX designer" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
