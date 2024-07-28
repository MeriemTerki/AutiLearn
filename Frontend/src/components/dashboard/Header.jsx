import { AlignLeft } from "lucide-react";
import User from "../../assets/dashboard/user.svg";

const Header = ({ setIsOpen }) => {
  return (
    <header className="flex items-center bg-[#F6F9FE] xl:bg-white shadow-sm xl:shadow-none justify-between xl:justify-end px-5 md:px-12 xl:px-5 mb-8 md:mb-12 border-b xl:border-none xl:mb-1">
      {/* Toggle Sidebar Button */}
      <div
        className="xl:hidden text-black cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <AlignLeft />
      </div>

      {/* User Info and Profile Picture */}
      <div className="flex items-center gap-4 p-2 rounded-xl cursor-pointer">
        <div className="hidden md:block">
          <p className="font-bold text-lg text-gray-950">Romaissa Walker</p>
          <p className="text-xs text-gray-400">Joined in August 2024</p>
        </div>
        <div className="w-11 h-11">
          <img
            src={User}
            alt="User"
            className="w-full h-full drop-shadow-sm border-blue-500 border rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
