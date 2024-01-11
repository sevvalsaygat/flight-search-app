import React from "react";

import { Icons } from "@app/components";

type FooterPropTypes = {};

const LEFT_SECTION = [
  {
    title: "Domestic Popular Cities",
  },
  {
    title: "International Popular Cities",
  },
  {
    title: "Popular Domestic Destinations",
  },
  {
    title: "Popular International Destinations",
  },
  {
    title: "Popular Countries",
  },
  {
    title: "Popular Airlines",
  },
  {
    title: "Popular Airports",
  },
];

const MIDDLE_SECTION = [
  {
    title: "For My Job",
  },
  {
    title: "Mobile Application",
  },
  {
    title: "Use and Confidentiality Agreement",
  },
  {
    title: "Transaction Guide",
  },
  {
    title: "Information Society Services",
  },
  {
    title: "Information Security Policy",
  },
  {
    title: "Ticket Cancellation Insurance",
  },
  {
    title:
      "Personal Data Protection, Privacy Policy and Usage Principles of Cookies",
  },
  {
    title: "Personal Data Protection Institution Announcements",
  },
  {
    title: "Policies for Use of Cookies",
  },
];

const RIGHT_SECTION = [
  {
    title: "Flight Ticket",
  },
  {
    title: "Hotel",
  },
  {
    title: "Rent a Car",
  },
  {
    title: "Transfer",
  },
  {
    title: "Where To Go?",
  },
  {
    title: "About Us",
  },
  {
    title: "Contact",
  },
  {
    title: "Help",
  },
  {
    title: "Announcements",
  },
  {
    title: "Campaigns",
  },
];

const Footer: React.FC<FooterPropTypes> = () => {
  return (
    <div
      id="footer"
      className="w-full bg-zinc-600 flex justify-center items-center"
    >
      <div className="flex flex-col px-80 py-5 pb-14 w-full">
        <div className="mx-auto flex flex-row gap-40">
          <div className="justify-center">
            <ul className="text-13 font-medium text-gray-300 mt-3">
              {LEFT_SECTION.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline"
                  >
                    {link.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" justify-center">
            <ul className="text-13 font-medium text-gray-300 mt-3">
              {MIDDLE_SECTION.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline"
                  >
                    {link.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="justify-center">
            <ul className="text-13 font-medium text-gray-300 mt-3">
              {RIGHT_SECTION.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline"
                  >
                    {link.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="border mt-7 border-zinc-500"></div>
        <div className="flex justify-between px-20">
          <div className="flex flex-row items-center gap-2">
            <Icons.SvgVisa className="text-neutral-100" />
            <Icons.SvgMasterCard />
            <Icons.SvgGlobalSign className="mb-1 text-neutral-100" />
            <Icons.SvgSecureShopping className="text-neutral-100" />
            <Icons.SvgTroy className="text-neutral-100" />
          </div>
          <div className="flex flex-row items-center gap-2">
            <Icons.SvgAppleStore />
            <Icons.SvgGooglePlay />
            <Icons.SvgAppGallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
