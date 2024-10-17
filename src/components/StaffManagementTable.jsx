import React from "react";
import StaffManagerTableContent from "./StaffManagerTableContent";

const StaffManagementTable = () => {
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
  return (
    <table className="w-full text-[14px] font-['Plus Jakarta Sans']">
      <thead className="border-b-2 border-[#F1F0F0] ">
        <tr className="text-[#8D8885] font-semibold ">
          <th scope="col" className=" text-left p-[20px]">
            S/N
          </th>
          <th scope="col" className="p-[20px] text-left">
            Name
          </th>
          <th scope="col" className="p-[20px] text-left">
            Email
          </th>
          <th scope="col" className="p-[20px] text-left">
            Phone number
          </th>
          <th scope="col" className="p-[20px] text-left">
            Job Role
          </th>
          <th scope="col" className="p-[20px] text-left">
            Resume Date
          </th>
          <th scope="col" className="p-[20px] text-left"></th>
        </tr>
      </thead>
      <tbody>
        <StaffManagerTableContent tableContent={tableContents[0]} />
        <StaffManagerTableContent tableContent={tableContents[1]} />
      </tbody>
    </table>
  );
};

export default StaffManagementTable;
