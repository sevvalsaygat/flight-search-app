import React, { SVGProps } from "react";

const SvgTrust = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="104px"
      height="104px"
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="12"
        d="M95.958 22C121.031 42.867 149.785 42 158 42c-1.797 118.676-15 95-62.042 128C49 137 35.798 160.676 34 42c8.13 0 36.883.867 61.958-20Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default React.memo(SvgTrust);
