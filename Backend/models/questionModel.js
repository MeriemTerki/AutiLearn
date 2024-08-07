import mongoose from "mongoose";
const questionSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    answers: [
      {
        type: String,
        required: true,
      },
    ],
    correctAnswer: {
      type: String,
      required: true,
    },
    explanation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Question = mongoose.model("Question", questionSchema);
