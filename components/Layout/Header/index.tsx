import React from "react";
import Image from "next/image";

import { Icons } from "@app/components";

type HeaderPropTypes = {};

const HEADER_LEFT_ITEM: Array<{
  title: string;
}> = [
  {
    title: "Flight",
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
];

const HEADER_RIGHT_ITEM: Array<{
  icon: React.FC;
  title: string;
}> = [
  {
    icon: () => <Icons.SvgLightBlub />,
    title: "Quick Transactions",
  },
  {
    icon: () => <Icons.SvgHelp />,
    title: "Help",
  },
  {
    icon: () => <Icons.SvgSignUp />,
    title: "Sign Up",
  },
  {
    icon: () => <Icons.SvgSignIn />,
    title: "Sign In",
  },
  {
    icon: () => (
      <div className="flex items-center">
        | <Icons.SvgLanguage className="ml-2" />
      </div>
    ),
    title: "English/TRY",
  },
];

const Header: React.FC<HeaderPropTypes> = () => {
  return (
    <div className="flex flex-row justify-between w-full bg-slate-800 shadow-sm h-fit sticky p-3 px-28">
      <div className="flex flex-row items-center gap-6">
        <div className="flex flex-row items-center gap-3 cursor-pointer">
          <Image src="/airplane.png" width={40} height={40} alt="airplane" />
          <div className="flex flex-row items-center">
            <div className="flex text-lg font-light text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-300">
              SKYTIME
            </div>
            <div className="flex text-lg font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-50 to-orange-200">
              TRAVEL
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 ml-2">
          {HEADER_LEFT_ITEM.map(({ title }, index) => {
            return (
              <div
                key={index}
                className="text-white text-xs hover:text-neutral-200 cursor-pointer"
              >
                {title}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row items-center gap-3">
        {HEADER_RIGHT_ITEM.map(({ icon: Icon, title }, index) => {
          return (
            <div
              key={index}
              className="flex flex-row items-center text-white gap-0.5 text-xs hover:text-neutral-200 cursor-pointer"
            >
              <Icon />
              {title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
