import React, { SVGProps } from "react";

const SvgOnlineCheckIn = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="800px"
      width="800px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 478.721 478.721"
      {...props}
    >
      <g>
        <path
          d="M439.607,14.076H39.114C17.545,14.076,0,31.629,0,53.19v271.798
		c0,21.561,17.545,39.115,39.114,39.115h134.263v52.439h-21.186c-13.286,0-24.052,10.773-24.052,24.052
		c0,13.277,10.766,24.051,24.052,24.051h174.371c13.286,0,24.051-10.773,24.051-24.051c0-13.278-10.765-24.052-24.051-24.052
		h-21.186v-52.439h134.231c21.569,0,39.114-17.554,39.114-39.115V53.19C478.721,31.629,461.176,14.076,439.607,14.076z
		 M382.478,340.052c-6.029,0-10.898-4.87-10.898-10.883c0-6.028,4.87-10.898,10.898-10.898c6.013,0,10.882,4.87,10.882,10.898
		C393.36,335.182,388.491,340.052,382.478,340.052z M430.58,342.666c-7.469,0-13.513-6.045-13.513-13.497
		c0-7.47,6.044-13.514,13.513-13.514c7.453,0,13.498,6.044,13.498,13.514C444.078,336.621,438.033,342.666,430.58,342.666z
		 M446.653,302.017H32.068V53.19c0-3.882,3.163-7.045,7.046-7.045h400.493c3.884,0,7.045,3.163,7.045,7.045V302.017z"
        />
        <path
          d="M257.235,177.972l17.631-10.679c1.495-0.908,2.341-2.599,2.152-4.337
		c-0.18-1.754-1.353-3.226-3.007-3.807l-80.945-28.185c-1.635-0.563-3.46-0.155-4.682,1.081c-1.228,1.222-1.644,3.038-1.081,4.682
		l28.178,80.939c0.571,1.66,2.051,2.834,3.797,3.021c1.738,0.173,3.428-0.658,4.337-2.16l10.671-17.617l33.117,33.119
		c0.847,0.845,1.996,1.314,3.195,1.314c1.198,0,2.348-0.47,3.194-1.314l16.55-16.566c1.762-1.771,1.762-4.62,0-6.39L257.235,177.972
		z"
        />
      </g>
    </svg>
  );
};

export default React.memo(SvgOnlineCheckIn);
