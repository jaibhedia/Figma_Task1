/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Property1Calendar = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M16 2V6" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M8 2V6" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M3 10H21" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};
