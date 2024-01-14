import React, { SVGProps } from "react";

const SvgCup = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="100px"
      height="100px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="icomoon-ignore"></g>
      <path
        d="M28.262 2.675c-0.039 0-0.075 0.009-0.113 0.011h-3.085v-0.011l-21.212 0.011c-0.039-0.002-0.075-0.011-0.114-0.011-1.178 0-2.132 0.955-2.132 2.133 0 0.592 0.242 1.128 0.632 1.514l4.699 4.699v-0.348c0 4.825 3.774 8.759 8.53 9.036v8.551h-4.265v1.066h9.596v-1.066h-4.265v-8.551c4.756-0.277 8.53-4.211 8.53-9.036v0.348l4.699-4.699c0.39-0.386 0.632-0.921 0.632-1.514 0-1.178-0.955-2.132-2.133-2.132zM6.937 9.512l-3.949-3.949c-0.204-0.202-0.316-0.471-0.316-0.756 0-0.573 0.454-1.042 1.023-1.065 0.033 0.004 0.066 0.007 0.099 0.009l0.029 0.002h3.114v5.76zM23.997 10.672c0 4.41-3.588 7.997-7.997 7.997s-7.997-3.587-7.997-7.997v-6.931h15.994v6.931zM29.012 5.563l-3.949 3.949v-5.76l3.143-0.002c0.034-0.002 0.067-0.005 0.099-0.009 0.568 0.023 1.023 0.492 1.023 1.065-0 0.286-0.113 0.554-0.316 0.756z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default React.memo(SvgCup);