import express from "express";
import { Question } from "../models/questionModel.js";

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
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const questions = await Question.find({});
    return res.status(200).json(questions);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Question.findById(id);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }
    return res.status(200).json(question);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const { quiz_content } = req.body;
    console.log("hi", quiz_content);
    if (!quiz_content) {
      return res.status(400).send({
        message: "Quiz content is required.",
      });
    }
    const newQuestion = parseQuizContent(quiz_content);
    const question = await Question.create(newQuestion);
    return res.status(201).send(question);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Question.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!result) {
      return res.status(400).json({ message: "Question not found" });
    }
    return res.status(200).send({ message: "Question updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Question.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Question not found" });
    }
    return res.status(200).send({ message: "Question deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
export default router;
