"use client";

import "./globals.css";
// import "../styles/globals.css";
// import { Inter } from "next/font/google";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import React, { use } from "react";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <>
          <Header />
          <main className="flex min-h-screen flex-col mt-[80px]">
            {children}
          </main>

          <Footer />
        </>
      </body>
    </html>
  );
}

// import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }
