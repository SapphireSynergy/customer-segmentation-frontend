import React, { useState, useEffect } from "react";
import Header from "../components/Header";

import StaffManagementTable from "../components/StaffManagementTable";
const tableContents = [
  {
    sn: 1,
    name: "Amarachi",
    email: "amarachi@gmail.com",
    phone: "+234 8178 799 923",
    jobRole: "Tech",
    startDate: "15-08-2023",
  },
  {
    sn: 2,
    name: "Funke",
    email: "funke@gmail.com",
    phone: "+234 8178 799 912",
    jobRole: "Tech",
    startDate: "15-03-2023",
  },
];
const StaffManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(tableContents);

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    setSearchTerm(searchQuery);
  };

  useEffect(() => {
    const filtered = tableContents.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.email.toLocaleLowerCase().includes(searchTerm) ||
        item.jobRole.toLowerCase().includes(searchTerm) ||
        item.phone.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  }, [searchTerm, tableContents]);

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
              value={searchTerm}
              placeholder="Search"
              onChange={handleSearch}
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
          <StaffManagementTable filteredData={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;
