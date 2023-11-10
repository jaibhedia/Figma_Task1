/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  search: string;
  ellipse: string;
  phTrendUpDuotone: string;
  img: string;
  line: string;
  emojioneFlagFor: string;
  healthiconsMoney: string;
}

export const Component = ({
  className,
  search = "/img/search-1.svg",
  ellipse = "/img/ellipse-261.svg",
  phTrendUpDuotone = "/img/ph-trend-up-duotone.svg",
  img = "/img/ph-trend-up-duotone-1.svg",
  line = "/img/line-1.svg",
  emojioneFlagFor = "/img/emojione-flag-for-india.svg",
  healthiconsMoney = "/img/healthicons-money-bag-outline.svg",
}: Props): JSX.Element => {
  return (
    <div className={`relative w-[1360px] h-[85px] ${className}`}>
      <div className="absolute w-[376px] h-[50px] top-[18px] left-[10px]">
        <div className="relative w-[374px] h-[50px] bg-[#f6fafc] rounded-[30px]">
          <div className="absolute w-[40px] h-[40px] top-[5px] left-[329px] bg-[#ffffff] rounded-[20px]">
            <img className="absolute w-[20px] h-[20px] top-[10px] left-[10px]" alt="Search" src={search} />
          </div>
          <div className="absolute top-[13px] left-[22px] opacity-20 [font-family:'Nunito',Helvetica] font-medium text-[#000000] text-[18px] tracking-[0] leading-[normal]">
            Search (Eg: Rewards)
          </div>
        </div>
      </div>
      <div className="absolute w-[435px] h-[85px] top-0 left-[925px]">
        <div className="absolute w-[63px] h-[24px] top-[46px] left-[14px] bg-cards-bg rounded-[2px] border border-solid border-[#8a92b4] opacity-[0.44]" />
        <div className="absolute w-[129px] h-[85px] top-0 left-[306px]">
          <div className="relative h-[85px] rounded-[10px]">
            <div className="absolute w-[129px] h-[85px] top-0 left-0 bg-[#f6fafc] rounded-[10px] rotate-180 backdrop-blur-xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(24px)_brightness(100%)]" />
            <div className="absolute w-[65px] h-[66px] top-[10px] left-[13px]">
              <div className="relative w-[85px] h-[86px] top-[-6px] left-[-14px]">
                <img
                  className="absolute w-[53px] h-[53px] top-[12px] left-[19px] object-cover"
                  alt="Ellipse"
                  src="/img/ellipse-260.png"
                />
                <img className="absolute w-[85px] h-[86px] top-0 left-0" alt="Ellipse" src={ellipse} />
              </div>
            </div>
            <img className="absolute w-[12px] h-[8px] top-[36px] left-[92px]" alt="Vector" src="/img/vector-647.svg" />
          </div>
        </div>
        <div className="absolute w-[308px] h-[83px] top-[2px] left-0">
          <div className="relative w-[300px] h-[83px] rounded-[10.93px]">
            <div className="absolute w-[300px] h-[83px] top-0 left-0 bg-cards-bg rounded-[10.93px] border border-solid border-[#c5cef0] shadow-[0px_2.02px_3.44px_#29489803,0px_8.91px_7.13px_#29489805,0px_21.86px_14.21px_#29489806,0px_42.11px_27.86px_#29489808,0px_70.86px_51.22px_#2948980a,0px_109.32px_87.46px_#2948980d] opacity-[0.44]" />
            <div className="absolute top-[19px] left-[14px] [font-family:'Poppins',Helvetica] font-medium text-[#fc6b21] text-[16px] tracking-[0] leading-[normal]">
              Gold
            </div>
            <div className="absolute top-[21px] left-[168px] [font-family:'Poppins',Helvetica] font-medium text-light-black text-[12px] tracking-[0] leading-[normal]">
              Buy:
            </div>
            <div className="absolute w-[94px] h-[21px] top-[20px] left-[197px]">
              <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-light-black text-[14px] tracking-[0] leading-[normal]">
                ₹7,390.00
              </div>
              <img
                className="absolute w-[17px] h-[16px] top-[3px] left-[75px]"
                alt="Ph trend up duotone"
                src={phTrendUpDuotone}
              />
            </div>
            <div className="absolute top-[43px] left-[168px] [font-family:'Poppins',Helvetica] font-medium text-light-black text-[12px] tracking-[0] leading-[normal]">
              Sell:
            </div>
            <div className="absolute w-[94px] h-[21px] top-[42px] left-[197px]">
              <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-light-black text-[14px] tracking-[0] leading-[normal]">
                ₹7,090.00
              </div>
              <img className="absolute w-[17px] h-[16px] top-[3px] left-[75px]" alt="Ph trend up duotone" src={img} />
            </div>
            <div className="absolute w-[67px] h-[42px] top-[20px] left-[87px]">
              <div className="absolute w-[65px] h-[20px] top-0 left-0">
                <div className="relative h-[22px] -top-px">
                  <img className="absolute w-[65px] h-px top-[11px] left-0" alt="Line" src={line} />
                  <img
                    className="absolute w-[62px] h-[22px] top-0 left-0"
                    alt="Group"
                    src="/img/group-1000002754.png"
                  />
                </div>
              </div>
              <div className="absolute top-[24px] left-[23px] [font-family:'Poppins',Helvetica] font-normal text-[#49e45f] text-[12px] tracking-[0] leading-[normal]">
                +0.34%
              </div>
            </div>
            <div className="absolute top-[47px] left-[41px] [font-family:'Poppins',Helvetica] font-normal text-light-black text-[14px] tracking-[0] leading-[normal]">
              IN
            </div>
          </div>
        </div>
        <img
          className="absolute w-[18px] h-[18px] top-[49px] left-[19px]"
          alt="Emojione flag for"
          src={emojioneFlagFor}
        />
        <img className="absolute w-[11px] h-[7px] top-[55px] left-[62px]" alt="Vector" src="/img/vector-648.svg" />
      </div>
      <div className="absolute w-[154px] h-[32px] top-[26px] left-[755px]">
        <div className="absolute w-[111px] h-[29px] top-0 left-[43px]">
          <div className="absolute w-[25px] h-[27px] top-px left-[86px]">
            <div className="relative h-[27px]">
              <div className="absolute w-[23px] h-[27px] top-0 left-0">
                <img className="absolute w-[23px] h-[22px] top-0 left-0" alt="Group" src="/img/group-3.png" />
                <img className="absolute w-[8px] h-[3px] top-[24px] left-[8px]" alt="Fill" src="/img/fill-4.svg" />
              </div>
              <img className="absolute w-[10px] h-[10px] top-px left-[15px]" alt="Vector" src="/img/vector.svg" />
            </div>
          </div>
          <img className="absolute w-[28px] h-[26px] top-px left-[44px]" alt="Group" src="/img/group-1000002748.png" />
          <img className="absolute w-[29px] h-[29px] top-0 left-0" alt="Group" src="/img/group-1000002750.png" />
        </div>
        <img className="absolute w-[32px] h-[32px] top-0 left-0" alt="Healthicons money" src={healthiconsMoney} />
      </div>
    </div>
  );
};

Component.propTypes = {
  search: PropTypes.string,
  ellipse: PropTypes.string,
  phTrendUpDuotone: PropTypes.string,
  img: PropTypes.string,
  line: PropTypes.string,
  emojioneFlagFor: PropTypes.string,
  healthiconsMoney: PropTypes.string,
};
