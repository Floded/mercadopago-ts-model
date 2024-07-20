import { Router } from "express";
import { handlerCreateOrder } from "../handlers/mercado-pago.handler";

export const mpRouter = Router();

mpRouter.post("/create_preference", handlerCreateOrder);
