import RegisterModel from "@/Database/Model/User/Register";
import dbConfig from "@/Database/dbConfig";

import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  await dbConfig();
  const { url, id } = await req.json();
  try {
    console.log(url, id);
    const update = await RegisterModel.updateOne(
      { email: id },
      {
        $set: { image: url },
      },
      { upsert: true }
    );
    console.log(update);
    return NextResponse.json({
      massage: "success",
      data: update,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      massage: "Something went wrong",
      data: error,
    });
  }
};
