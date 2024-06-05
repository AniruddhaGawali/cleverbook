import React from "react";
import { Button } from "./ui/button";

type Props = {};

function ProblemTargetSection({}: Props) {
  return (
    <div className="overflow-hidden relative mb-20 flex min-h-screen w-full flex-col items-center justify-center space-y-5 lg:p-10">
      <div className="absolute bottom-[35%] left-[23%] h-[450px] w-[450px] rounded-full bg-gradient-to-br from-[rgba(255,166,0)] to-[rgb(128,0,128)]" />

      <div className="to-[rgb(128,0,128] absolute bottom-10 left-[55%] h-40 w-40 rounded-full bg-gradient-to-br from-[rgba(255,166,0)] to-[rgb(128,0,128)]"></div>

      <div className="absolute left-[75%] top-[35%] h-80 w-80 rounded-full bg-gradient-to-br from-[rgba(255,166,0)] to-[rgb(128,0,128)]"></div>

      <section className="grid min-h-[80vh] w-3/4 grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="flex h-full w-full items-center justify-center rounded-3xl bg-[rgb(255,255,255,.3)] shadow-xl backdrop-blur-md">
          <h2 className="p-5 text-center text-5xl font-bold">
            Features that Set Us Apart
          </h2>
        </div>

        <div className="col-span-2 h-full w-full rounded-3xl bg-[rgb(255,255,255,.3)] p-10 shadow-xl backdrop-blur-md">
          <h3 className="p-5 text-center text-4xl font-bold">
            Real-Time Tracking
          </h3>
          <p>
            Monitor inventory levels in real-time to make informed decisions.
            With instant updates, CleverBooks ensures you stay up-to-date with
            your inventory status as soon as a sale is made or a new shipment
            arrives. This real-time tracking minimizes human errors, providing
            accurate data at your fingertips and helping you avoid costly
            mistakes associated with manual inventory management. By having
            up-to-the-minute inventory data, you can make better-informed
            decisions, knowing exactly what you have in stock, what’s running
            low, and what needs to be reordered.
          </p>
          <Button className="mt-5">Learn More</Button>
        </div>
        <div className="bg-[rgb(255,255,255,.3)]] col-span-2 h-full w-full rounded-3xl p-10 shadow-xl backdrop-blur-md">
          <h3 className="p-5 text-center text-4xl font-bold">
            Automated Restocking
          </h3>
          <p>
            Automatically reorder products when inventory falls below a set
            threshold. CleverBooks allows you to define minimum stock levels for
            each product. When inventory dips below these levels, the system
            automatically generates a reorder, ensuring you never run out of
            stock and keeping your customers satisfied. This feature not only
            prevents stockouts but also saves you time by automating the
            restocking process, allowing you to focus on growing your business
            rather than constantly managing inventory.
          </p>
          <Button className="mt-5">Learn More</Button>
        </div>
        <div className="h-full w-full rounded-3xl bg-[rgb(255,255,255,.3)] p-10 shadow-xl backdrop-blur-md">
          <h3 className="p-5 text-center text-3xl font-bold">
            Multi-Channel Integration
          </h3>
          <p>
            Sell anywhere, manage everywhere. CleverBooks unifies inventory
            across online stores, physical locations, and marketplaces. Say
            goodbye to overselling and hello to a single view of your stock.
          </p>
          <Button className="mt-5">Learn More</Button>
        </div>
      </section>
    </div>
  );
}

// bg-gradient-to-br from-[rgba(255,166,0,0.1)] to-[rgb(128,0,128,.1)]

export default ProblemTargetSection;
