import React from "react";

type Props = {};

function CTASection({}: Props) {
  return (
    <div className="m-auto flex h-[70vh] w-4/5 flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-optional-accent-orange to-optional-accent-purple text-white">
      <h2 className="text-center text-5xl font-bold">
        Grow Faster Than You Think
      </h2>
      <p className="mt-5 w-3/5 text-center text-xl">
        Join the thousands of businesses that have revolutionized their
        inventory management with CleverBooks.
      </p>
      <button className="mt-10 inline-flex h-14 w-[250px] animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-xl font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Sign Up Today
      </button>
    </div>
  );
}

export default CTASection;
