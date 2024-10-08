import { Request, Response } from "express";
import { controllerPreference } from "../controller/mercadopago.controller";

export const handlerCreateOrder = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const response = await controllerPreference(body);
    res.status(200).json({ redirectUrl: response });
  } catch (error) {
    res.status(404).json({ error });
  }
};

export const handlerSuccess = async (req: Request, res: Response) => {
  res.json({ msj: "pago aceptado" });
};
