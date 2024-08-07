import { Router } from "express";
import {
  handlerCreateOrder,
  handlerNotification,
  handlerSuccess,
} from "../handlers/mercado-pago.handler";

export const mpRouter = Router();

mpRouter.post("/create_preference", handlerCreateOrder);
mpRouter.get("/success", handlerSuccess);
mpRouter.post("/notification", handlerNotification);
