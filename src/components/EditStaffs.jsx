import React, { useState, useEffect } from "react";
import InputComponents from "./InputComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";

const EditStaffs = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    isAdmin: false,
    password: "",
  });

  const [allowEditPassword, setAllowEditPassword] = useState(false);

  useEffect(() => {
    if (props.dataContent !== null) {
      setFormData({
        firstName: props.dataContent.first_name || "",
        lastName: props.dataContent.last_name || "",
        email: props.dataContent.email || "",
        isAdmin: props.dataContent.is_admin || false,
        password: props.dataContent.password || "",
      });
    }
  }, [props.dataContent]);

  const isUserAdmin = true;

  const objectListOFInputElements = [
    {
      elementID: 0,
      placeholder: "Staff first name",
      inputLabel: "First Name",
      value: formData.firstName,
      onChange: (value) => setFormData({ ...formData, firstName: value }),
    },
    {
      elementID: 1,
      placeholder: "Staff last name",
      inputLabel: "Last Name",
      value: formData.lastName,
      onChange: (value) => setFormData({ ...formData, lastName: value }),
    },
    {
      elementID: 2,
      placeholder: "eg. akin.obi@gmail.com",
      inputLabel: "Email",
      value: formData.email,
      onChange: (value) => setFormData({ ...formData, email: value }),
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const staffData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      is_admin: formData.isAdmin,
      password: formData.password,
    };

    try {
      const token = Cookies.get("access_token");
      const response = await fetch(
        `${props.baseAPIURL}/staff/update2/${props.dataContent.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(staffData),
        }
      );

      if (response.ok) {
        alert("Staff updated successfully!");
        props.close();
      } else {
        const errorResponse = await response.json();
        alert(
          `Failed to update staff: ${errorResponse.detail || "Unknown error"}`
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

            <form onSubmit={handleSubmit} className="mb-[20px]">
              {objectListOFInputElements.map((item) => (
                <InputComponents
                  key={item.elementID}
                  elementParameters={item}
                />
              ))}
              <div className="flex gap-[15px] items-center mb-[10px]">
                <input
                  type="checkbox"
                  id="admin-role"
                  checked={formData.isAdmin}
                  onChange={(e) =>
                    setFormData({ ...formData, isAdmin: e.target.checked })
                  }
                />
                <label htmlFor="admin-role">Make Admin</label>
              </div>
              <div className="flex gap-[15px] items-center mb-[10px]">
                <input
                  type="checkbox"
                  name=""
                  id="edit-password"
                  disabled={!isUserAdmin}
                  value={allowEditPassword}
                  onChange={(event) =>
                    setAllowEditPassword(event.target.checked)
                  }
                />
                <label htmlFor="edit-password">Update staff Password?</label>
              </div>

              {/* Password input field */}
              {allowEditPassword && (
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
              )}
              <button
                type="submit"
                className="rounded-[8px] px-[20px] py-[12px] text-[16px] font-semibold text-white bg-[#E04403]"
              >
                Save Changes
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EditStaffs;
