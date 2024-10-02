import { Router } from "express";
import {
  handlerCreateOrder,
  handlerSuccess,
} from "../handlers/mercado-pago.handler";
import { handlerWebhookResponse } from "../handlers/webhook-response.handler";

export const mpRouter = Router();

mpRouter.post("/create_preference", handlerCreateOrder);
mpRouter.get("/success", handlerSuccess);
mpRouter.post("/webhook", handlerWebhookResponse);
