import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

type Props = {};

function ReviewsSection({}: Props) {
  return (
    <div className="w-full bg-white py-20 md:px-20 md:py-32 lg:px-32 xl:px-64">
      <h2 className="mb-20 mt-32 text-center text-3xl font-bold leading-loose md:text-5xl">
        What Our Customers Say
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials: {
  quote: string;
  name: string;
  title: string;
}[] = [
  {
    quote:
      "CleverBooks transformed our inventory management. We've never been more efficient!",
    name: "Jane D.",
    title: "CEO, Big Company",
  },

  {
    quote:
      "The real-time tracking and automated restocking features are game-changers.",
    name: "Mark S.",
    title: "COO, Small Company",
  },

  {
    quote:
      "With CleverBooks, we reduced our stockouts by 50%. Highly recommend!",
    name: "Sarah T.",
    title: "CFO, Medium Company",
  },
  {
    quote:
      "CleverBooks is the best thing that happened to our business. We are now more efficient and our customers are happier.",
    name: "John Doe",
    title: "CEO, CleverBooks",
  },
];

export default ReviewsSection;
