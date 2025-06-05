import mongoose from "mongoose";

const connect = async () => {
  try {
    console.log("Attempting to connect to database.....");
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("Connected to database.....");
  } catch (error) {
    console.log("Failed to connect to database.....", error.message);
    process.exit(1);
  }
};
export default connect;
//----------------------------------------------
// // export default connect;
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// // Load environment variables from .env file
// dotenv.config();

// const connect = async () => {
//   try {
//     const uri = process.env.MONGO_URI;

//     if (!uri) {
//       throw new Error("MONGO_URI is not defined in your environment variables.");
//     }

//     console.log("Attempting to connect to database.....");
//     await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to database.....");
//   } catch (error) {
//     console.log("Failed to connect to database.....", error.message);
//     process.exit(1);
//   }
// };

// export default connect;
