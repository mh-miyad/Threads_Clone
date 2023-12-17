import PostModel from "@/Database/Model/Post/Post";
import RegisterModel from "@/Database/Model/User/Register";
import dbConfig from "@/Database/dbConfig";
import { NextResponse } from "next/server";

// ! here handle GET Request
export const GET = async (req: Request, res: Response) => {
  await dbConfig();
  const posts = await PostModel.find({});
  return NextResponse.json({ data: posts });
};

// ! here handle POST Request
export const POST = async (req: Request, res: Response) => {
  await dbConfig();
  const { email, post, like } = await req.json();
  const user = await RegisterModel.findOne({ email: email });
  const userId = await user?._id;
  const name = await user?.name;

  try {
    if (!userId) {
      return NextResponse.json({ massage: "user not found" });
    } else {
      const userPost = new PostModel({
        userId: userId,
        name: name,
        post: post,
      });

      await userPost.save();
      return NextResponse.json({ massage: "success" });
    }
  } catch (error) {
    return NextResponse.json({ massage: "error", error });
  }
};
// ! here handle Put Request
export const PUT = async (req: Request, res: Response) => {
  await dbConfig();
  const { userId, postId, like } = await req.json();

  try {
    const post = await PostModel.findById(postId);

    if (!post) {
      return NextResponse.json({ message: "Post not found" });
    }

    if (like === "true") {
      post.like.push(userId);
    } else if (like === "false") {
      post.like = post.like.filter(
        (id: any) => id.toString() !== userId.toString()
      );
    }

    post.likesCount = post.like.length; // Update like count
    await post.save();

    return NextResponse.json({ message: "Like updated successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error updating like", error });
  }
};
