import React from "react";
import Header from "../components/Header";
import { format } from "date-fns";
import SummaryCards from "../components/SummaryCards";

const SummaryStatistics = () => {
  const firstName = "Hold Place";
  const currentDate = format(new Date(), "EEEE, dd MMMM yyyy");
  const summaryCardsList = [
    { title: "TOTAL CUSTOMERS", value: 1200 },
    { title: "RECENT SEGMENTATIONS", value: 1200 },
    { title: "NUMBER OF STAFF", value: 3 },
  ];
  return (
    <>
      <Header />

      <div className="px-[6rem] py-[1rem]">
        <div className="flex justify-between mb-[20px]">
          <div className="text-[#18181B] flex flex-col">
            <h1 className="text-[23px] mb-[10px]">Welcome, {firstName}</h1>
            <p className="text-[13px]">{currentDate}</p>
          </div>
          <div className="flex gap-[1rem] items-center">
            <a href="#" className="px-[20px] py-[15px] border-2 rounded-[8px]">
              View PowerBI Report
            </a>
            <a
              href="#"
              className="px-[20px] py-[15px] bg-[#E04403] text-white rounded-[8px]"
            >
              + Staff Member
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[20px] mb-[3rem]">
          <SummaryCards summaryCard={summaryCardsList[0]} />
          <SummaryCards summaryCard={summaryCardsList[1]} />
          <SummaryCards summaryCard={summaryCardsList[2]} />
        </div>

        <h1 className="text-[19px] text-[#18181B] font-semibold mb-[15px]">
          Summary Statistics
        </h1>
        <div className="p-[20px] border-2 border-[#E1E6EC] rounded-[15px] h-[20rem]">
          <p className="text-[16px] text-[#303437]">
            Not sure what to put here...
          </p>
        </div>
      </div>
    </>
  );
};

export default SummaryStatistics;
