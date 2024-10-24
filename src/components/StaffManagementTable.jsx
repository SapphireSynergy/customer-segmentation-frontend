import React from "react";
import StaffManagerTableContent from "./StaffManagerTableContent";

const StaffManagementTable = (props) => {
  const tableContents = props.filteredData;
  return (
    <table className="w-full text-[14px] font-['Plus Jakarta Sans'] border-collapse">
      <thead className="border-b-3 border-[#F1F0F0] ">
        <tr className="text-[#8D8885] font-semibold ">
          <th scope="col" className=" text-left p-[25px] pl-[20px]">
            S/N
          </th>
          <th scope="col" className="p-[25px] text-left pl-[10px]">
            Full Name
          </th>
          <th scope="col" className="p-[25px] text-left pl-[10px]">
            Email
          </th>
          <th scope="col" className="p-[25px] text-left pl-[10px]">
            Phone number
          </th>
          <th scope="col" className="p-[25px] text-left pl-[10px]">
            Admin role
          </th>
          <th scope="col" className="p-[25px] text-left pl-[10px]">
            Resume Date
          </th>
          <th scope="col" className="p-[25px] text-left pl-[10px]"></th>
        </tr>
      </thead>
      <tbody>
        {tableContents.map((item) => (
          <StaffManagerTableContent
            key={item.sn}
            tableContent={item}
            setSelectedStaff={props.setSelectedStaff}
            openEditModal={props.openEditModal}
            openDeleteModal={props.openDeleteModal}
          />
        ))}
      </tbody>
    </table>
  );
};

export default StaffManagementTable;
