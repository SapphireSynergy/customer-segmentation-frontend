import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import InputComponents from "./InputComponents";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";

const AddStaffs = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isAdmin: false,
    password: "",
  });

  const objectListOFInputElements = [
    {
      elementID: 0,
      placeholder: "Enter staff first name...",
      inputLabel: "First Name",
      value: formData.firstName,
      onChange: (value) => setFormData({ ...formData, firstName: value }),
    },
    {
      elementID: 1,
      placeholder: "Enter staff last name...",
      inputLabel: "Last Name",
      value: formData.lastName,
      onChange: (value) => setFormData({ ...formData, lastName: value }),
    },
    {
      elementID: 2,
      placeholder: "Enter staff email address...",
      inputLabel: "Email",
      value: formData.email,
      onChange: (value) => setFormData({ ...formData, email: value }),
    },
  ];

  const handleSubmit = async () => {
    const staffData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      is_admin: formData.isAdmin,
      password: formData.password,
    };

    try {
      const token = Cookies.get("access_token");
      const response = await fetch(`${props.baseAPIURL}/staffs/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(staffData),
      });

      if (response.ok) {
        alert("Staff created successfully!");
        props.close(); // Close the modal after success
      } else {
        const errorResponse = await response.json();
        alert(
          `Failed to create staff: ${errorResponse.detail || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating staff.");
    }
  };

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

            {/* Password input field */}
            <div>
              <label
                htmlFor="password"
                className="block text-[13px] font-semibold text-gray-700 mb-[12px]"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password..."
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="block outline-none border-2 border-gray-700 px-[15px] py-[12px] w-full mb-[15px] rounded-[8px]"
              />
            </div>

            <div className="flex gap-[15px] items-center mb-[10px]">
              <input
                type="checkbox"
                id="admin-role"
                checked={formData.isAdmin}
                onChange={(e) => {
                  setFormData({ ...formData, isAdmin: e.target.checked });
                }}
              />
              <label htmlFor="admin-role">Admin</label>
            </div>

            <div className="relative h-[5rem]">
              <div className="flex absolute gap-[10px] bottom-[25px] right-0">
                <button
                  className="rounded-[8px] px-[20px] py-[12px] text-[16px] font-semibold text-[#1A1A1A] bg-[#F2F2F2] block"
                  onClick={props.close}
                >
                  Cancel
                </button>
                <button
                  className="rounded-[8px] px-[20px] py-[12px] text-[16px] font-semibold text-white bg-[#E04403]"
                  onClick={handleSubmit}
                >
                  Create Account
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
