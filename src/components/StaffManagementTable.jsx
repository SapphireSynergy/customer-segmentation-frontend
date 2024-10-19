import React from "react";
import StaffManagerTableContent from "./StaffManagerTableContent";

const StaffManagementTable = (props) => {
  const tableContents = props.filteredData;
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
        {tableContents.map((item) => (
          <StaffManagerTableContent key={item.sn} tableContent={item} />
        ))}
      </tbody>
    </table>
  );
};

export default StaffManagementTable;
