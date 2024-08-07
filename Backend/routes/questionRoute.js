import express from "express";
import { Question } from "../models/questionModel.js";

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
    const { title, answers, correctAnswer, explanation } = req.body;
    if (!title || !answers || !correctAnswer || !explanation) {
      return res.status(400).send({
        message: "Title, Answers, Correct Answer and Explanation are required.",
      });
    }
    const newQuestion = {
      title,
      answers,
      correctAnswer,
      explanation,
    };
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
