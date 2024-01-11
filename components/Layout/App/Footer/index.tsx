import React from "react";

import { Icons } from "@app/components";

type FooterPropTypes = {};

const Footer: React.FC<FooterPropTypes> = () => {
  return (
    <div className="fixed bottom-0">
      <div
        id="footer"
        className="w-full bg-zinc-600 flex justify-center items-center"
      >
        <div className="flex flex-col px-80 py-5 pb-14 w-full">
          <div className="max-w-79px h-[322] mx-auto flex flex-row gap-40">
            <div className="justify-center">
              <ul className="text-13 font-medium text-gray-300 mt-3">
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Domestic Popular Cities
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  International Popular Cities
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Popular Domestic Destinations
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Popular International Destinations
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Popular Countries
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Popular Airlines
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Popular Airports
                </li>
              </ul>
            </div>
            <div className=" justify-center">
              <ul className="text-13 font-medium text-gray-300 mt-3">
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  For My Job
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Mobile Application
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Use and Confidentiality Agreement
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Transaction Guide
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Information Society Services
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Information Security Policy
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Ticket Cancellation Insurance
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Personal Data Protection, Privacy Policy and Usage Principles
                  of Cookies
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Personal Data Protection Institution Announcements
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Policies for Use of Cookies
                </li>
              </ul>
            </div>
            <div className="justify-center">
              <ul className="text-13 font-medium text-gray-300 mt-3">
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Flight Ticket
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Hotel
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Rent a Car
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Transfer
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Where To Go?
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  About Us
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Contact
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Help
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Announcements
                </li>
                <li className="cursor-pointer hover:text-gray-200 px-3 py-2 hover:underline">
                  Campaigns
                </li>
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
    </div>
  );
};

export default Footer;
