import type { Metadata } from "next";
import localFont from "next/font/local";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

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
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  weight: "variable",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baffer",
  description: "Flashcards for the modern age",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${inter.variable} font-inter min-h-screen font-normal text-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
