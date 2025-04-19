import type { Metadata } from "next";
import { Alegreya, Alegreya_Sans } from "next/font/google";
import Layout from "./components/layout";
import "./globals.css";

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"]
});

const alegreyaSans = Alegreya_Sans({
  variable: "--font-alegreya-sans",
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catherine Zheng",
  description: "Catherine Zheng's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alegreya.variable} ${alegreyaSans.variable} antialiased`}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
