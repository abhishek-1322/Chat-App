import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
  try {
    console.log("inside connectDB",process.env.MONGODB_URL);
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log("MongoDB connected", connectionInstance.connection.host);
  } catch (error) {
    console.log("Error in mongodb connection", error);
    process.exit(1);
  }
};
