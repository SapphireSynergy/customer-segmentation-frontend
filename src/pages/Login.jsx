import GTCOLogo from "../assets/GTBank-logo.svg";

function Login() {
  return (
    <div className="flex flex-col h-[100vh] bg-[#FAF9F9] items-center">
      <div className="flex justify-between py-[20px] px-[30px] w-full items-start">
        <img src={GTCOLogo} alt="GTCO Logo" className="w-[66px]" />
        <button
          href="#"
          className="justify-self-center text-center px-[36px] h-[40px] bg-[#E04403] rounded-[8px] text-[16px] text-white hover:cursor-pointer"
        >
          Sign up
        </button>
      </div>

      <div className="absolute h-screen grid place-content-center">
        <div className=" bg-[#ffffff] px-[40px] py-[55px] drop-shadow-xl w-[440px] rounded-[20px] text-center ">
          <h2 className="text-[28px] text-center font-semibold pb-[15px]">
            User Login
          </h2>
          <p className="text-[#5F5C5A] text-center my-[10px] text-[16px]">
            Hey, enter your details to get signed into your account
          </p>
          <form action="">
            <input
              type="text"
              placeholder="Enter email"
              className="border-[1px] w-[100%] px-[10px] mb-[15px] h-[48px] rounded-[8px] outline-none"
            />
            <br />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
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

          <p>
            Don't have an account?{" "}
            <a href="#">
              <b>Sign up now</b>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
