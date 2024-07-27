/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};
  return (
    <div className="bg-customBgWhite w-full min-h-screen flex flex-col justify-center p-4">
      <div className="text-center text-black font-bold text-xl mt-4">
        Log into your account
      </div>
      <div className="text-center text-black text-md pt-4">
        You don't have an account?{" "}
        <Link to="/signup">
          <span className="text-customButton underline">Sign up</span>
        </Link>
      </div>
      <div className="space-y-4 w-full md:w-2/4  md:mx-auto my-4 p-4">
        <div className="mx-4">
          <label className=" text-black">E-mail Address</label>
          <input
            placeholder="E-mail Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-sm bg-white border-customTextBlack px-4 py-2 w-full text-black-50"
          />
        </div>

        <div className="mx-4">
          <label className=" text-black">Password</label>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-sm bg-white border-customTextBlack px-4 py-2 w-full text-black-50"
          />
        </div>
      </div>

      <button
        className="btn bg-customButton text-md text-customText border-0 w-2/4 md:w-1/4 hover:bg-customButtonDarker mx-auto"
        onClick={handleLogin}
      >
        Sign in
      </button>
    </div>
  );
};

export default Login;
