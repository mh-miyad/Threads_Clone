import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "RegisterUser",
    },
    image: {
      type: String,
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
// Adding a Like
postSchema.methods.addLike = function (userId: any) {
  this.like.push(userId);
  this.likesCount++;
  return this.save();
};

// Removing a Like
postSchema.methods.removeLike = function (userId: any) {
  this.like = this.like.filter(
    (id: any) => id.toString() !== userId.toString()
  );
  this.likesCount--;
  return this.save();
};
const PostModel = mongoose.models?.Post || mongoose.model("Post", postSchema);
export default PostModel;
