import React from "react";
import { Montserrat } from "next/font/google";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";
import { HeroHighlight,Highlight } from "./ui/hero-highlight";

const montserrat = Montserrat({ subsets: ["latin"] });
type Props = {};

function HeroSection({}: Props) {
  return (
    <div className="relative flex h-[calc(100vh-45px)] w-full flex-col items-center justify-center wave-bottom">
      <div className="absolute left-0 top-0 z-0 h-screen w-full">
        <div className="grainy absolute inset-0 z-0 h-[calc(100vh-40px)]"></div>
        <Image
          src={"/hero2.svg"}
          alt={"imventory management image"}
          layout="fill"
          objectFit="cover"
          className="-translate-y-5 opacity-50"
        />
      </div>

      <div className="bg-tr relative flex h-screen w-full flex-col items-center justify-center">
        <div className="flex h-fit w-full flex-col items-center justify-center">
          <h1
            className={`mb-4 w-full text-center text-4xl font-bold leading-loose text-gray-50 md:text-6xl ${montserrat.className}`}
          >
            <FlipWords
              words={["Elevate", "Simplify", "Optimize", "Streamline"]}
              className="text-primary"
            />
            Your Inventory Management
          </h1>
          <h1
            className={`w-full text-center text-4xl font-bold leading-loose text-gray-50 md:text-6xl ${montserrat.className}`}
          >
            With
            {/* <span className="ml-2 inline-block bg-gradient-to-r from-optional-accent-orange to-optional-accent-purple bg-clip-text text-transparent"> */}
            <Highlight
            className="ml-2 inline-block bg-gradient-to-r from-optional-accent-orange to-optional-accent-purple px-5"
            >CleverBooks</Highlight>
            {/* </span> */}
          </h1>
        </div>
        <h3
          className={`mt-8 w-full text-center text-lg font-medium text-background md:text-2xl`}
        >
          Real-time tracking, automated restocking, and advanced analytics at
          your fingertips.
        </h3>
        <button className="animate-shimmer mt-10 inline-flex h-14 w-[250px] items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-xl font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Get Started Now
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
