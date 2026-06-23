import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pointlaine — Digital Publishing & Online Media",
  description:
    "Pointlaine builds and operates digital properties that help consumers discover, compare and choose products and services with confidence.",
  other: {
    "fo-verify": "dffefb55-3f82-4d7d-8e62-f211d0134b8c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
