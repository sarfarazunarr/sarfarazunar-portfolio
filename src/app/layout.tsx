import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Main from "./components/Main";
import { headers } from "next/headers";
import { isMobile } from "@/utils/isMobile";
import Cursor from "./components/Cursor";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sarfaraz Unar - Web Developer",
  description: "This is portfolio site of Sarfaraz Unar",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full bg-[#050505]`}
      >
        {!mobilecheck && <Cursor />}
        <Main isMobile={mobilecheck}>
          {children}
        </Main>
      </body>
    </html>
  );
}
