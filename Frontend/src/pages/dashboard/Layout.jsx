import { useState, useEffect } from "react";
import Header from "../../components/dashboard/Header";
import Sidebar from "../../components/dashboard/Sidebar";
import CourseDetails from "../../components/dashboard/CourseDetails";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const location = useLocation();
  // Function to reset selected course
  const deselectCourse = () => {
    setSelectedCourse(null);
  };
  return (
    <div className="flex flex-col xl:flex-row bg-white min-h-[100vh] overflow-hidden">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="grow w-full max-w-[1000px] h-full mx-auto xl:py-4">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        {selectedCourse ? (
          <>
            <button
              onClick={deselectCourse}
              className="mb-4 p-2 m-4 bg-customBgBlue text-white rounded"
            >
              Back
            </button>
            <CourseDetails course={selectedCourse} />
          </>
        ) : (
          <Outlet context={{ setSelectedCourse }} />
        )}
      </main>
    </div>
  );
};

export default Layout;
