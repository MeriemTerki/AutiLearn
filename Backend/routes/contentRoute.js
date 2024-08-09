import express from "express";
import { Course } from "../models/courseModel.js";
import { Question } from "../models/questionModel.js";
import { Topic } from "../models/topicModel.js";
const router = express.Router();
const parseQuizContent = (content) => {
  // Define a regex pattern to match questions, answers, and the correct answer
  const questionPattern =
    /##\s+The Amazing Cell Quiz!\s+Get ready to test your knowledge about cells! Choose the best answer for each question\.\s+(\*\*Question (\d+): (.*?)\*\*)\s+((?:[a-d]\) (.*?)\n?)*)\*\*Answer: ([a-d])\) (.*?)\*\*\s+\*\*Explanation:\*\* (.*?)(?=\*\*Question \d+:|$)/gs;
  const questions = [];
  let match;
  while ((match = questionPattern.exec(content)) !== null) {
    const [
      ,
      ,
      id,
      title,
      answersBlock,
      ,
      correctAnswerLetter,
      correctAnswer,
      explanation,
    ] = match;

    const answers = answersBlock
      .split("\n")
      .filter((line) => line.trim())
      .map((line) => line.trim().slice(3).trim());

    // Map the correct answer letter to the answer text
    const correctAnswerText =
      answers[correctAnswerLetter.charCodeAt(0) - "a".charCodeAt(0)];

    questions.push({
      title: title.trim(),
      answers: answers,
      correctAnswer: correctAnswerText,
      explanation: explanation.trim(),
    });
  }
  return questions;
};
// router.get("/", async (req, res) => {
//   try {
//     const courses = await Course.find({});
//     return res.status(200).json(courses);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });
// router.get("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const course = await Course.findById(id);
//     if (!course) {
//       return res.status(404).json({ message: "Course not found" });
//     }
//     return res.status(200).json(course);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });
router.post("/", async (req, res) => {
  try {
    const { courseName, topic, courseContent, storyContent, quizContent } =
      req.body;

    if (
      !courseName ||
      !topic ||
      !courseContent ||
      !storyContent ||
      !quizContent
    ) {
      return res.status(400).send({
        message: "All Data are required.",
      });
    }

    const newQuestion = parseQuizContent(quizContent);
    const addedQuestions = await Question.create(newQuestion);
    const newTopic = {
      name: topic,
      content: courseContent,
      story: storyContent,
      question: addedQuestions.map((question) => question._id),
    };
    const addedTopic = await Topic.create(newTopic);
    const newCourse = {
      name: courseName,
      topics: [addedTopic._id],
    };
    const course = await Course.create(newCourse);
    return res.status(201).send({
      message: "Course, topic, and questions saved successfully.",
      course,
      topic: addedTopic,
      questions: addedQuestions,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
// router.put("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await Course.findByIdAndUpdate(id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!result) {
//       return res.status(400).json({ message: "Course not found" });
//     }
//     return res.status(200).send({ message: "Course updated successfully" });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });
// router.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await Course.findByIdAndDelete(id);
//     if (!result) {
//       return res.status(404).json({ message: "Course not found" });
//     }
//     return res.status(200).send({ message: "Course deleted successfully" });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });
export default router;
