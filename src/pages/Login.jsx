import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GTCOLogo from "../assets/GTBank-logo.svg";
import { motion } from "framer-motion";
import Cookies from "js-cookie";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        Cookies.set("access_token", data.token, { expires: 7 });

        navigate("/statistics/summary");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError("Invalid username or password. Try again");
      console.log(error);
    }
  };

  return (
    <motion.div
      className="flex flex-col h-[100vh] bg-[#FAF9F9] items-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between py-[20px] px-[30px] w-full items-start">
        <img src={GTCOLogo} alt="GTCO Logo" className="w-[66px]" />
      </div>

      <div className="absolute h-screen grid place-content-center">
        <div className=" bg-[#ffffff] px-[40px] py-[45px] drop-shadow-xl w-[440px] rounded-[20px] text-center ">
          <h2 className="text-[28px] text-center font-semibold pb-[15px]">
            User Login
          </h2>
          <p className="text-[#5F5C5A] text-center my-[10px] text-[16px]">
            Hey, enter your details to get signed into your account
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-[1px] w-[100%] px-[10px] mb-[15px] h-[48px] rounded-[8px] outline-none"
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-[1px] w-[100%] px-[10px] h-[48px] rounded-[8px] outline-none"
            />
            <p className="text-[16px] mt-[30px] mb-[40px]">
              Having trouble with signing in?
              <a href="#">
                <b>Reset password</b>
              </a>
            </p>
            <input
              type="submit"
              value="Sign in"
              className="w-[100%] bg-[#E04403] rounded-[8px] h-[40px] text-white text-[13px] mb-[40px] hover:cursor-pointer"
            />
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </motion.div>
  );
}

export default Login;
