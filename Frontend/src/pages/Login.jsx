/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  };
  const handleLogin = () => {
    const data = {
      email,
      password,
    };
    setIsLoading(true);
    console.log(data);
    const newErrors = {};
    if (!validateEmail()) {
      newErrors.email = "Invalid email address";
    }
    setErrors(newErrors);
  };
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
          <label className=" text-black" htmlFor="email">
            E-mail Address
          </label>
          <input
            placeholder="E-mail Address"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-sm bg-white border-customTextBlack px-4 py-2 w-full text-black-50"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
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
