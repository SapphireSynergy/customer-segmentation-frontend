import React from "react";
import GTCOLogo from "../assets/GTBank-logo.svg";
import accountImg from "../assets/UserAccount.jpg";

const Header = () => {
  return (
    <div className="flex gap-[4rem] px-[20px] pt-[12px] pb-[2px] border-b-2 mb-[2rem]">
      <img src={GTCOLogo} alt="GTCO Logo" className="w-[50px]" />
      <div className="flex justify-between w-full">
        <div className="flex gap-[2rem] text-[#8D8885] font-semibold items-center">
          <a
            href="/statistics/summary"
            className="hover:text-[#E04403] hover:border-b-[3px] hover:border-[#E04403] pb-[5px]"
          >
            Home
          </a>
          <a
            href="/staff-management"
            className="hover:text-[#E04403] hover:border-b-[3px] hover:border-[#E04403] pb-[5px]"
          >
            Staff Management
          </a>
          <a
            href="#"
            className="hover:text-[#E04403] hover:border-b-[3px] hover:border-[#E04403] pb-[5px]"
          >
            PowerBI Segmentation
          </a>
          <a
            href="#"
            className="hover:text-[#E04403] hover:border-b-[3px] hover:border-[#E04403] pb-[5px]"
          >
            Algorithm Settings
          </a>
        </div>
        <div className="flex gap-[1.5rem]">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search..."
            className="w-[350px] px-[10px] outline-none bg-[#E2E3E9] rounded-[20px] h-[50px] self-center"
          />
          <img src={accountImg} alt="account-img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
