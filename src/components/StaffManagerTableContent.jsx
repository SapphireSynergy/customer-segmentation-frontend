import React from "react";
import accountImg from "../assets/UserAccount.jpg";

const StaffManagerTableContent = (props) => {
  return (
    <tr className="text-[#1D1B1B]">
      <td className="p-[20px] text-[#8D8885] font-semibold">
        {props.tableContent.sn}
      </td>
      <td className="flex items-center p-[20px] gap-[10px]">
        <img src={accountImg} alt="" className="w-[30px]" />
        <p className="text-[#1D1B1B] font-medium">{props.tableContent.name}</p>
      </td>
      <td className="p-[20px]">
        <p>{props.tableContent.email}</p>
      </td>
      <td className="p-[20px]">
        <p>{props.tableContent.phone}</p>
      </td>
      <td className="p-[20px]">
        <p>{props.tableContent.jobRole}</p>
      </td>
      <td className="p-[20px]">
        <p>{props.tableContent.startDate}</p>
      </td>
      <td className="p-[20px]"></td>
    </tr>
  );
};

export default StaffManagerTableContent;
