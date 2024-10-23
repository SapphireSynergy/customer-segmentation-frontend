import React, { useState } from "react";
import editIcon from "../assets/editIcon.jpg";
import trashIcon from "../assets/trashIcon.jpg";

const StaffManagerTableContent = (props) => {
  const openTheEditModal = () => {
    props.setSelectedStaff(props.tableContent);
    props.openEditModal();
  };

  const openTheDeleteModal = () => {
    props.setSelectedStaff(props.tableContent);
    props.openDeleteModal();
  };
  // const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <tr className="text-[#1D1B1B] border-t-2 border-[#F1F0F0]">
        <td className="p-[20px] text-[#8D8885] font-semibold">
          {props.tableContent.sn}
        </td>
        <td className="p-[10px]">
          <p className="text-[#1D1B1B] ">{props.tableContent.name}</p>
        </td>
        <td className="p-[10px]">
          <p>{props.tableContent.email}</p>
        </td>
        <td className="p-[10px]">
          <p>{props.tableContent.phone}</p>
        </td>
        <td className="p-[10px]">
          <p>{props.tableContent.jobRole}</p>
        </td>
        <td className="p-[10px]">
          <p>{props.tableContent.startDate}</p>
        </td>
        <td className="p-[10px] flex items-center justify-center">
          <button onClick={openTheEditModal} className="mr-[5px]">
            <img src={editIcon} alt="edit" className="w-[30px]" />
          </button>
          <button onClick={openTheDeleteModal}>
            <img src={trashIcon} alt="trash icon" className="w-[25px]" />
          </button>
        </td>
      </tr>

      {/* The modal is rendered outside of the table */}

      {/* <div>
        <EditStaffs
          show={isModalOpen}
          close={closeModal}
          dataContent={props.tableContent}
        />
      </div> */}

      {/* Apply blur to the whole page when modal is open */}
      {/* <div className={`${isModalOpen ? "blur-sm" : ""} `}> */}
      {/* Your main page content (including the table) */}
      {/* </div> */}
    </>
  );
};

export default StaffManagerTableContent;
