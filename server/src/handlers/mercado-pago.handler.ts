import { Request, Response } from "express";
import { controllerPreference } from "../controller/mercadopago.controller";

export const handlerCreateOrder = async (req: Request, res: Response) => {
  try {
    const response = await controllerPreference(req);
    res.status(200).json({ redirectUrl: response });
  } catch (error) {
    res.status(404).json({ error });
  }
};

export const handlerSuccess = async (req: Request, res: Response) => {
  // console.log(req.query);

  res.json({ msj: "pago aceptado" });
};

export const handlerNotification = async (req: Request, res: Response) => {
  console.log("notificando");

  res.json({ msj: "notification URL" });
};
