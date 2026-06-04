import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/ui/Footer";
import AOSProvider from "@/components/shared/AOSProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Cloud Edge",
  description: "Built For Smart, Future Ready Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistSans.className} ${bricolageGrotesque.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
          }}
        />
      </body>
    </html >
  );
}
