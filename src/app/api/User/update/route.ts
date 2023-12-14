import bcrypt from "bcryptjs";
import RegisterModel from "@/Database/Model/User/Register";
import dbConfig from "@/Database/dbConfig";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
dbConfig();
export const POST = async (req: Request, res: Response) => {
  const { data } = await req.json();
  //   const mail = await RegisterModel.findOne({
  //     email: email,
  //   });
  console.log(data);
  return NextResponse.json({ massage: "failed" });
};
