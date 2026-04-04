import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Main from "./components/Main";
import { headers } from "next/headers";
import { isMobile } from "@/utils/isMobile";

import { Space_Grotesk, Orbitron } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sarfaraz Unar - Web & Agentic AI Developer",
  description: "I am Sarfaraz Unar, full stack web developer and Agentic AI Developer. Building intelligent, scalable applications using Next.js and LLM AI Agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userAgent = headers().get("user-agent") || "";
  const mobilecheck = isMobile(userAgent)
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${orbitron.variable} font-sans antialiased w-full text-foreground`}
      >
        <Main isMobile={mobilecheck}>
          {children}
        </Main>
      </body>
    </html>
  );
}
