import express from "express";
import { Course } from "../models/courseModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const courses = await Course.find({});
    return res.status(200).json(courses);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    return res.status(200).json(course);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const { name, topics } = req.body;
    if (!name || !topics) {
      return res.status(400).send({
        message: "Name and Topics are required.",
      });
    }
    const newCourse = {
      name,
      topics,
    };
    const course = await Course.create(newCourse);
    return res.status(201).send(course);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Course.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!result) {
      return res.status(400).json({ message: "Course not found" });
    }
    return res.status(200).send({ message: "Course updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Course.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Course not found" });
    }
    return res.status(200).send({ message: "Course deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
export default router;
