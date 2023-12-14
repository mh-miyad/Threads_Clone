import mongoose from "mongoose";

const dbConfig = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`, {
      dbName: "threads_Clone",
    });
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};
export default dbConfig;
