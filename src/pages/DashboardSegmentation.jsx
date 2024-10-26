import React, { useState } from "react";
import Header from "../components/Header";
import CustomerDashboard from "../components/CustomerDashboard";
import TransactionDashboard from "../components/TransactionDashboard";
import SegmentedSalaryEarnersDashboard from "../components/SegmentedSalaryEarnersDashboard";

const DashboardSegmentation = () => {
  const [activeTab, setActiveTab] = useState("customerOverview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Header />

      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => handleTabClick("customerOverview")}
          className={`py-3 px-4 rounded-lg ${
            activeTab === "customerOverview"
              ? "bg-[#e04403] text-white"
              : "bg-gray-200"
          }`}
        >
          Customer Overview
        </button>
        <button
          onClick={() => handleTabClick("transactionOverview")}
          className={`py-3 px-4 rounded-lg ${
            activeTab === "transactionOverview"
              ? "bg-[#e04403] text-white"
              : "bg-gray-200"
          }`}
        >
          Transaction Overview
        </button>
        <button
          onClick={() => handleTabClick("segmentedOverview")}
          className={`py-3 px-4 rounded-lg ${
            activeTab === "segmentedOverview"
              ? "bg-[#e04403] text-white"
              : "bg-gray-200"
          }`}
        >
          Segmented Customers Overview
        </button>
      </div>

      {/* Render Active Dashboard */}
      {activeTab === "customerOverview" && <CustomerDashboard />}
      {activeTab === "transactionOverview" && <TransactionDashboard />}
      {activeTab === "segmentedOverview" && <SegmentedSalaryEarnersDashboard />}
      {/* Add more dashboard components as needed */}
    </div>
  );
};

export default DashboardSegmentation;
