import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "RegisterUser",
    },
    name: {
      type: String,
      required: true,
    },

    post: {
      type: String,
      required: true,
    },
    like: [{ type: Schema.Types.ObjectId, ref: "RegisterUser" }],
  },
  {
    timestamps: true,
  }
);
const PostModel = mongoose.models?.Post || mongoose.model("Post", postSchema);
export default PostModel;
