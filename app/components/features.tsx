import React from "react";
import placeHolder from "../assets/images/placeholder.png";

const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center">
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl !leading-[46px]">
            <span className="text-gray-500">Top-of-the-funnel leads are becoming increasingly precious.</span> Over 50%
            of B2B sales conversations end in no decision. <span className="text-gray-500">These deals hold
            unrealized revenue.</span>
          </p>
          <p className="mt-16 text-2xl leading-8 text-gray-900 font-medium">
            Right now, you might be...
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-8 lg:max-w-4xl">
          <div className="grid max-w-2xl grid-cols-1 gap-x-12 gap-y-10 lg:max-w-none sm:grid-col-3 md:grid-cols-3 lg:gap-y-16">
            <div>
              <article className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    src={placeHolder.src}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                </div>
                <div className="max-w-xl">
                  <div className="group relative">
                    <p className="mt-5 text-md text-left leading-6 text-gray-700">
                      Letting hot prospects go cold in impersonal newsletters
                      they{"'"}ll never read.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div>
              <article className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    src={placeHolder.src}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                </div>
                <div className="max-w-xl">
                  <div className="group relative">
                    <p className="mt-5 text-md text-left leading-6 text-gray-700">
                      Spamming tired follow-up lines that make you look like
                      just another pesky salesperson.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div>
              <article className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    src={placeHolder.src}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                </div>
                <div className="max-w-xl">
                  <div className="group relative">
                    <p className="mt-5 text-md leading-6 text-gray-700">
                      Drowning in a sea of noisy alerts that leave you chasing
                      dead ends instead of closing deals.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-5xl lg:text-center pt-20 lg:pt-24">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl !leading-[46px]">
            What if you could personally engage your top deals at just the right
            time, with meaningful, relevant outreach?
          </p>
          <p className="mt-10 text-2xl leading-8 text-black font-medium">
            With Aristotle you can.
          </p>
          <div className="mx-auto mt-14 max-w-2xl sm:mt-14 lg:mt-12 lg:max-w-6xl">
            <div className="grid max-w-2xl grid-cols-1 gap-x-2 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              <div className="flex gap-2">
                <div>
                  <div className="mt-1 w-5 h-5 bg-green-500 rounded-full grid place-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-[15px] font-normal text-left leading-6 text-gray-700">
                  Nurture and progress mid-funnel deals to close.
                </p>
              </div>
              <div className="flex gap-2">
                <div>
                  <div className="mt-1 w-5 h-5 bg-green-500 rounded-full grid place-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-[15px] font-normal text-left leading-6 text-gray-700">
                  Never miss a sales opportunity with real-time monitoring.
                </p>
              </div>
              <div className="flex gap-2">
                <div>
                  <div className="mt-1 w-5 h-5 bg-green-500 rounded-full grid place-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-[15px] font-normal text-left leading-6 text-gray-700">
                  Personally engage leads with AI generated outreach on Email, LinkedIn or X (Twitter).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
