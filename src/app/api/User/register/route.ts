import dbConfig from "@/Database/dbConfig";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import RegisterModel from "@/Database/Model/User/Register";
dbConfig();
export const POST = async (req: Request, res: Response) => {
  const { email, password, name } = await req.json();
  const hashPassword = await bcrypt.hashSync(password, 10);
  const user = new RegisterModel({
    name: name,
    email: email,
    password: hashPassword,
  });
  await user.save();
  return NextResponse.json({ massage: "user created" });
};
