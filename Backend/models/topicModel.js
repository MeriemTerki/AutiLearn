import mongoose from "mongoose";
const topicSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    story: {
      type: String,
      required: true,
    },
    question: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Topic = mongoose.model("Topic", topicSchema);
