import React from "react";
import EditStaffs from "../components/EditStaffs";
import AddStaffs from "../components/AddStaffs";
import ConfirmDelete from "../components/ConfirmDelete";

const ComponentViews = () => {
  return (
    <div>
      <h1>Tests</h1>

      <EditStaffs />

      <AddStaffs />

      <ConfirmDelete />
    </div>
  );
};

export default ComponentViews;
