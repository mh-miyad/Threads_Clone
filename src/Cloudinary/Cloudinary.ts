import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (file: any) => {
  try {
    if (!file) return null;

    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(file, {
      resource_type: "image",
    });
    console.log(response);

    return response.url;
  } catch (error) {
    fs.unlinkSync(file); // remove the uploaded file
    return null;
  }
};

export default uploadOnCloudinary;
