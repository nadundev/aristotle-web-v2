import React from "react";
import gridOne from "../assets/images/grid-image-01.webp";
import gridTwo from "../assets/images/grid-image-02.webp";
import gridThree from "../assets/images/grid-image-03.webp";

const How = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Top-of-the-funnel leads are becoming increasingly precious. Over 50%
            of B2B sales conversations end in no decision. These deals hold
            unrealized revenue.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Right now, you might be...
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none sm:grid-col-3 md:grid-cols-3 lg:gap-y-16">
            <div>
              <img src={gridOne.src} className="w-full h-auto" alt="image1" />
              <h2>Actively monitor</h2>
              <p className="mt-6 text-lg leading-8 text-gray-900">
                Forget manual research. Actively gather data from 13+ sources to
                comprehensively monitor your contacts, their company and their
                industry.
              </p>
            </div>
            <div>
              <h2>Identify opportunities</h2>
              <img src={gridTwo.src} alt="image2" />
              <p className="mt-6 text-lg leading-8 text-gray-900">
                Get your timing right. Select from 17+ signals to identify the
                perfect opportunity to initiate your outreach. Or even build
                your own signals.
              </p>
            </div>
            <div>
              <h2>Intelligently connect</h2>
              <img src={gridThree.src} alt="image3" />
              <p className="mt-6 text-lg leading-8 text-gray-900">
                Do not sound like spam. Craft AI generated personalized outreach
                while taking into account your previous interactions with the
                contacts.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-5xl lg:text-center pt-20 lg:pt-24">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get opportunities from your leads in 3 steps
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            With Aristotle you can.
          </p> */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none sm:grid-col-3 md:grid-cols-3 lg:gap-y-16">
              <div>
                <p className="mt-6 text-lg leading-8 text-gray-900">
                  1. Add in your company details
                </p>
              </div>
              <div>
                <p className="mt-6 text-lg leading-8 text-gray-900">
                  2. Select your signals.
                </p>
              </div>
              <div>
                <p className="mt-6 text-lg leading-8 text-gray-900">
                  3. Import your leads
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
