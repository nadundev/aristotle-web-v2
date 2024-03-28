"use client";

import React from "react";
import ButtonAnimated from "./ui/buttonAnimated";
import { CardStack } from "../components/ui/card-stack";
import { cn } from "@/app/utils/cn";

const Hero = () => {
  return (
    <section className="relative w-full">
      <div className="h-[calc(100svh-65px)] mx-auto max-w-[1024px]">
        <div className="flex pt-[120px]">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">
              Stay on top of your pipeline. Google alerts on steroids for sales.
            </h1>
            <p>
              Aristotle is the relationship sales platform that one-man sales
              armies use to stay on top of mind and close more deals easier than
              they ever thought possible.
            </p>
            <div>
                <ButtonAnimated />
            </div>
          </div>
          <div className="h-auto flex items-center justify-center w-full">
            <CardStack items={CARDS} />
          </div>
        </div>
      </div>
      <div className="">screenshot and icon</div>
    </section>
  );
};

export default Hero;

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
  {
    id: 3,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
  {
    id: 4,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
