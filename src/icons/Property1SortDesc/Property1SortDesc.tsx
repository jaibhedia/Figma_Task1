/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Property1SortDesc = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 5H21" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M11 9H18" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M11 13H15" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M3 17L6 20L9 17" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M6 18V4" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};
