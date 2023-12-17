import PostModel from "@/Database/Model/Post/Post";
// import RegisterModel from "@/Database/Model/User/Register";
// import dbConfig from "@/Database/dbConfig";
// import { NextResponse } from "next/server";

// export const POST = async (req: Request, res: Response) => {
//   await dbConfig();
//   const { likeId ,postId, email} = await req.json();
//   const user = await RegisterModel.findOne({ email: email });
//   const userId = await user?._id;
//   try {
//     if (!userId) {
//       return NextResponse.json({ massage: "user not found" });
//     } else {
//       const userPost = new PostModel({
//         lik
//       });
//       await userPost.save();
//       console.log(userPost);
//       return NextResponse.json({ massage: "success" });
//     }
//   } catch (error) {
//     return NextResponse.json({ massage: "error", error });
//   }
// };
