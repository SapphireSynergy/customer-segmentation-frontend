import React from "react";
import Header from "../components/Header";
import FetchSalaryAccounts from "../components/FetchSalaryAccounts";

const SalaryAccountDetails = () => {
  return (
    <div>
      <Header />
      <div className="px-[6rem] py-[1rem]">
        <FetchSalaryAccounts />
      </div>
    </div>
  );
};

export default SalaryAccountDetails;
