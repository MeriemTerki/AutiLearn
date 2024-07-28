import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  LetterText,
  MessageSquare,
  Heart,
  LogOut,
  House,
  X,
} from "lucide-react";
import Logo from "../../assets/dashboard/logo.svg";

const links = [
  { label: "Home", icon: House, path: "/dashboard" },
  { label: "My Learning", icon: LetterText, path: "/dashboard/my-learning" },
  { label: "Chat", icon: MessageSquare, path: "/dashboard/chatbot" },
  { label: "Stories", icon: Heart, path: "/dashboard/stories" },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const isActiveLink = (path) => location.pathname === path;

  const renderLinks = () =>
    links.map((item, index) => (
      <li key={index}>
        <Link
          to={item.path}
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center py-2 rounded-lg px-4 mb-4 cursor-pointer ${
            isActiveLink(item.path)
              ? "bg-gradient-to-bl from-orange-500 via-red-600 to-rose-700 text-white shadow-sm border"
              : "text-gray-900 hover:bg-gray-100"
          }`}
        >
          {React.createElement(item.icon, { className: "w-5" })}
          <span className="ml-4">{item.label}</span>
        </Link>
      </li>
    ));

  return (
    <>
      {/* Sidebar */}
      <div
        className={`w-64 absolute xl:relative min-h-[100vh] ${
          isOpen ? "left-0" : "-left-64"
        } xl:left-0`}
      >
        <aside
          className={`fixed top-0 border-r z-40 w-64 h-[100dvh] ${
            isOpen ? "left-0" : "-left-64"
          } xl:left-0`}
          aria-label="Sidebar"
        >
          <div className="flex flex-col justify-between h-full overflow-y-auto bg-[#F6F9FE] px-4 pt-8">
            {/* Logo and close button */}
            <Link
              to="/dashboard"
              className="px-1 flex items-center justify-between font-semibold text-[#333333] mb-7 text-2xl"
            >
              <div className="flex items-center space-x-2 cursor-pointer">
                <img
                  src={Logo}
                  className="mr-1 w-[35px] border-2 rounded-full"
                  alt="Logo"
                />
                <span>AutiLearn</span>
              </div>
              <div
                className="cursor-pointer size-6 p-[2px] border-gray-400 border items-center justify-center rounded-lg shadow-sm flex xl:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <X />
              </div>
            </Link>

            {/* Navigation Links */}
            <ul className="space-y-2 font-medium mb-8 grow">{renderLinks()}</ul>

            {/* Divider */}
            <div className="h-[1px] rounded-full bg-gray-300 w-full mb-2"></div>

            {/* Log Out */}
            <Link
              to="/dashboard/logout"
              className="flex items-center py-2 text-gray-900 rounded-lg hover:bg-gray-100 group px-4 mb-2 cursor-pointer"
            >
              <LogOut className="w-5" />
              <span className="ml-4 font-bold">Log Out</span>
            </Link>
          </div>
        </aside>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed left-0 w-full h-full bg-black/10 backdrop-blur-md z-30 xl:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
    </>
  );
};

export default Sidebar;
