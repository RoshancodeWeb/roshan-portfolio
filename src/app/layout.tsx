import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar" 
import Footer from "./components/Footer";



export const metadata: Metadata = {
  title: "Umair Ali",
  description: "Mern Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-titilium antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
