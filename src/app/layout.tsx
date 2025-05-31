import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ArticleProvider } from '../context/ArticleContext'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "destrukture",
  description: "Build & Discover Various UI Designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ArticleProvider>
          {children}
        </ArticleProvider>
      </body>
    </html>
  );
}
