"use client";
 
import React, { useState } from 'react';

const FAQ = () => {
  // State to track the expanded FAQ item
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // Function to toggle FAQ item
  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {/* FAQ Item 0 */}
            <div className="pt-6">
              <dt>
                <button type="button" className="flex w-full items-start justify-between text-left text-gray-900" aria-controls="faq-0" aria-expanded={expandedFAQ === 0} onClick={() => toggleFAQ(0)}>
                  <span className="text-base font-semibold leading-7">What's the best thing about Switzerland?</span>
                  <span className="ml-6 flex h-7 items-center">
                    <svg className={`h-6 w-6 ${expandedFAQ === 0 ? 'hidden' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                    <svg className={`h-6 w-6 ${expandedFAQ !== 0 ? 'hidden' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd className={`mt-2 pr-12 ${expandedFAQ === 0 ? '' : 'hidden'}`} id="faq-0">
                <p className="text-base leading-7 text-gray-600">I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</p>
              </dd>
            </div>

            {/* More questions... */}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;