import React from "react";
import gridOne from "../assets/images/grid-image-01.webp";
import gridTwo from "../assets/images/grid-image-02.webp";
import gridThree from "../assets/images/grid-image-03.webp";

const Features = () => {
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
              <p className="mt-6 text-lg leading-8 text-gray-900">
                Letting hot prospects go cold in impersonal newsletters they&apos;ll
                never read.
              </p>
            </div>
            <div>
              <img src={gridTwo.src} alt="image2" />
              <p className="mt-6 text-lg leading-8 text-gray-900">
                Spamming tired follow-up lines that make you look like just
                another pesky salesperson.
              </p>
            </div>
            <div>
              <img src={gridThree.src} alt="image3" />
              <p className="mt-6 text-lg leading-8 text-gray-900">
                Drowning in a sea of noisy alerts that leave you chasing dead
                ends instead of closing deals.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-5xl lg:text-center pt-20 lg:pt-24">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What if you could personally engage your top deals at just the right
            time, with meaningful, relevant outreach?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            With Aristotle you can.
          </p>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none sm:grid-col-3 md:grid-cols-3 lg:gap-y-16">
              <div>
                <p className="mt-6 text-lg leading-8 text-gray-900">
                  Nurture and progress mid-funnel deals to close.
                </p>
              </div>
              <div>
                <p className="mt-6 text-lg leading-8 text-gray-900">
                  Never miss a sales opportunity with real-time monitoring.
                </p>
              </div>
              <div>
                <p className="mt-6 text-lg leading-8 text-gray-900">
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
