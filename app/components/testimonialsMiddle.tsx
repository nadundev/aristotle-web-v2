import React from "react";
import levyLogo from "../assets/images/levyLogo.svg";
import person from "../assets/images/admaSpector.jpeg";

const TestimonialsMiddle = () => {
  return (
    <section className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          className="mx-auto w-auto h-12"
          src={levyLogo.src}
          alt="testimonial-logo"
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
            <p>
              "We're happy customers of Aristotle. I'm skeptical of most
              products like them but it's actually worked!"
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-20 w-20 rounded-full"
              src={person.src}
              alt=""
            />
            <div className="mt-4 flex flex-col justify-start items-center space-x-3 text-base">
              <div className="font-semibold text-lg text-white">
                Adam Spector
              </div>
              <div className="text-white font-light">
                Founder & CEO at levy.company
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default TestimonialsMiddle;
