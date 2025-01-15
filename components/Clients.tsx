"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> Professors at GBC</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          {/* Testimonials Section */}
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            type="testimonials"
          />
        </div>

        <div className="flex flex-col items-center justify-center max-lg:mt-10">
          <h2 className="heading mt-20">I've Worked With</h2>
          <div className="h-[40vh] md:h-[20rem] w-full">
            {/* Companies Section */}
            <InfiniteMovingCards
              items={companies}
              direction="left"
              speed="normal"
              type="companies"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
