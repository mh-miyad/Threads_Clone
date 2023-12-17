import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "RegisterUser",
  },
  post: {
    type: String,
    required: true,
  },
  like: [{ type: Schema.Types.ObjectId, ref: "RegisterUser" }],
});
const PostModel = mongoose.models?.Post || mongoose.model("Post", postSchema);
export default PostModel;
