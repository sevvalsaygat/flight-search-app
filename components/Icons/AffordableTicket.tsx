import React, { SVGProps } from "react";

const SvgAffordableTicket = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="104"
      height="104"
      fill="#2dc44d"
      fill-rule="evenodd"
      {...props}
    >
      <path
        d="M3.25 16.25v84.5h58.502l-.002-84.5H3.25zM61.75 104H3.25A3.254 3.254 0 010 100.75v-84.5A3.254 3.254 0 013.25 13h58.5A3.254 3.254 0 0165 16.25v84.5a3.254 3.254 0 01-3.25 3.25zM32.5 29.25c-10.753 0-19.5 8.747-19.5 19.5s8.747 19.5 19.5 19.5S52 59.503 52 48.75s-8.747-19.5-19.5-19.5m0 42.25c-12.545 0-22.75-10.205-22.75-22.75S19.955 26 32.5 26s22.75 10.205 22.75 22.75S45.045 71.5 32.5 71.5"
        fill="currentColor"
      />
      <path d="M13 43.875h39v-3.25H13zm0 13h39v-3.25H13z" fill="currentColor" />
      <path d="M30.875 69.875h3.25v-42.25h-3.25z" fill="currentColor" />
      <path
        d="M32.5 29.25c-5.285 0-9.75 8.93-9.75 19.5s4.465 19.5 9.75 19.5 9.75-8.93 9.75-19.5-4.465-19.5-9.75-19.5m0 42.25c-7.3 0-13-9.992-13-22.75S25.2 26 32.5 26s13 9.992 13 22.75-5.7 22.75-13 22.75M9.75 81.25h45.5V78H9.75zm0 6.5h45.5V84.5H9.75zm61.75-19.5h23.25V65H71.5zm9.75 26h3.25v-19.5h-3.25zm-6.5 0H78v-19.5h-3.25zm6.5-35.75h3.25v-26h-3.25zm-6.5 0H78v-26h-3.25zM78 26h3.25V9.75H78z"
        fill="currentColor"
      />
      <path
        d="M81.726 28.774l-2.1-2.1-2.1 2.1-2.298-2.298 3.25-3.25a1.624 1.624 0 012.298 0l3.25 3.25-2.298 2.298zm3.25-6.5l-5.35-5.35-5.35 5.35-2.298-2.298 6.5-6.5a1.624 1.624 0 012.298 0l6.5 6.5-2.298 2.298zm6.024 80.1h3.25V71.5H91zm0-40.625h3.25V1.625H91zm-29.25-52H65V1.625h-3.25z"
        fill="currentColor"
      />
      <path
        d="M97.5 104H68.25v-3.25H97.5a3.254 3.254 0 003.25-3.25v-26a3.254 3.254 0 00-3.25-3.25V65a3.254 3.254 0 003.25-3.25V6.5a3.254 3.254 0 00-3.25-3.25H52a3.254 3.254 0 00-3.25 3.25v3.25H45.5V6.5A6.51 6.51 0 0152 0h45.5a6.51 6.51 0 016.5 6.5v55.25a6.48 6.48 0 01-2.205 4.875A6.48 6.48 0 01104 71.5v26a6.51 6.51 0 01-6.5 6.5"
        fill="currentColor"
      />
    </svg>
  );
};

export default React.memo(SvgAffordableTicket);
