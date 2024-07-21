import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { mpRouter } from "./src/route/mercadopago.router";
import { server } from "./src/server/server";
dotenv.config();

const port = process.env.PORT;

server.use(cors());
server.use(express.json());
server.use(mpRouter);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
