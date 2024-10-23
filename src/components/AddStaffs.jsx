import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import InputComponents from "./InputComponents";
import JobRoleSelect from "./JobRoleSelect";
import { motion, AnimatePresence } from "framer-motion";

const AddStaffs = (props) => {
  const objectListOFInputElements = [
    {
      elementID: 0,
      placeholder: "First name, lastname",
      inputLabel: "Name",
    },
    {
      elementID: 1,
      placeholder: "Enter staff email",
      inputLabel: "Email",
    },
  ];
  return (
    <AnimatePresence>
      {props.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            className="p-[25px] max-w-[670px] w-[500px] bg-white rounded-[15px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-start">
              <h1 className="text-[#1A1A1A] font-semibold text-[23px] mb-[32px]">
                Add staff
              </h1>
              <button onClick={props.close}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            {objectListOFInputElements.map((item) => (
              <InputComponents key={item.elementID} elementParameters={item} />
            ))}
            <JobRoleSelect />

            <div className="relative h-[4rem]">
              <div className="flex absolute gap-[10px] bottom-[25px] right-0">
                <button
                  className="rounded-[8px] px-[20px] py-[12px] text-[16px] font-semibold text-[#1A1A1A] bg-[#F2F2F2] block"
                  onClick={props.close}
                >
                  Cancel
                </button>
                <button className="rounded-[8px] px-[20px] py-[12px] text-[16px] font-semibold text-white bg-[#E04403]">
                  Save & Send invite
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AddStaffs;
