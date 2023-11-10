/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Property1Menu = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 12H20" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M4 6H20" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M4 18H20" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};
