import React, { SVGProps } from "react";

const SvgExchange = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="#000000"
      height="100px"
      width="100px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 477.427 477.427"
      {...props}
    >
      <g>
        <polygon
          points="101.82,187.52 57.673,143.372 476.213,143.372 476.213,113.372 57.181,113.372 101.82,68.733 80.607,47.519 
		0,128.126 80.607,208.733 	"
          fill="CurrentColor"
        />
        <polygon
          points="396.82,268.694 375.607,289.907 420,334.301 1.213,334.301 1.213,364.301 420,364.301 375.607,408.694 
		396.82,429.907 477.427,349.301 	"
          fill="CurrentColor"
        />
      </g>
    </svg>
  );
};

export default React.memo(SvgExchange);
