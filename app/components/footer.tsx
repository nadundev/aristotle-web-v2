"use-client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/images/aristotlehq-logo.webp";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--header-border)] backdrop-blur-[var(--header-blur)]">
      <div className="flex justify-between flex-col sm:flex-row mx-auto py-12 px-4 sm:px-8">
        <div className="flex justify-center pb-10 sm:pb-0">
          <Image src={logo.src} alt="aristotle-logo" height={95} width={187} />
        </div>
        <div className="flex flex-col justify-center items-center gap-y-6 sm:gap-x-6 sm:flex-row">
          <div>
            <Link
              className="hover:text-brand-400 transition-all duration-[0.4s]"
              href=""
            >
              Privacy policy
            </Link>
          </div>
          <div className="hidden sm:block">
            |
          </div>
          <div>
            <Link className="hover:text-brand-400 duration-[0.4s]" href="">
              Terms & conditions
            </Link>
          </div>
          <div className="hidden sm:block">
            |
          </div>
          <div>
            <Link className="hover:text-brand-400 duration-[0.4s]" href="">
              Blog
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--header-border)] py-4 px-4 flex justify-between">
        <p className="text-[12px] text-gray-500">©2024 ARISTOTLE HQ</p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-500 hover:text-gray-400">
            <span className="sr-only">LinkedIn</span>
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-400">
            <span className="sr-only">X</span>
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
