/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };
  return (
    <div className="navbar bg-customBgBlue font-display p-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-customText"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-customBgBlue rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {isLoggedIn ? (
              <Link to="/dashboard" className="text-customText">
                Dashboard
              </Link>
            ) : (
              ""
            )}
            <a href="#about" className="text-customText">
              About
            </a>
            <a href="#features" className="text-customText">
              Features
            </a>
            <a href="#faq" className="text-customText">
              FAQ
            </a>
            <a href="#donate" className="text-customText">
              Donate
            </a>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-customText">AutiLearn</a>
      </div>

      <div className="navbar-end flex items-center space-x-4">
        <div className="hidden lg:flex lg:space-x-4">
          {isLoggedIn ? (
            <Link to="/dashboard" className="text-customText">
              Dashboard
            </Link>
          ) : (
            ""
          )}

          <a href="#about" className="text-customText">
            About
          </a>
          <a href="#features" className="text-customText">
            Features
          </a>
          <a href="#faq" className="text-customText">
            FAQ
          </a>
          <a href="#donate" className="text-customText">
            Donate
          </a>
        </div>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="btn bg-customButton text-xl text-customText border-0 px-4 py-0  hover:bg-customButtonDarker"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/signup"
            className="btn bg-customButton text-xl text-customText border-0 px-4 py-0  hover:bg-customButtonDarker"
          >
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
