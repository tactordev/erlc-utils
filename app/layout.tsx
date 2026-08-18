import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/sidebar";
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
  title: "Tactor's ERLC Utils",
  description: "A website holding a collation of different ERLC utilities and a mini-archive of information for ERLC.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex flex-row min-h-full">
        <Sidebar />
        <div className="my-6 ml-4 py-4 px-8 flex flex-col w-full h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
