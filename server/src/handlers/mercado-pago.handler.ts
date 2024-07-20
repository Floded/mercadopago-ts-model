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
