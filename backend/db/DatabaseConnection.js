import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    console.log("MongoDB URI:", process.env.MONGODB_URI);
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
      tls: true,
      tlsAllowInvalidCertificates: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`Connected !!! Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("Error", error);
    process.exit(1);
  }
};

export default ConnectDB;
