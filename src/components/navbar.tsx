"use client";
import React, { useEffect } from "react";

type Props = {};

function Navbar({}: Props) {
  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          document.querySelector("header")?.classList.add("opacity-100");
        } else {
          document.querySelector("header")?.classList.remove("opacity-100");
        }
      });
    }
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between bg-gradient-to-br from-[rgba(255,166,0,0.1)] to-[rgb(128,0,128,.1)] px-10 opacity-0 backdrop-blur-md duration-500">
      <div className="inline-block bg-gradient-to-r from-optional-accent-orange to-optional-accent-purple bg-clip-text text-xl font-bold text-transparent">
        CleverBooks
      </div>

      <button className="group relative inline-block cursor-pointer rounded-full bg-slate-800 p-px text-xs font-semibold leading-6 text-white no-underline shadow-2xl shadow-zinc-900">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative z-10 flex items-center space-x-2 rounded-full bg-zinc-950 px-4 py-0.5 ring-1 ring-white/10">
          <span>{`Sign Up`}</span>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-orange-500/0 via-orange-500/90 to-orange-500/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
    </header>
  );
  800080;
}

export default Navbar;
