import React, { useState, useEffect } from "react";
import InputComponents from "./InputComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const EditStaffs = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    isAdmin: false,
  });

  useEffect(() => {
    if (props.dataContent !== null) {
      setFormData({
        firstName: props.dataContent.firstName || "",
        lastName: props.dataContent.lastName || "",
        email: props.dataContent.email || "",
        phone: props.dataContent.phone || "",
        isAdmin: props.dataContent.isAdmin || false,
      });
    }
  }, [props.dataContent]);

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
    {
      elementID: 3,
      placeholder: "+234...",
      inputLabel: "Phone number",
      value: formData.phone,
      onChange: (value) => setFormData({ ...formData, phone: value }),
    },
  ];

  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform your update logic here
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
                <label htmlFor="admin-role">Admin</label>
              </div>

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
