import bcrypt from "bcryptjs";
import RegisterModel from "@/Database/Model/User/Register";
import dbConfig from "@/Database/dbConfig";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export const GET = async (req: Request, res: Response) => {
  dbConfig();
  return NextResponse.json({ massage: "success" });
};
export const POST = async (req: Request, res: Response) => {
  await dbConfig();
  const { email, password } = await req.json();
  const cloneMail = await RegisterModel.findOne({
    email: email,
  });
  const mail = cloneMail?.email;
  const pass = cloneMail?.password;
  const checkPassword = await bcrypt.compareSync(password, pass);
  if (mail === email && checkPassword) {
    const token = jwt.sign({ email: email }, `${process.env.JWT_SECRET}`, {
      expiresIn: "1d",
    });
    await cookies().set("token", token);

    return NextResponse.json({ massage: "success" });
  } else {
    return NextResponse.json({ massage: "failed" });
  }
};
