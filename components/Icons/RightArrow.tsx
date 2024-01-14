import React, { SVGProps } from "react";

const SvgRightArrow = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        fill="currentColor"
      />
    </svg>
  );
};

export default React.memo(SvgRightArrow);
