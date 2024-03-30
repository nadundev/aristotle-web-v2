"use client";

import React, { useState, useEffect } from "react";
import Brand from "./components/brand";
import FAQ from "./components/faq";
import Features from "./components/features";
import Header from "./components/header";
import Hero from "./components/hero";
import How from "./components/how";
import Testimonials from "./components/testimonials";
import BottomCta from "./components/bottomCta";
import TestimonialsLast from "./components/testimonialsLast";
import TestimonialsMiddle from "./components/testimonialsMiddle";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeBlack = window.scrollY > 500;
      setIsScrolled(shouldBeBlack);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="relative h-full">
      <Header isScrolled={isScrolled} />
      <div className="mt-[65px]">
        <Hero />
        <Brand />
        <Features />
        <Testimonials />
        <How />
        <TestimonialsMiddle />
        <FAQ />
        <TestimonialsLast />
        <BottomCta />
      </div>
    </main>
  );
}
