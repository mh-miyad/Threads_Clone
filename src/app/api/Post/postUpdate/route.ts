import PostModel from "@/Database/Model/Post/Post";
import RegisterModel from "@/Database/Model/User/Register";
import dbConfig from "@/Database/dbConfig";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  await dbConfig();
  const { postId, email } = await req.json();
  const user = await RegisterModel.findOne({ email: email });
  const userId = await user?._id;
  const userImage = await user?.image;
  try {
    if (!userId) {
      return NextResponse.json({ massage: "user not found" });
    } else {
      const update = await PostModel.updateOne(
        { _id: postId },
        {
          image: userImage,
        },
        { upsert: true }
      );
      if (update.matchedCount > 0) {
        return NextResponse.json({ massage: "success" });
      } else {
        return NextResponse.json({ massage: "error" });
      }
    }
  } catch (error) {
    return NextResponse.json({ massage: "error", error });
  }
};
