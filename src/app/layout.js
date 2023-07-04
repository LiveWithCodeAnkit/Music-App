"use client";
import "./globals.css";
import { Pacifico } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar/Navbar";
const pacifico = Pacifico({
  weight: "400",
  subsets: ["cyrillic"],
  display: "auto",
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pacifico.className}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
