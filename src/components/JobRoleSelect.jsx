import React from "react";

const JobRoleSelect = () => {
  return (
    <div>
      <label
        htmlFor="job-selection"
        className="block text-[13px] font-semibold text-[#A9A9A9] mb-[12px]"
      >
        Job role
      </label>
      <select
        name=""
        id="job-selection"
        className="block outline-none border-2 border-gray-700 px-[15px] py-[12px] w-full mb-[36px] rounded-[8px] text-gray-700 appearance-none"
      >
        <option value="" className="px-[15px] ">
          --Select role--
        </option>
      </select>
    </div>
  );
};

export default JobRoleSelect;
