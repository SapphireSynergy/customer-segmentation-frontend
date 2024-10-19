import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import InputComponents from "./InputComponents";
import JobRoleSelect from "./JobRoleSelect";

const AddStaffs = () => {
  const objectListOFInputElements = [
    { elementID: 0, placeholder: "First name, lastname", inputLabel: "Name" },
    {
      elementID: 1,
      placeholder: "Enter staff email",
      inputLabel: "Email",
    },
  ];
  return (
    <div className="p-[25px] max-w-[670px] ">
      <div className="flex justify-between items-start">
        <h1 className="text-[#1A1A1A] font-semibold text-[23px] mb-[32px]">
          Add staff
        </h1>
        <button>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>

      {objectListOFInputElements.map((item) => (
        <InputComponents key={item.elementID} elementParameters={item} />
      ))}
      <JobRoleSelect />

      <div className="relative h-[4rem]">
        <div className="flex absolute gap-[10px] bottom-[25px] right-0">
          <button className="rounded-[8px] px-[20px] py-[12px] text-[16px] font-semibold text-[#1A1A1A] bg-[#F2F2F2] block">
            Cancel
          </button>
          <button className="rounded-[8px] px-[20px] py-[12px] text-[16px] font-semibold text-white bg-[#E04403]">
            Save & Send invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStaffs;
