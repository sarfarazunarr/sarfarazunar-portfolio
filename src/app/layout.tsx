import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Starfield from "./components/Background";
import Animation from "./components/Animation";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex w-full bg-[#050505]`}
      >
        <Animation />
        <Sidebar />
        <div className="ml-[20%] w-[80%] p-5">
          <Starfield
            starCount={2000}
            starColor={[255, 255, 255]}
            speedFactor={0.1}
            backgroundColor="black"
          />
          {children}
        </div>
      </body>
    </html>
  );
}
