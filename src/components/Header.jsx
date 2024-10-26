import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import GTCOLogo from "../assets/GTBank-logo.svg";
import accountImg from "../assets/UserAccount.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LoggedInUserInfo from "./LoggedInUserInfo";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleSignOut = () => {
    Cookies.remove("access_token");
    navigate("/");
  };
  const [isAdmin, setAdminState] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;
  const { userData, error } = LoggedInUserInfo(API_URL);
  useEffect(() => {
    if (userData) {
      setAdminState(userData.is_admin);
    }
  }, [userData]);
  return (
    <motion.div
      className="flex gap-[4rem] px-[20px] pt-[20px] pb-[20px] border-b-2 mb-[2rem]"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link to="/statistics/summary">
        <img src={GTCOLogo} alt="GTCO Logo" className="w-[50px]" />
      </Link>
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
          {isAdmin && (
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
          )}
          <Link
            to="/dashboard-segmentation"
            className={`${
              location.pathname === "/dashboard-segmentation"
                ? "text-[#E04403] border-b-[3px] border-[#E04403] pb-[5px]"
                : "hover:text-[#E04403] hover:border-b-[3px] hover:border-[#E04403] pb-[5px]"
            }`}
          >
            Analysis
          </Link>
          <Link
            to="/algorithm-settings"
            className={`${
              location.pathname === "/algorithm-settings"
                ? "text-[#E04403] border-b-[3px] border-[#E04403] pb-[5px]"
                : "hover:text-[#E04403] hover:border-b-[3px] hover:border-[#E04403] pb-[5px]"
            }`}
          >
            Salary Accounts Details
          </Link>
        </div>
        <div className="flex gap-[1.5rem] items-center">
          <img src={accountImg} alt="account-img" className="w-[40px]" />
          <button
            onClick={handleSignOut}
            className="px-[30px] py-[10px] bg-[#E04403] rounded-[8px] text-white"
          >
            Sign out
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
