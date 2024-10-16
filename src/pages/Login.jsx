function Login() {
  return (
    <div className="flex flex-col h-[100vh] bg-[#FAF9F9] p-[20px]">
      <div className="flex justify-between">
        <img src="" alt="GTCO Logo" />
        <a
          href="#"
          className="text-center px-[20px] py-[8px] bg-[#E04403] rounded-[8px] text-[13px] text-white"
        >
          Sign up
        </a>
      </div>
      <div className=" bg-[#ffffff] px-[40px] py-[55px] drop-shadow-xl w-[440px] rounded-[20px] text-center self-center justify-self-center">
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
            className="border-[1px] w-[100%] px-[10px] mb-[15px] h-[48px] rounded-[8px]"
          />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="border-[1px] w-[100%] px-[10px] h-[48px] rounded-[8px]"
          />
          <p className="text-[16px] mt-[30px] mb-[40px]">
            Having trouble with signing in? <b>Reset password</b>
          </p>
          <input
            type="submit"
            value="Sign in"
            className="w-[100%] bg-[#E04403] rounded-[8px] h-[45px] text-white text-[13px] mb-[40px] hover:cursor-pointer"
          />
        </form>

        <p>
          Don't have an account? <b>Sign up now</b>
        </p>
      </div>
    </div>
  );
}

export default Login;
