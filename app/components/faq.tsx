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
      question: "What are Aristotle’s Monitoring Sources?",
      answer: (
        <>
          <ol className="px-4 flex flex-col gap-2">
            <li>1. Lead Company LinkedIn Profile</li>
            <li>2. Lead Company LinkedIn Activity</li>
            <li>3. Lead Personal LinkedIn Activity</li>
            <li>4. Lead Personal LinkedIn Profile</li>
            <li>5. Lead Company Twitter Activity</li>
            <li>6. Lead Personal Twitter Activity</li>
            <li>7. Lead Company Website</li>
            <li>8. News Sources</li>
          </ol>
          <p className="pt-5 text-sm">
            * Monitoring Sources are gradually and continuously being added.
          </p>
        </>
      ),
    },
    {
      question: "What are the Signals?",
      answer: (
        <>
          <p>
            Check out{" "}
            <a
              className="text-brand-500 font-medium"
              href="https://www.notion.so/aristotlehq/Aristotle-Signal-Library-1f652e813cb44e04b185bc8cb1ce5238"
            >
              Aristotle&apos;s list of signals here.
            </a>
          </p>
          <p className="pt-5 text-sm">* New signals are continuously added.</p>
        </>
      ),
    },
    {
      question: "What email address does Aristotle use?",
      answer:
        "Aristotle connects and uses your existing email address, so emails remain on the same thread.",
    },
    {
      question: "How does Aristotle maintain my privacy and security?",
      answer:
        "Only emails concerning your uploaded leads are accessed. None of your emails are read by humans. We encrypt all data stored on our database. The access provided is similar to the access your CRM requires.",
    },
    {
      question: "Does Aristotle put my domain at risk?",
      answer:
        "No, as every email is personalized, relates to a specific signal and is not cold.",
    },
    {
      question: "How does Aristotle ensure my personal brand is preserved?",
      answer:
        "Aristotle personalizes emails based on your communication style, and you get to approve or edit every email before it's sent.",
    },
    {
      question: "Does Aristotle mass email leads?",
      answer:
        "No. Aristotle crafts a personalized email for every opportunity, which can be approved or edited before sending.",
    },
    {
      question: "Does Aristotle respond to replies?",
      answer:
        "No. Aristotle aims to open conversations for you to take forward.",
    },
    {
      question:
        "How long does it take to start seeing opportunities for Nudge?",
      answer:
        "Monitoring of your leads begins from day 1. However, we only show opportunities when a suitable one presents itself. We expect about 20% of your leads to present an opportunity for outreach every month.",
    },
    {
      question: "What type of emails do you send out?",
      answer:
        "Aristotle drafts emails based on the most effective follow-up tactics used by the best sales reps. These include rapport building, education and direct selling. Each draft can be edited prior to sending an email.",
    },
    {
      question: "Why does this work?",
      answer:
        "Aristotle is a system of action that gives you the superpowers of the best sales reps, i.e., extensive research and meticulous follow-up.",
    },
    {
      question: "How do I get my leads into Aristotle?",
      answer:
        "We support CSV, CRM and extracting leads right from your email. You don't have to spend a lot of time figuring out who to track.",
    },
    {
      question: "Do I need to clean my list of leads prior to uploading?",
      answer:
        "Give us your list of leads. The only fields we require are First Name, Last Name and Email. We will clean the list for you and also enrich it with any missing required information.",
    },
    {
      question: "How much time do I need to spend daily on Aristotle?",
      answer:
        "This would depend on the number of leads you have to follow up with. We identify the best outreach opportunities and also draft corresponding personalized emails. This saves you time manually researching your leads and enables you to fly through your daily follow-up activities.",
    },
    {
      question: "What if I am out of office?",
      answer:
        "No emails get sent without your approval. Hence, when you return to the office, you will have a list of opportunities to action.",
    },
    {
      question:
        "How is Aristotle different from platforms like Apollo and ZoomInfo?",
      answer:
        "Aristotle focuses on monitoring and nurturing your qualified leads. Aristotle’s monitoring is real-time and highly accurate, which is required for contextual and timely follow-ups with your leads. Aristotle also has broader coverage in monitoring sources and signals, even allowing you to build your own custom signals. Finally, Aristotle is designed to offer daily actionable opportunities for your sales team without requiring the setup of complex workflows.",
    },
  ];

  const variants = {
    open: { opacity: 1, height: "auto" },
    collapsed: { opacity: 0, height: 0 },
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-24 sm:py-32">
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
                    transition={{ duration: 0.3 }}
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
