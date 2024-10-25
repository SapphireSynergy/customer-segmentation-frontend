import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";

import StaffManagementTable from "../components/StaffManagementTable";
import AddStaffs from "../components/AddStaffs";
import EditStaffs from "../components/EditStaffs";
import ConfirmDelete from "../components/ConfirmDelete";
import useFetchStaffData from "../components/FetchStaffData";

const StaffManagement = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { tableContents, error, refetch } = useFetchStaffData(API_URL);
  if (error) {
    console.log(`Error: ${error}`);
  }
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
  const closeEditModal = async () => {
    await refetch();
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
        item.first_name.toLowerCase().includes(searchTerm) ||
        item.email.toLocaleLowerCase().includes(searchTerm) ||
        item.last_name.toLowerCase().includes(searchTerm)
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
      <AddStaffs
        show={isAddModalOpen}
        close={closeAddModal}
        baseAPIURL={API_URL}
      />

      <EditStaffs
        show={isEditModalOpen}
        close={closeEditModal}
        dataContent={selectedStaff}
        baseAPIURL={API_URL}
      />
      <ConfirmDelete show={isDeleteModalOpen} close={closeDeleteModal} />
    </div>
  );
};

export default StaffManagement;
