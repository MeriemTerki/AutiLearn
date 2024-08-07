import mongoose from "mongoose";
const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    topic: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Course = mongoose.model("Course", courseSchema);
