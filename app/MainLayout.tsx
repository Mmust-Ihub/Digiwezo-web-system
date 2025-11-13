"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <>
      {(pathname == "/" || pathname == "/about") && <Navbar />}

      {children}
      {(pathname == "/" || pathname == "/about") && <Footer />}
    </>
  );
}
