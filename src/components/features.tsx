import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import featuresList from "@/data/feature";

type Props = {};

function Features({}: Props) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-100 p-10">
      <h2 className="text-4xl text-center font-bold leading-loose md:text-5xl">
        Key Problems Solved by CleverBooks
      </h2>

      <section className="md:mt-8 grid h-fit w-full grid-cols-1 justify-center gap-8 sm:px-24 pt-20 lg:grid-cols-3">
        {featuresList.map((feature) => {
          return (
            <Card key={feature.id} className="w-full p-4 duration-500">
              <CardHeader>
                <div className="grainy-gradient mb-5 flex h-20 w-20 items-center justify-center text-clip rounded-full text-5xl text-background">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description} </p>
              </CardContent>
            </Card>
          );
        })}
      </section>
    </div>
  );
}

export default Features;
