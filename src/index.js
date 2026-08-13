import express from "express";

import config from "./config/config.js";
import cors from "cors";

app.use(
  cors({
    origin: config.cors.origin,
    credentials: config.cors.credentials,
    methods: ["POST", "PUT", "DELETE", "GET", "OPTIONS"],
  }),
);

// body parsing middlewares

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

const app = express();
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});

export default app;
