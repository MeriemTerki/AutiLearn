import React, { useState, useEffect } from "react";
import MarkdownContent from "../Markdown";
import { getUserCourses } from "../../firebase";
import { getAuth } from "firebase/auth";

const CourseDetails = ({ course }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [data, setData] = useState({
    courseContent: course.courseContent,
    quizContent: course.quizContent,
  });
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const auth = getAuth();
  //     const user = auth.currentUser;

  //     if (!user) {
  //       console.error("User is not authenticated");
  //       setError("User is not authenticated");
  //       setLoading(false);
  //       return;
  //     }

  //     try {
  //       const userCourses = await getUserCourses(user.uid);
  //       const courseData = userCourses.find((c) => c.id === course.id);

  //       if (courseData) {
  //         setData({
  //           courseContent: courseData.courseContent || staticData.courseContent,
  //           quizContent: courseData.quizContent || staticData.quizContent,
  //         });
  //       } else {
  //         console.error("Course data not found");
  //         setData({
  //           courseContent: staticData.courseContent,
  //           quizContent: staticData.quizContent,
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //       setError("Error fetching data");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   if (course) {
  //     fetchData();
  //   } else {
  //     setLoading(false); // In case no course is provided
  //   }
  // }, [course]);

  // if (loading) return <p className="p-4">Loading...</p>;
  // if (error) return <p className="p-4">Error: {error}</p>;
  // if (!course) return null;

  const handleClickQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      {showQuiz ? (
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <MarkdownContent content={course.quizContent} />
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4 text-customTextBlack">
            {course.title}
          </h1>

          <img
            src={course.img}
            alt={course.title}
            className="w-2/4 h-auto mb-4 mx-auto"
          />
          <MarkdownContent content={course.courseContent} />
          <button
            onClick={handleClickQuiz}
            className="btn bg-customButton text-xl text-customText border-0 px-4 py-0 mt-2 w-fit hover:bg-customButtonDarker"
          >
            Take Quiz
          </button>
        </>
      )}
    </div>
  );
};

export default CourseDetails;
