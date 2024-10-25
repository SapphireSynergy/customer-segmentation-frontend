import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { format } from "date-fns";
import SummaryCards from "../components/SummaryCards";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AddStaffs from "../components/AddStaffs";
import LoggedInUserInfo from "../components/LoggedInUserInfo";

const SummaryStatistics = () => {
  const [firstName, setFirstName] = useState("");
  const [isAdmin, setAdminState] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;
  const { userData, error } = LoggedInUserInfo(API_URL);
  useEffect(() => {
    if (userData) {
      setFirstName(userData.first_name);
      setAdminState(userData.is_admin);
    }
  }, [userData]);

  const currentDate = format(new Date(), "EEEE, dd MMMM yyyy");
  const summaryCardsList = [
    { id: 0, title: "TOTAL ACCOUNTS", value: 5518 },
    { id: 1, title: "SALARY ACCOUNTS DETECTED", value: "30%" },
    { id: 2, title: "NUMBER OF STAFF", value: 8 },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className={`relative ${isModalOpen ? "blur-sm" : ""}`}>
        <Header />

        <motion.div
          className="px-[6rem] py-[1rem]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="flex justify-between mb-[20px]">
            <div className="text-[#18181B] flex flex-col">
              <h1 className="text-[23px] mb-[10px]">Welcome, {firstName}</h1>
              <p className="text-[13px]">{currentDate}</p>
            </div>
            <div className="flex gap-[1rem] items-center">
              <Link
                to="/dashboard-segmentation"
                className="px-[20px] py-[15px] border-2 rounded-[8px]"
              >
                View Analysis
              </Link>
              {isAdmin && (
                <button
                  onClick={openModal}
                  className="px-[20px] py-[15px] bg-[#E04403] text-white rounded-[8px]"
                >
                  + Staff Member
                </button>
              )}
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-[20px] mb-[3rem]">
            {summaryCardsList.map((item) => (
              <SummaryCards key={item.id} summaryCard={item} />
            ))}
          </div>

          <h1 className="text-[19px] text-[#18181B] font-semibold mb-[15px]">
            Statistics Summary
          </h1>
          <div className="p-[20px] border-2 border-[#E1E6EC] rounded-[15px] h-[20rem]">
            <p className="text-[16px] text-[#303437]">
              Not sure what to put here...
            </p>
          </div>
        </motion.div>
      </div>
      <AddStaffs show={isModalOpen} close={closeModal} baseAPIURL={API_URL} />
    </>
  );
};

export default SummaryStatistics;
