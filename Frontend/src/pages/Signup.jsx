/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {};
  return (
    <div className="bg-customBgWhite w-full min-h-screen flex flex-col justify-center p-4">
      <div className="text-center text-black font-bold text-xl mt-4">
        Create an account
      </div>
      <div className="text-center text-black text-md pt-4">
        You do have an account?{" "}
        <Link to="/login">
          <span className="text-customButton underline">Sign in</span>
        </Link>
      </div>
      <div className="space-y-4 w-full md:w-2/4  md:mx-auto my-4 p-4">
        <div className="mx-4">
          <label className=" text-black">Name</label>
          <input
            placeholder="Name"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded-sm bg-white border-customTextBlack px-4 py-2 w-full text-black-50"
          />
        </div>
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
          <label className=" text-black">Date of birth</label>
          <input
            placeholder="Date of birth"
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="border rounded-sm bg-white border-customTextBlack px-4 py-2 w-full text-black-50"
          />
        </div>
        <div className="mx-4">
          <label className=" text-black">Country</label>
          <input
            placeholder="Country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
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
        <div className="mx-4">
          <label className=" text-black">Confirm password</label>
          <input
            placeholder="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border rounded-sm bg-white border-customTextBlack px-4 py-2 w-full text-black-50"
          />
        </div>
      </div>

      <button
        className="btn bg-customButton text-md text-customText border-0 w-2/4 md:w-1/4 hover:bg-customButtonDarker mx-auto"
        onClick={handleSignUp}
      >
        Create account
      </button>
    </div>
  );
};

export default Signup;
