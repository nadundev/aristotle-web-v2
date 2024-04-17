import React from "react";
import incendiumLogo from "../assets/images/indium-logo.svg";
import person from "../assets/images/anthony-cicconi.jpeg";

const TestimonialsMiddle = () => {
  return (
    <section className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          className="mx-auto w-auto h-8"
          src={incendiumLogo.src}
          alt="testimonial-logo"
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
            <p>
              {'"'}I{"'"}m particularly impressed by the auto-generated
              personalized messages that accompany each opportunity. Normally
              most GPT-powered personalization engines require a few layers of
              edits before the outputs become usable. These{","} however{","}{" "}
              are largely plug-and-play and also generate some really insightful
              stuff!{'"'}
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-20 w-20 rounded-full"
              src={person.src}
              alt=""
            />
            <div className="mt-4 flex flex-col gap-1 justify-start items-center space-x-3 text-base">
              <div className="font-semibold text-lg text-white">
                Anthony Cicconi
              </div>
              <div className="text-white font-light text-center sm:text-left !ml-0">
                Incendium Strategies
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default TestimonialsMiddle;
