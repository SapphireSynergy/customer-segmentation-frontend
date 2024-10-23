import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const ConfirmDelete = (props) => {
  return (
    <AnimatePresence>
      {props.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            className="p-[25px] max-w-[650px] bg-white rounded-[15px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-start">
              <h1 className="text-[#1A1A1A] font-semibold text-[23px] mb-[32px]">
                Do you want to delete your account
              </h1>
              <button onClick={props.close}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <p className="mb-[40px] text-gray-700">
              Deleting your account will remove the employee records from the
              system. Do you want to proceed?
            </p>

            <div className="relative h-[4rem]">
              <div className="flex absolute gap-[10px] bottom-[25px] right-0">
                <button className="rounded-[8px] px-[20px] py-[12px] text-[16px] font-semibold text-white bg-[#E04403]">
                  Proceed
                </button>
                <button
                  className="rounded-[8px] px-[20px] py-[12px] text-[16px] font-semibold text-white bg-[#645FCE]"
                  onClick={props.close}
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmDelete;
