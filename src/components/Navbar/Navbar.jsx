"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Pacifico } from "next/font/google";
import Image from "next/image";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["cyrillic"],
  display: "auto",
});

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  },[]);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      <div
        className={`flex justify-around items-start p-10 font-Pacifico ${pacifico.className}`}
      >
        <span className="animate-bounce font-extrabold text-amber-300 shadow-blue-800  drop-shadow-xl text-4xl bg-none">
          “Let’s get high.”
        </span>
        <div className="flex justify-center items-center p-1 animate-bounce">
          {currentTheme === "dark" ? (
            <button
              className="bg-black-700 w-auto rounded-md "
              onClick={() => setTheme("light")}
            >
              {" "}
              <Image src="/sun.svg" alt="logo" width={30} height={30} />
            </button>
          ) : (
            <button
              className="bg-black-700 w-auto rounded-md "
              onClick={() => setTheme("dark")}
            >
              <Image src="/moon.svg" alt="logo" width={30} height={30} />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
