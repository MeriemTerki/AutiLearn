import { AlignLeft } from "lucide-react";
import User from "../../assets/dashboard/user.svg";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const Header = ({ setIsOpen }) => {
  const [username, setUsername] = useState("");
  const [joinDate, setJoinDate] = useState("");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.email.split("@")[0]);
        const options = { year: "numeric", month: "long" };
        const date = new Date(user.metadata.creationTime);
        const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
          date
        );
        setJoinDate(formattedDate);
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);
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
          <p className="font-bold text-lg text-gray-950">{username}</p>
          <p className="text-xs text-gray-400">Joined in {joinDate}</p>
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
