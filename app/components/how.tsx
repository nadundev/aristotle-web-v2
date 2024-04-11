import React from "react";
import gridOne from "../assets/images/grid-image-01.webp";
import gridTwo from "../assets/images/grid-image-02.webp";
import gridThree from "../assets/images/grid-image-03.webp";

const How = () => {
  return (
    <div className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none sm:grid-col-3 md:grid-cols-3 lg:gap-y-16">
            <div className="min-w-sm bg-white border border-gray-200 rounded-lg">
              <a href="#">
                <img className="rounded-t-lg" src={gridOne.src} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    Actively monitor
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-500">
                  Forget manual research. Actively gather data from 13+ sources
                  to comprehensively monitor your contacts, their company and
                  their industry.
                </p>
              </div>
            </div>
            <div className="min-w-sm bg-white border border-gray-200 rounded-lg">
              <a href="#">
                <img className="rounded-t-lg" src={gridTwo.src} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
                    Identify opportunities
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-500">
                  Get your timing right. Select from 17+ signals to identify the
                  perfect opportunity to initiate your outreach. Or even build
                  your own signals.
                </p>
              </div>
            </div>
            <div className="min-w-sm bg-white border border-gray-200 rounded-lg">
              <a href="#">
                <img className="rounded-t-lg" src={gridThree.src} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
                    Intelligently connect
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-500">
                  Do not sound like spam. Craft AI generated personalized
                  outreach while taking into account your previous interactions
                  with the contacts.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl lg:text-center pt-20 lg:pt-20">
          <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Get opportunities from your leads in 3 steps
          </p>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-16 lg:mt-16 lg:max-w-5xl">
            <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none sm:grid-col-3 md:grid-cols-3 lg:gap-y-16">
              <div className="flex flex-col gap-1 bg-white rounded-lg p-4 border border-[#ececec]">
                <div className="flex flex-col gap-4">
                  <div className="w-7 h-7 bg-brand-600 text-white text-xl rounded-full grid place-content-center">
                    1
                  </div>
                  <p className="text-lg text-left font-medium leading-8 text-gray-900">
                    Add in your company details
                  </p>
                </div>
                <p className="text-gray-700 text-left">
                  Give Aristotle a quick rundown of your business so we can generate messaging when it's time to nudge your leads.
                </p>
              </div>
              <div className="flex flex-col gap-1 bg-white rounded-lg p-4 border border-[#ececec]">
                <div className="flex flex-col gap-4">
                  <div className="w-7 h-7 bg-brand-600 text-white text-xl rounded-full grid place-content-center">
                    2
                  </div>
                  <p className="text-lg text-left font-medium leading-8 text-gray-900">
                    Select your signals
                  </p>
                </div>
                <p className="text-gray-700 text-left">
                  Choose from 17+ intent signals to bring opportunities from your leads to you. <br /><br /><a href="https://www.notion.so/aristotlehq/Aristotle-Signal-Library-1f652e813cb44e04b185bc8cb1ce5238" target="_blank">Explore Aristotle's Signal Library</a>
                </p>
              </div>
              <div className="flex flex-col gap-1 bg-white rounded-lg p-4 border border-[#ececec]">
                <div className="flex flex-col gap-4">
                  <div className="w-7 h-7 bg-brand-600 text-white text-xl rounded-full grid place-content-center">
                    3
                  </div>
                  <p className="text-lg text-left font-medium leading-8 text-gray-900">
                    Import your leads
                  </p>
                </div>
                <p className="text-gray-700 text-left">
                  Bring your leads from CSV upload, Hubspot CRM and/or extracting them directly from your email. Aristotle enriches them automatically.
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
