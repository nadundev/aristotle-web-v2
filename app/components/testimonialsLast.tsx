import React from "react";
import hustleFundLogo from "../assets/images/hustlefund.svg";
import person from "../assets/images/janelSpilker.png"

const TestimonialsLast = () => {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          className="mx-auto w-auto h-8"
          src={hustleFundLogo.src}
          alt="testimonial-logo"
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
            <p>
              {'"'}Just wanted to share that this week alone on the handful of
              nudges I{"'"}ve sent{","} I{"'"}ve got super positive responses that have led
              to connecting with their marketing team for a meeting or similar{'"'}
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-20 w-20 rounded-full"
              src={person.src}
              alt=""
            />
            <div className="mt-4 flex flex-col gap-1 justify-start items-center space-x-3 text-base">
              <div className="font-semibold text-lg text-white">Janel Spilker</div>
              <div className="text-white font-light text-center sm:text-left !ml-0">Head of Business Development and Partnerships at Hustle Fund</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default TestimonialsLast;
