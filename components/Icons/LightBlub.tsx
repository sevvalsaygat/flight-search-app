import React, { SVGProps } from "react";

const SvgLightBlub = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.40636 12C6.07344 12 5.79192 11.8849 5.56181 11.6548C5.3317 11.4247 5.21665 11.1432 5.21665 10.8103H7.59608C7.59608 11.1432 7.48103 11.4247 7.25092 11.6548C7.02081 11.8849 6.73929 12 6.40636 12ZM4.02693 9.89963V9.01836H8.7858V9.89963H4.02693ZM4.10037 8.1224C3.4541 7.70135 2.94247 7.17503 2.56548 6.54345C2.18849 5.91187 2 5.19951 2 4.40636C2 3.21175 2.43574 2.1787 3.30722 1.30722C4.1787 0.435741 5.21175 0 6.40636 0C7.60098 0 8.63403 0.435741 9.50551 1.30722C10.377 2.1787 10.8127 3.21175 10.8127 4.40636C10.8127 5.19951 10.6267 5.91187 10.2546 6.54345C9.8825 7.17503 9.36842 7.70135 8.71236 8.1224H4.10037ZM4.4235 7.24113H8.40392C8.87393 6.92778 9.24602 6.52142 9.5202 6.02203C9.79437 5.52264 9.93146 4.98409 9.93146 4.40636C9.93146 3.43696 9.58629 2.6071 8.89596 1.91677C8.20563 1.22644 7.37576 0.881273 6.40636 0.881273C5.43696 0.881273 4.6071 1.22644 3.91677 1.91677C3.22644 2.6071 2.88127 3.43696 2.88127 4.40636C2.88127 4.98409 3.01836 5.52264 3.29253 6.02203C3.56671 6.52142 3.9437 6.92778 4.4235 7.24113Z"
        fill="#DFDFDF"
      />
    </svg>
  );
};

export default React.memo(SvgLightBlub);