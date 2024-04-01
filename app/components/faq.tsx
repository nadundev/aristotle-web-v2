"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  // FAQs array
  const faqs = [
    {
      question: "What is the best thing about Switzerland?",
      answer: "I don't know, but the flag is a big plus.",
    },
    {
      question: "How do you throw a space party?",
      answer: "You planet.",
    },
    {
      question: "Why don’t scientists trust atoms?",
      answer: "Because they make up everything.",
    },
    {
      question: "Why did the gym close down?",
      answer: "It just didn’t work out.",
    },
    {
      question: "Why don’t skeletons fight each other?",
      answer: "They don’t have the guts.",
    },
    {
      question: "Why can't you hear a pterodactyl go to the bathroom?",
      answer: "Because the 'P' is silent.",
    },
  ];

  const variants = {
    open: { opacity: 1, height: "auto" },
    collapsed: { opacity: 0, height: 0 },
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl lg:tex-center flex justify-center pb-10">
          <span className="text-xl font-semibold px-6 py-4 bg-[linear-gradient(90deg,rgba(206,199,190,1)_0%,rgba(132,114,92,1)_65%)] rounded-full">
            FAQ{"'"}s
          </span>
        </div>
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between text-left text-gray-900"
                    aria-controls={`faq-${index}`}
                    aria-expanded={expandedFAQ === index}
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-xl font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <svg
                        className={`h-6 w-6 ${
                          expandedFAQ === index ? "hidden" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                      <svg
                        className={`h-6 w-6 ${
                          expandedFAQ !== index ? "hidden" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd className="overflow-hidden" id={`faq-${index}`}>
                  <motion.div
                    initial="collapsed"
                    animate={expandedFAQ === index ? "open" : "collapsed"}
                    variants={variants}
                    transition={{ duration: 0.8 }}
                  >
                    <p className="text-lg leading-7 text-gray-600 p-4 bg-gray-100 rounded-md mt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
