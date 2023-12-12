import mongoose, { Schema } from "mongoose";

const registerSchema = new Schema(
  {
    name: {
      require: [true, "Name is required"],
      type: "string",
    },
    email: {
      require: [true, "Email is required"],
      type: "string",
    },
    password: {
      require: [true, "Password is required"],
      type: "string",
    },
  },
  {
    timestamps: true,
  }
);

const RegisterModel =
  mongoose.models?.RegisterUser ||
  mongoose.model("RegisterUser", registerSchema);
export default RegisterModel;
