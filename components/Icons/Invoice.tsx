import React, { SVGProps } from "react";

const SvgInvoice = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      stroke-width="3"
      stroke="#000000"
      fill="none"
      {...props}
    >
      <path
        d="M52.35,57.08H11.65v-50A.11.11,0,0,1,11.81,7l4.11,3.85a.11.11,0,0,0,.13,0L19.35,7a.09.09,0,0,1,.12,0l3.72,3.89a.11.11,0,0,0,.13,0L26.61,7a.09.09,0,0,1,.13,0l2.86,3.87a.1.1,0,0,0,.14,0L33,7a.09.09,0,0,1,.13,0l2.69,3.85a.1.1,0,0,0,.14,0L38.86,7A.1.1,0,0,1,39,7l2.85,3.85a.1.1,0,0,0,.14,0L44.7,7a.09.09,0,0,1,.15,0l2.25,3.84a.09.09,0,0,0,.13,0L52.2,7a.1.1,0,0,1,.15.09Z"
        stroke-linecap="round"
      />
      <line
        x1="19.42"
        y1="43.04"
        x2="46.02"
        y2="43.04"
        stroke-linecap="round"
      />
      <line
        x1="19.42"
        y1="49.29"
        x2="46.02"
        y2="49.29"
        stroke-linecap="round"
      />
      <path d="M40.21,34.51a9,9,0,1,1-5.48-16.15,8.86,8.86,0,0,1,3.78.83" />
      <line x1="21.22" y1="25.18" x2="36.21" y2="25.18" />
      <line x1="21.22" y1="29.76" x2="34.4" y2="29.76" />
    </svg>
  );
};

export default React.memo(SvgInvoice);
