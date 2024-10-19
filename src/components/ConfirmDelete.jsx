import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ConfirmDelete = () => {
  return (
    <div className="p-[25px] max-w-[670px]">
      <div className="flex justify-between items-start">
        <h1 className="text-[#1A1A1A] font-semibold text-[23px] mb-[32px]">
          Do you want to delete your account
        </h1>
        <button>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>

      <p className="mb-[40px] text-gray-700">
        Deleting your account will remove the employee records from the system.
        Do you want to proceed?
      </p>

      <div className="relative h-[4rem]">
        <div className="flex absolute gap-[10px] bottom-[25px] right-0">
          <button className="rounded-[8px] px-[20px] py-[12px] text-[16px] font-semibold text-white bg-[#E04403]">
            Proceed
          </button>
          <button className="rounded-[8px] px-[20px] py-[12px] text-[16px] font-semibold text-white bg-[#645FCE]">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
