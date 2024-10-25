import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode"; // Ensure this is imported correctly

const LoggedInUserInfo = (API_URL) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = Cookies.get("access_token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.user_id;

        const fetchUserInfo = async () => {
          try {
            const response = await fetch(`${API_URL}/staff/${userId}`, {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            });

            if (response.ok) {
              const userInfo = await response.json();
              setUserData(userInfo.data); // This will update userData
            } else {
              setError("Failed to fetch user information.");
            }
          } catch (err) {
            console.error("Error fetching user info:", err);
            setError("An error occurred while fetching user data.");
          }
        };

        fetchUserInfo();
      } catch (error) {
        console.error("Failed to decode JWT:", error);
        setError("Failed to decode token.");
      }
    } else {
      setError("No token found.");
    }
  }, [API_URL]);

  return { userData, error };
};

export default LoggedInUserInfo;
