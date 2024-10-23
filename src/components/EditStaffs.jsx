import React, { useState, useEffect } from "react";
import InputComponents from "./InputComponents";
import JobRoleSelect from "./JobRoleSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const EditStaffs = (props) => {
  const [objectListOFInputElements, setObjectListOfInputElements] = useState(
    []
  );
  useEffect(() => {
    if (props.dataContent !== null) {
      const inputElements = [
        {
          elementID: 0,
          placeholder: "First name, lastname",
          inputLabel: "Name",
          value: props.dataContent.name,
        },
        {
          elementID: 1,
          placeholder: "eg. akin.obi@gmail.com",
          inputLabel: "Email",
          value: props.dataContent.email,
        },
        {
          elementID: 2,
          placeholder: "+234...",
          inputLabel: "Phone number",
          value: props.dataContent.phone,
        },
      ];
      setObjectListOfInputElements(inputElements);
    }
  }, [props.dataContent]);

  return (
    <AnimatePresence>
      {props.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            className="p-[25px] max-w-[670px] w-[450px] bg-white rounded-[15px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-start">
              <h1 className="text-[#1A1A1A] font-semibold text-[23px] mb-[32px]">
                Edit staff details
              </h1>
              <button onClick={props.close}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <form action="" className="mb-[20px]">
              {objectListOFInputElements.map((item) => (
                <InputComponents
                  key={item.elementID}
                  elementParameters={item}
                />
              ))}
              <JobRoleSelect />

              <label
                htmlFor="delete-account"
                className="block text-[13px] font-semibold text-[#A9A9A9] mb-[12px]"
              >
                Delete Account
              </label>
              <div className="h-[55px] bg-[#E04403] rounded-[8px] w-[180px] flex justify-center gap-[10px] items-center cursor-pointer">
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="text-white w-[14px]"
                />
                <input
                  type="submit"
                  value="Delete Account"
                  id="delete-account"
                  className="text-white font-semibold text-[16px]"
                />
              </div>
            </form>

            <div className="relative h-[4rem]">
              <div className="flex absolute gap-[10px] bottom-[25px] right-0">
                <button
                  className="rounded-[8px] px-[20px] py-[12px] text-[16px] font-semibold text-[#1A1A1A] bg-[#F2F2F2] block"
                  onClick={props.close}
                >
                  Cancel
                </button>
                <button className="rounded-[8px] px-[20px] py-[12px] text-[16px] font-semibold text-white bg-[#E04403]">
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EditStaffs;
