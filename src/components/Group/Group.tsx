/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Group = ({ className }: Props): JSX.Element => {
  return (
    <div className={`w-[719px] h-[153px] ${className}`}>
      <div className="relative w-[721px] h-[153px]">
        <div className="absolute w-[249px] h-[153px] top-0 left-0 rounded-[13px] shadow-[0px_5px_10px_#0000000d] [background:linear-gradient(180deg,rgb(228.44,168,112.21)_0%,rgb(179.56,86.04,0)_100%)]">
          <div className="relative w-[184px] h-[102px] top-[24px] left-[34px]">
            <p className="absolute w-[182px] top-0 left-0 [font-family:'Lato',Helvetica] font-normal text-light-black text-[18px] tracking-[0] leading-[normal]">
              <span className="[font-family:'Lato',Helvetica] font-normal text-[#313945] text-[18px] tracking-[0]">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You have{" "}
              </span>
              <span className="font-semibold text-[28px]">276</span>
              <span className="[font-family:'Lato',Helvetica] font-normal text-[#313945] text-[18px] tracking-[0]">
                {" "}
                KYC approval pending
              </span>
            </p>
            <div className="flex w-[98px] h-[37px] items-center justify-center px-[10px] py-[5px] absolute top-[65px] left-0 bg-light-black rounded-[4px]">
              <div className="inline-flex items-center justify-center gap-[2px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-textffffff text-[16px] tracking-[0] leading-[normal]">
                  View List
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[242px] h-[153px] top-0 left-[259px]">
          <div className="relative w-[240px] h-[153px] rounded-[13px] shadow-[0px_5px_10px_#0000000d] [background:linear-gradient(180deg,rgb(242.25,146.25,146.25)_0%,rgb(193.37,0.72,0.72)_100%)]">
            <div className="absolute w-[167px] h-[54px] top-[20px] left-[34px]">
              <img
                className="absolute w-[22px] h-[22px] top-[8px] left-0"
                alt="Carbon warning"
                src="/img/carbon-warning-filled.svg"
              />
              <p className="absolute w-[167px] top-0 left-0 [font-family:'Lato',Helvetica] font-normal text-light-black text-[18px] tracking-[0] leading-[normal]">
                <span className="[font-family:'Lato',Helvetica] font-normal text-[#313945] text-[18px] tracking-[0]">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There are{" "}
                </span>
                <span className="font-semibold text-[28px]">182</span>
                <span className="[font-family:'Lato',Helvetica] font-normal text-[#313945] text-[18px] tracking-[0]">
                  {" "}
                  high risk consumers
                </span>
              </p>
            </div>
            <div className="flex w-[98px] h-[37px] items-center justify-center px-[10px] py-[5px] absolute top-[89px] left-[34px] bg-light-black rounded-[4px]">
              <div className="inline-flex items-center justify-center gap-[2px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-textffffff text-[16px] tracking-[0] leading-[normal]">
                  View List
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[212px] h-[153px] top-0 left-[509px]">
          <div className="relative w-[210px] h-[153px] rounded-[13px] shadow-[0px_5px_10px_#0000000d] [background:linear-gradient(180deg,rgb(131.63,182.21,255)_0%,rgb(0,69.7,170)_100%)]">
            <p className="absolute w-[167px] top-[20px] left-[34px] [font-family:'Lato',Helvetica] font-normal text-light-black text-[18px] tracking-[0] leading-[normal]">
              <span className="[font-family:'Lato',Helvetica] font-normal text-[#313945] text-[18px] tracking-[0]">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There are{" "}
              </span>
              <span className="font-semibold text-[28px]">32</span>
              <span className="[font-family:'Lato',Helvetica] font-normal text-[#313945] text-[18px] tracking-[0]">
                {" "}
                tickets open
              </span>
            </p>
            <div className="flex w-[98px] h-[37px] items-center justify-center px-[10px] py-[5px] absolute top-[89px] left-[34px] bg-light-black rounded-[4px]">
              <div className="inline-flex items-center justify-center gap-[2px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-textffffff text-[16px] tracking-[0] leading-[normal]">
                  View List
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute w-[533px] h-[25px] top-[28px] left-[33px]"
          alt="Group"
          src="/img/group-1000003245.png"
        />
      </div>
    </div>
  );
};
