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
// router.get("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const todo = await TodoListItem.findById(id);
//     if (!todo) {
//       return res.status(404).json({ message: "Todo not found" });
//     }
//     return res.status(200).json(todo);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });
// router.post("/", async (req, res) => {
//   try {
//     const { name, category, dueDate, isCompleted } = req.body;
//     if (!name) {
//       return res.status(400).send({ message: "Todo Name is required." });
//     }
//     const newTodo = {
//       name,
//       category,
//       dueDate,
//       isCompleted,
//     };
//     const todo = await TodoListItem.create(newTodo);
//     return res.status(201).send(todo);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });
// router.put("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await TodoListItem.findByIdAndUpdate(id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!result) {
//       return res.status(400).json({ message: "Todo not found" });
//     }
//     return res.status(200).send({ message: "Todo updated successfully" });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });
// router.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await TodoListItem.findByIdAndDelete(id);
//     if (!result) {
//       return res.status(404).json({ message: "Todo not found" });
//     }
//     return res.status(200).send({ message: "Todo deleted successfully" });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });
export default router;
