import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Scroll from "@/components/Scroll/Scroll";

export const metadata: Metadata = {
  title: "Live Scoreboard",
  description: "NextJS project created by Michael McCann",
  icons: [{ url: "/Logo.png", href: "/Logo.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <Scroll />
        <Navbar />
        <main className="bg-gray-100 min-h-[calc(100dvh-60px)] h-full pb-10">
          {children}
        </main>
      </body>
    </html>
  );
}
