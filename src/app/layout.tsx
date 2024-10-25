import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rin Tithyareak - Full Stack Developer",
  description:
    "Building digital experiences that make a difference. Specialized in modern web technologies and passionate about creating intuitive, high-performance applications.",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>{children}</body>
    </html>
  );
}
