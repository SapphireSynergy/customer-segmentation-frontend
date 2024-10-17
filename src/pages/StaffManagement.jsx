import React from "react";
import Header from "../components/Header";

import StaffManagementTable from "../components/StaffManagementTable";

const StaffManagement = () => {
  return (
    <div>
      <Header />

      <div className="px-[6rem] py-[1rem]">
        <div className="flex justify-between mb-[4rem]">
          <h1 className="text-[23px] text-[#18181B]">Staff Management</h1>
          <div className="flex gap-[10px] items-center">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search"
              className="px-[20px] py-[10px] w-[300px] outline-none border-2 border-[#E2E3E9] rounded-[25px]"
            />
            <a
              href="#"
              className="bg-[#E04403] px-[30px] py-[15px] text-white rounded-[8px] text-[13px] font-semibold"
            >
              + Add new staff
            </a>
          </div>
        </div>

        <div className="rounded-[15px] border-2 border-[#F1F0F0]">
          <StaffManagementTable />
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;
