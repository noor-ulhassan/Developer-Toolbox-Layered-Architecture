import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 3001,
  mongodb: {
    uri: process.env.MONGO_URI,
  },
  api: {
    prefix: "/api",
    version: "v1",
  },

  cors: {
    origin: process.env.CORS_ORIGIN || "*",
    credentiala: true,
  },
};

export default config;
