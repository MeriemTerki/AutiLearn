import { useState } from "react";
import Header from "../../components/dashboard/Header";
import Sidebar from "../../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col xl:flex-row bg-white overflow-hidden">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="grow w-full  max-w-[1000px] h-full mx-auto xl:py-4">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
