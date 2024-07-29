import React, { useState, useEffect } from "react";
import MarkdownContent from "../Markdown";
import { getUserCourses } from "../../firebase";
import { getAuth } from "firebase/auth";
const staticData = {
  quizContent:
    '##  The Amazing Cell Quiz! \n\nGet ready to test your knowledge about cells! Choose the best answer for each question.\n\n**Question 1: What is a cell?** \n\na) A tiny house  \nb) The smallest part of a living thing that can stay alive \nc)  A brick \nd)  A large box \n\n**Answer: b) The smallest part of a living thing that can stay alive** \n\n**Explanation:**  Cells are like tiny building blocks for everything that is alive! \n\n**Question 2:  What kind of cells help you move your body?**\n\na) Brain Cells\nb) Nerve Cells\nc) Muscle Cells \nd)  Plant Cells\n\n**Answer: c) Muscle Cells**\n\n**Explanation:** Muscle cells are like tiny engines that help you run, jump, and dance! \n\n**Question 3:  Which part of the cell is like the brain of the cell?**\n\na) Membrane \nb) Mitochondria\nc) Nucleus \nd)  Cytoplasm \n\n**Answer: c) Nucleus**\n\n**Explanation:** The nucleus is the control center of the cell. It has all the instructions for the cell to follow! \n\n**Question 4:  What part of the cell helps make energy?**\n\na) Mitochondria \nb) Ribosomes \nc) Lysosomes \nd)  Cytoplasm\n\n**Answer: a) Mitochondria** \n\n**Explanation:** Mitochondria are like tiny power plants. They take food and oxygen and turn them into energy! \n\n**Question 5:  What is cytoplasm?**\n\na) The walls of the cell \nb) The jelly-like stuff that fills the cell \nc)  Tiny factories inside the cell \nd)  Garbage trucks inside the cell \n\n**Answer: b) The jelly-like stuff that fills the cell** \n\n**Explanation:** Cytoplasm is like the air inside a house. All the other cell parts float around in it! \n\n**Question 6: What is a group of cells that are all the same kind called?**\n\na) Tissue\nb) Organ\nc) System\nd)  Organism\n\n**Answer: a) Tissue**\n\n**Explanation:** Cells work together like a team!  When many cells of the same kind are together, they form a tissue! \n\n**Question 7: Who discovered cells?**\n\na) Albert Einstein \nb) Robert Hooke \nc)  Marie Curie \nd)  Isaac Newton \n\n**Answer: b) Robert Hooke**\n\n**Explanation:**  Robert Hooke was a scientist who looked at cork under a microscope and saw tiny compartments he called "cells" because they looked like little rooms! \n\n**Question 8: What is one of the biggest cells?**\n\na) A nerve cell \nb) A muscle cell \nc) A brain cell\nd) An ostrich egg\n\n**Answer: d) An ostrich egg**\n\n**Explanation:**  An ostrich egg is a single cell!  It\'s one of the biggest cells you can find! \n\n**You did a great job!  Now you know a lot about the amazing world of cells!** \n',
  courseContent:
    "## The Amazing World of Cells!\n\nHey there!  Let's learn about the tiniest building blocks of life: **cells!**\n\n### What is a Cell?\n\nImagine a tiny house. That's kind of like a cell! It's the smallest part of a living thing that can do all the things needed to stay alive.  Some living things are made of only one cell, like bacteria.  But you and I are made of *trillions* of cells!\n\n###  Different Cells, Different Jobs\n\nJust like you have lots of jobs you do, cells have different jobs too!  There are:\n\n* **Nerve Cells:** These are like messengers, sending messages throughout your body! They can be really long, like from your feet to your brain! \n* **Brain Cells:** These are the cells that help you think and learn.  You have billions of them!\n* **Muscle Cells:** These are the cells that help you move. They make your muscles contract and relax, letting you run, jump, and dance! \n\nThere are many other kinds of cells that do all sorts of things to keep you alive.  \n\n### Parts of a Cell\n\nLet's take a tour inside a cell! It's a busy place! Here's what you'll find:\n\n**1. Membrane:** This is the outer layer of the cell, like the walls of your house.  It keeps things inside the cell safe, but it also lets some things in and out. \n\n**2. Mitochondria:** These are like power plants! They take food and oxygen and turn them into energy for the cell to use. \n\n**3. Ribosomes:** Imagine these are like tiny factories. They build things the cell needs, like proteins.  Proteins are very important for keeping the cell working!\n\n**4. Nucleus:** This is the brain of the cell! It has all the instructions for the cell, like a recipe book.  It's surrounded by a special membrane, like a little safe, to keep the instructions safe. \n\n**5. Cytoplasm:** This is the jelly-like stuff that fills up the cell.  It's like the air in your house.  All the other cell parts float around in the cytoplasm.\n\n**6. Lysosomes:** These are like little garbage trucks! They clean up the cell, getting rid of waste and unwanted things.\n\n### Fun Facts About Cells\n\n* **Cells were discovered by a scientist named Robert Hooke.** He looked at a piece of cork under a microscope and saw tiny compartments. He called them \"cells\" because they looked like little rooms!\n* **One of the biggest cells is the ostrich egg!**  It can weigh over 3 pounds!\n* **When many cells of the same kind are together, it's called tissue.** Just like bricks build a house, cells build tissues.\n* **The word cell comes from the Latin word \"cellula,\" which means small compartment.** It's fitting since cells are like tiny compartments! \n* **Humans actually carry more bacteria cells than human cells!**  Bacteria live on our skin and in our intestines. Most of them are good for us!\n\n### Learn More!\n\nThere's so much more to learn about cells!  Keep asking questions and exploring the fascinating world of the tiny building blocks of life! \n",
};
const CourseDetails = ({ course }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [data, setData] = useState({
    courseContent: staticData.courseContent,
    quizContent: staticData.quizContent,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        console.error("User is not authenticated");
        setError("User is not authenticated");
        setLoading(false);
        return;
      }

      try {
        const userCourses = await getUserCourses(user.uid);
        const courseData = userCourses.find((c) => c.id === course.id);

        if (courseData) {
          setData({
            courseContent: courseData.courseContent || staticData.courseContent,
            quizContent: courseData.quizContent || staticData.quizContent,
          });
        } else {
          console.error("Course data not found");
          setData({
            courseContent: staticData.courseContent,
            quizContent: staticData.quizContent,
          });
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    if (course) {
      fetchData();
    } else {
      setLoading(false); // In case no course is provided
    }
  }, [course]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4">Error: {error}</p>;
  if (!course) return null;

  const handleClickQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      {showQuiz ? (
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <MarkdownContent content={data.quizContent} />
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
          <MarkdownContent content={data.courseContent} />
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
