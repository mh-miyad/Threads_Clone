import { upload } from "./../../../Multer/multer";
import { v2 as cloudinary } from "cloudinary";
import { cloudinaryConfig } from "@/Cloudinary/Cloudinary";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  const { file }: { file: File } = await req.json();
  await cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(file, options);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  NextResponse.json({ success: true });
};
