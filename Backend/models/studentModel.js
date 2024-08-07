import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name."],
    },
    email: {
      type: String,
      required: [true, "Please enter an email."],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please enter a valid email."],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [6, "Password must be at least 6 characters long"],
      validate: {
        validator: (value) => {
          if (typeof value !== "string") return false;
          const regex =
            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
          return regex.test(value);
        },
      },
      select: false,
    },
    country: {
      type: String,
      required: [true, "Please enter a country."],
    },
  },
  {
    timestamps: true,
  }
);

export const Stident = mongoose.model("Student", studentSchema);
