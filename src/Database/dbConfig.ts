import mongoose from "mongoose";

const dbConfig = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/", {
      dbName: "threads_Clone",
    });
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};
export default dbConfig;
