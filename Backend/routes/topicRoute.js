import express from "express";
import { Topic } from "../models/topicModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const topics = await Topic.find({});
    return res.status(200).json(topics);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const topic = await Topic.findById(id);
    if (!topic) {
      return res.status(404).json({ message: "Topic not found" });
    }
    return res.status(200).json(topic);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const { name, content, story, question } = req.body;
    if (!name || !content || !story || !question) {
      return res
        .status(400)
        .send({ message: "Name, Content, Story, and Question are required." });
    }
    const newTopic = {
      name,
      content,
      story,
      question,
    };
    const topic = await Topic.create(newTopic);
    return res.status(201).send(topic);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Topic.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!result) {
      return res.status(400).json({ message: "Topic not found" });
    }
    return res.status(200).send({ message: "Topic updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Topic.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Topic not found" });
    }
    return res.status(200).send({ message: "Topic deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
export default router;
