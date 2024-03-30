import React from "react";
import gridOne from "../assets/images/grid-image-01.webp";
import gridTwo from "../assets/images/grid-image-02.webp";
import gridThree from "../assets/images/grid-image-03.webp";

const How = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:tex-center flex justify-center pb-10">
          <span className="text-xl font-semibold px-6 py-4 bg-[linear-gradient(90deg,rgba(206,199,190,1)_0%,rgba(132,114,92,1)_65%)] rounded-full">
            How it works
          </span>
        </div>
        <div className="mx-auto max-w-5xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl !leading-[46px]">
            Aristotle can keep your leads warm and up to date. Manage and
            monitor leads using state of the art AI.
          </p>
          <p className="mt-6 text-2xl leading-8 text-brand-500 font-medium">
            This is how aristotle make your workflow easy...
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none sm:grid-col-3 md:grid-cols-3 lg:gap-y-16">
            <div className="min-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-md">
              <a href="#">
                <img className="rounded-t-lg" src={gridOne.src} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    Actively monitor
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Forget manual research. Actively gather data from 13+ sources
                  to comprehensively monitor your contacts, their company and
                  their industry.
                </p>
              </div>
            </div>
            <div className="min-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-md">
              <a href="#">
                <img className="rounded-t-lg" src={gridTwo.src} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
                    Identify opportunities
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Get your timing right. Select from 17+ signals to identify the
                  perfect opportunity to initiate your outreach. Or even build
                  your own signals.
                </p>
              </div>
            </div>
            <div className="min-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-md">
              <a href="#">
                <img className="rounded-t-lg" src={gridThree.src} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
                    Intelligently connect
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Do not sound like spam. Craft AI generated personalized
                  outreach while taking into account your previous interactions
                  with the contacts.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl lg:text-center pt-20 lg:pt-24">
          <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Get opportunities from your leads in 3 steps
          </p>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
            <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none sm:grid-col-3 md:grid-cols-3 lg:gap-y-16">
              <div className="flex flex-col gap-4 bg-white shadow-xl rounded-lg p-4 border border-[#ececec]">
                <div>
                  <div className="w-7 h-7 bg-brand-500 text-white text-xl rounded-full grid place-content-center">
                    1
                  </div>
                </div>
                <p className="text-lg text-left font-medium leading-8 text-gray-900">
                  Add in your company details.
                </p>
              </div>
              <div className="flex flex-col gap-4 bg-white shadow-xl rounded-lg p-4 border border-[#ececec]">
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
                  Select your signals.
                </p>
              </div>
              <div className="flex flex-col gap-4 bg-white shadow-xl rounded-lg p-4 border border-[#ececec]">
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
                  Import your leads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
