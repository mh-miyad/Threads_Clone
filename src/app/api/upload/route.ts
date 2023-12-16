// import upload from "@/Multer/multer";
// import { NextApiRequest, NextApiResponse } from "next";

// interface MulterFile {
//   fieldname: string;
//   originalname: string;
//   encoding: string;
//   mimetype: string;
//   size: number;
//   destination: string;
//   filename: string;
//   path: string;
//   buffer: Buffer;
// }

// type MyApiRequest = NextApiRequest & {
//   files?: MulterFile[];
// };

// async function handleUpload(req: MyApiRequest, res: NextApiResponse) {
//   try {
//     // Use "single" or "array" depending on your upload needs
//     upload.single("file")(req, res, (err) => {
//       if (err) {
//         return res.status(500).json({ message: err.message });
//       }

//       // Access uploaded file details from req.file
//       const { filename, mimetype, size } = req.file!; // safe to access now

//       // Process and save the uploaded file
//       res.status(200).json({ message: "File uploaded successfully!", data: { filename, mimetype, size } });
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error." });
//   }
// }

// export default handleUpload;
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename") || "";
  if (filename && request.body) {
    const blob = await put(filename, request.body, {
      access: "public",
    });
    return NextResponse.json(blob);
  } else {
    return NextResponse.json({ message: "File upload failed" });
  }
  // ⚠️ The below code is for App Router Route Handlers only

  // Here's the code for Pages API Routes:
  // const blob = await put(filename, request, {
  //   access: 'public',
  // });
}
