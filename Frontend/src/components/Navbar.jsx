import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-customBgBlue font-display ">
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
            <Link to="/" className="text-customText">
              About
            </Link>
            <Link to="/" className="text-customText">
              Features
            </Link>
            <Link to="/" className="text-customText">
              FAQ
            </Link>
            <Link to="/" className="text-customText">
              Donate
            </Link>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-customText">AutiLearn</a>
      </div>

      <div className="navbar-end flex items-center space-x-4">
        <div className="hidden lg:flex lg:space-x-4">
          <Link to="#about" className="text-customText ">
            About
          </Link>
          <Link to="#features" className="text-customText">
            Features
          </Link>
          <Link to="/" className="text-customText">
            FAQ
          </Link>
          <Link to="/" className="text-customText">
            Donate
          </Link>
        </div>
        <Link
          to="/signup"
          className="btn bg-customButton text-xl text-customText border-0 px-4 py-0  hover:bg-customButtonDarker"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
