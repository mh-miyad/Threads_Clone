import RegisterModel from "@/Database/Model/User/Register";
import dbConfig from "@/Database/dbConfig";

import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  await dbConfig();
  const { data, email } = await req.json();
  try {
    const prevDocument = await RegisterModel.findOne({
      email: email,
    });

    const update = await RegisterModel.updateOne(
      { _id: prevDocument?._id },
      {
        name: data.name,
        userName: data.userName,
        bio: data.bio,
        address: data.address,
        phone: data.phone,
        profession: data.profession,
        image: data.image,
        github: data.github,
        linkedin: data.linkedin,
        portfolio: data.portfolio,
        skill: data.skill,
      }
    );

    return NextResponse.json({
      massage: "Successfully updated Your Document",
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
