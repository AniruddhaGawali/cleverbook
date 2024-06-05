import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { MdAutoMode, MdSync } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { TbDeviceAnalytics } from "react-icons/tb";

type Props = {};

function WhyChooseCleverBook({}: Props) {
  const content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[] = [
    {
      title: "99.9% Inventory Accuracy",
      description:
        "Our system is designed to provide you with the most accurate inventory data possible. We use the latest technology to ensure that your inventory is always up-to-date and accurate.",
      content: (
        <>
          <GoGoal className="text-8xl text-background" />
        </>
      ),
    },
    {
      title: "Automated Restocking",
      description:
        "Our system automatically generates restocking orders based on your inventory levels, so you never run out of stock again.",
      content: (
        <>
          <MdAutoMode className="text-8xl text-background" />
        </>
      ),
    },
    {
      title: "Multi-Channel Integration",
      description:
        "Our system integrates with all major e-commerce platforms, so you can manage your inventory from one central location.",
      content: (
        <>
          <MdSync className="text-8xl text-background" />
        </>
      ),
    },
    {
      title: "Advanced Analytics",
      description:
        "Our system provides you with advanced analytics and reporting tools, so you can make informed decisions about your inventory.",
      content: (
        <>
          <TbDeviceAnalytics className="text-8xl text-background" />
        </>
      ),
    },
  ];

  return (
    <div className="relative flex flex-col justify-center space-x-10 overflow-y-auto rounded-md">
      <h2 className="mb-20 mt-32 text-center text-3xl font-bold leading-loose md:text-5xl">
        Why Choose CleverBook
      </h2>
      <StickyScroll
        content={content}
        contentClassName="overflow-hidden hidden h-full rounded-md bg-white shadow-2x md:flex item-center justify-center grainy-gradient"
      />
    </div>
  );
}

export default WhyChooseCleverBook;
