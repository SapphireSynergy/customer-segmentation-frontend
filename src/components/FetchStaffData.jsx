import { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";

const useFetchStaffData = (API_URL) => {
  const [tableContents, setTableContents] = useState([]);
  const [error, setError] = useState(null);

  const fetchStaffData = useCallback(async () => {
    try {
      const token = Cookies.get("access_token"); // Get the JWT token from cookies
      const response = await fetch(`${API_URL}/staffs`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        setTableContents(result.data); // Assuming result.data contains the staff array
      } else {
        const errorResponse = await response.json();
        setError(errorResponse.detail || "Failed to fetch staff data.");
        console.log(`Error response: ${errorResponse.detail}`);
      }
    } catch (error) {
      setError("An error occurred while fetching staff data.");
    }
  }, [API_URL]);

  // Fetch data initially when the component mounts
  useEffect(() => {
    fetchStaffData();
  }, [fetchStaffData]);

  return { tableContents, error, refetch: fetchStaffData }; // Return the refetch function
};

export default useFetchStaffData;