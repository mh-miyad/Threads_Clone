import PostModel from "@/Database/Model/Post/Post";
import RegisterModel from "@/Database/Model/User/Register";
import dbConfig from "@/Database/dbConfig";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  await dbConfig();
  const { email } = await req.json();
  const user = await RegisterModel.findOne({ email: email });
  const userId = await user?._id;

  try {
    if (!userId) {
      return NextResponse.json({ massage: "user not found" });
    } else {
      const userPost = await PostModel.find({ userId: userId });

      return NextResponse.json({ massage: "success", data: userPost });
    }
  } catch (error) {
    return NextResponse.json({ massage: "error", error });
  }
};
