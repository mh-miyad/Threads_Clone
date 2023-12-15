import cloudinary from "cloudinary";

import { cloudinaryConfig } from "@/Cloudinary/Cloudinary";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  const { file }: { file: File } = await req.json();

  try {
    const uploadResponse = await cloudinary.v2.uploader.upload(
      JSON.stringify(file),
      cloudinaryConfig
    );
    console.log(uploadResponse);
    NextResponse.json({ success: true, url: uploadResponse.secure_url });
  } catch (error) {}
  console.log(file);
  NextResponse.json({ success: false });
};
