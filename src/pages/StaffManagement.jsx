import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";

import StaffManagementTable from "../components/StaffManagementTable";
import AddStaffs from "../components/AddStaffs";
import EditStaffs from "../components/EditStaffs";
import ConfirmDelete from "../components/ConfirmDelete";
const tableContents = [
  {
    sn: 1,
    firstName: "Amarachi",
    lastName: "Obi",
    email: "amarachi@gmail.com",
    phone: "+234 8178 799 923",
    isAdmin: false,
    startDate: "15-08-2023",
  },
  {
    sn: 2,
    firstName: "Funke",
    lastName: "Ojo",
    email: "funke@gmail.com",
    phone: "+234 8178 799 912",
    isAdmin: false,
    startDate: "15-03-2023",
  },
];
const StaffManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(tableContents);

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    setSearchTerm(searchQuery);
  };

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);
  const openEditModal = () => {
    // setSelectedStaff(staffData);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setSelectedStaff(null);
    setIsEditModalOpen(false);
  };
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => {
    setSelectedStaff(null);
    setIsDeleteModalOpen(false);
  };

  const isPageBlurred = isAddModalOpen || isEditModalOpen;

  useEffect(() => {
    const filtered = tableContents.filter(
      (item) =>
        item.firstName.toLowerCase().includes(searchTerm) ||
        item.email.toLocaleLowerCase().includes(searchTerm) ||
        item.lastName.toLowerCase().includes(searchTerm) ||
        item.phone.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  }, [searchTerm, tableContents]);

  return (
    <div>
      <div className={`relative ${isPageBlurred ? "blur-sm" : ""}`}>
        <Header />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="px-[6rem] py-[1rem]">
            <div className="flex justify-between mb-[4rem]">
              <h1 className="text-[23px] text-[#18181B]">Staff Management</h1>
              <div className="flex gap-[10px] items-center">
                <input
                  type="search"
                  name=""
                  id=""
                  value={searchTerm}
                  placeholder="Search"
                  onChange={handleSearch}
                  className="px-[20px] py-[10px] w-[300px] outline-none border-2 border-[#E2E3E9] rounded-[25px]"
                />
                <button
                  onClick={openAddModal}
                  className="bg-[#E04403] px-[30px] py-[15px] text-white rounded-[8px] text-[13px] font-semibold"
                >
                  + Add new staff
                </button>
              </div>
            </div>

            <div className="rounded-[15px] border-2 border-[#F1F0F0]">
              <StaffManagementTable
                filteredData={filteredData}
                setSelectedStaff={setSelectedStaff}
                openEditModal={openEditModal}
                openDeleteModal={openDeleteModal}
              />
            </div>
          </div>
        </motion.div>
      </div>
      <AddStaffs show={isAddModalOpen} close={closeAddModal} />

      <EditStaffs
        show={isEditModalOpen}
        close={closeEditModal}
        dataContent={selectedStaff}
      />
      <ConfirmDelete show={isDeleteModalOpen} close={closeDeleteModal} />
    </div>
  );
};

export default StaffManagement;
