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
    bio: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    profession: {
      type: String,
    },
    image: {
      type: String,
    },

    github: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    portfolio: {
      type: String,
    },
    skill: [
      {
        type: String,
      },
    ],
    post: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    comment: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
);

const RegisterModel =
  mongoose.models?.RegisterUser ||
  mongoose.model("RegisterUser", registerSchema);
export default RegisterModel;
