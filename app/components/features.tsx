import React from "react";
import placeHolder from "../assets/images/placeholder.png";

const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:tex-center flex justify-center pb-10">
          <span className="text-xl font-semibold px-6 py-4 bg-[linear-gradient(90deg,rgba(206,199,190,1)_0%,rgba(132,114,92,1)_65%)] rounded-full">
            Why Aristotle?
          </span>
        </div>
        <div className="mx-auto max-w-5xl lg:text-center">
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl !leading-[46px]">
            Top-of-the-funnel leads are becoming increasingly precious. <span className="bg-brand-500 text-white px-2 rounded-xl">Over 50%
            of B2B sales conversations</span> end in no decision. These deals hold
            unrealized revenue.
          </p>
          <p className="mt-6 text-2xl leading-8 text-brand-500 font-bold">
            Right now, you might be...
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
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
                    <p className="mt-5 text-md text-left leading-6 text-gray-600">
                      Forget manual research. Actively gather data from 13+
                      sources to comprehensively monitor your leads, their
                      company and their industry.
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
                    <p className="mt-5 text-md text-left leading-6 text-gray-600">
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
                    <p className="mt-5 text-md leading-6 text-gray-600">
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
            What if you could personally engage <span className="bg-brand-500 text-white px-2 rounded-xl">your top deals</span> at just the right
            time, with meaningful, relevant outreach?
          </p>
          <p className="mt-6 text-2xl leading-8 text-brand-500 font-bold">
            With Aristotle you can.
          </p>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
            <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              <div className="flex gap-4">
                <div>
                  <div className="w-7 h-7 bg-brand-500 rounded-full grid place-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-lg font-medium text-left leading-8 text-gray-900">
                  Nurture and progress mid-funnel deals to close.
                </p>
              </div>
              <div className="flex gap-4">
                <div>
                  <div className="w-7 h-7 bg-brand-500 rounded-full grid place-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-lg text-left font-medium leading-8 text-gray-900">
                  Never miss a sales opportunity with real-time monitoring.
                </p>
              </div>
              <div className="flex gap-4">
                <div>
                  <div className="w-7 h-7 bg-brand-500 rounded-full grid place-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-lg text-left font-medium leading-8 text-gray-900">
                  Personally engage leads with tailored, multi-channel outreach
                  generated with AI.
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
