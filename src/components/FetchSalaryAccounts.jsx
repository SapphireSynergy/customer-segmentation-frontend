import React, { useEffect, useState } from "react";

const FetchSalaryAccounts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const API_URL = import.meta.env.VITE_API_URL;

  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [stateFilter, setStateFilter] = useState("All");
  const [genderFilter, setGenderFilter] = useState("All");
  const [maritalStatusFilter, setMaritalStatusFilter] = useState("All");

  const [uniqueLocations, setUniqueLocations] = useState([]);
  const [uniqueStates, setUniqueStates] = useState([]);
  const [uniqueGenders, setUniqueGenders] = useState([]);
  const [uniqueMaritalStatuses, setUniqueMaritalStatuses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/predictions/salary-accounts`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        extractUniqueValues(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const extractUniqueValues = (data) => {
    setUniqueLocations([...new Set(data.map((item) => item.Location))]);
    setUniqueStates([...new Set(data.map((item) => item.State))]);
    setUniqueGenders([...new Set(data.map((item) => item.Gender))]);
    setUniqueMaritalStatuses([
      ...new Set(data.map((item) => item.Marital_Status)),
    ]);
  };

  const filteredData = data
    .filter((item) =>
      item.Customer_ID.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) =>
      locationFilter === "All" ? true : item.Location === locationFilter
    )
    .filter((item) =>
      stateFilter === "All" ? true : item.State === stateFilter
    )
    .filter((item) =>
      genderFilter === "All" ? true : item.Gender === genderFilter
    )
    .filter((item) =>
      maritalStatusFilter === "All"
        ? true
        : item.Marital_Status === maritalStatusFilter
    );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {/* Search and Filter Controls */}
      <div className="flex gap-4 mb-4 flex-wrap">
        <input
          type="text"
          placeholder="Search by Customer ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded"
        />

        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All Locations</option>
          {uniqueLocations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>

        <select
          value={stateFilter}
          onChange={(e) => setStateFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All States</option>
          {uniqueStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        <select
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All Genders</option>
          {uniqueGenders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>

        <select
          value={maritalStatusFilter}
          onChange={(e) => setMaritalStatusFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All Marital Statuses</option>
          {uniqueMaritalStatuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      {/* Data Table */}
      <div className="rounded-[15px] border-2 border-[#F1F0F0] ">
        <table className="w-full text-[14px] font-['Plus Jakarta Sans'] border-collapse">
          <thead className="border-b-3 border-[#F1F0F0] bg-gray-100 ">
            <tr className="text-[#8D8885] font-semibold ">
              <th className="text-left p-[25px] pl-[20px]">Customer ID</th>
              <th className="text-left p-[25px] pl-[10px]">Location</th>
              <th className="text-left p-[25px] pl-[10px]">State</th>
              <th className="text-left p-[25px] pl-[10px]">Gender</th>
              <th className="text-left p-[25px] pl-[10px]">Marital Status</th>
              <th className="text-left p-[25px] pl-[10px]">Account Type</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr
                key={item.Customer_ID}
                className="text-[#1D1B1B] border-t-2 border-[#F1F0F0] hover:bg-gray-100"
              >
                <td className="p-[20px] text-[#8D8885] font-semibold">
                  {item.Customer_ID}
                </td>
                <td className="p-[10px]">{item.Location}</td>
                <td className="p-[10px]">{item.State}</td>
                <td className="p-[10px]">{item.Gender}</td>
                <td className="p-[10px]">{item.Marital_Status}</td>
                <td className="p-[10px]">{item.Account_Type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex gap-[20px] mt-[20px]">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="text-[#e04403]"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="text-[#e04403]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FetchSalaryAccounts;
