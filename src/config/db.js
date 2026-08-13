import mongoose from "mongoose";
import config from "./config.js";

class DatabaseConfig {
  static async connect() {
    try {
      const mongoURI = config.mongodb.uri;

      if (!mongoURI) throw new Error("MONGO URL is not available");
      const options = {
        maxPoolSize: 10,
        serverSelectionTimeoutMs: 5000,
        socketTimeoutMs: 45000,
      };

      const conn = await mongoose.connect(mongoURI, options);

      console.log(`
      ✓ Database connection successful on Host: ${conn.connection.host}
      `);
    } catch (error) {
      console.log(`Database connection error : 
        error : ${error.message}
      `);
      process.exit(1);
    }
  }

  static async disconnect() {
    try {
      await mongoose.disconnect();
      console.log("✓ Database disconnected");
    } catch (error) {
      console.log("✗ Database disconnection error :");
      console.error("error :", error);
      process.exit(1);
    }
  }

  static connectionStatus() {
    return mongoose.connection.readyState;
  }
}
