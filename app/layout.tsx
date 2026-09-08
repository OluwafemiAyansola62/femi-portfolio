import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oluwafemi Ayansola | Software Engineer · Product Builder · UI/UX Designer",
  description: "Portfolio of Oluwafemi Ayansola, a software engineer, product builder and UI/UX designer building practical digital products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
