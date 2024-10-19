import React from "react";
import GTCOLogo from "../assets/GTBank-logo.svg";
import accountImg from "../assets/UserAccount.jpg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className="flex gap-[4rem] px-[20px] pt-[12px] pb-[2px] border-b-2 mb-[2rem]">
      <img src={GTCOLogo} alt="GTCO Logo" className="w-[50px]" />
      <div className="flex justify-between w-full">
        <div className="flex gap-[2rem] text-[#8D8885] font-semibold items-center">
          <Link
            to="/statistics/summary"
            className={`${
              location.pathname === "/statistics/summary"
                ? "text-[#E04403] border-b-[3px] border-[#E04403] pb-[5px]"
                : "hover:text-[#E04403] hover:border-b-[3px] hover:border-[#E04403] pb-[5px]"
            }`}
          >
            Home
          </Link>
          <Link
            to="/staff-management"
            className={`${
              location.pathname === "/staff-management"
                ? "text-[#E04403] border-b-[3px] border-[#E04403] pb-[5px]"
                : "hover:text-[#E04403] hover:border-b-[3px] hover:border-[#E04403] pb-[5px]"
            }`}
          >
            Staff Management
          </Link>
          <Link
            to="/dashboard-segmentation"
            className={`${
              location.pathname === "/dashboard-segmentation"
                ? "text-[#E04403] border-b-[3px] border-[#E04403] pb-[5px]"
                : "hover:text-[#E04403] hover:border-b-[3px] hover:border-[#E04403] pb-[5px]"
            }`}
          >
            PowerBI Segmentation
          </Link>
          <Link
            to="/algorithm-settings"
            className={`${
              location.pathname === "/algorithm-settings"
                ? "text-[#E04403] border-b-[3px] border-[#E04403] pb-[5px]"
                : "hover:text-[#E04403] hover:border-b-[3px] hover:border-[#E04403] pb-[5px]"
            }`}
          >
            Algorithm Settings
          </Link>
        </div>
        <div className="flex gap-[1.5rem] items-center">
          <img src={accountImg} alt="account-img" />
          <a
            href="/"
            className="px-[30px] py-[10px] bg-[#E04403] rounded-[8px] text-white"
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
