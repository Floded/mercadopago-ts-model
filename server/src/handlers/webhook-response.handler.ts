import axios from "axios";
import { Request, Response } from "express";

export const handlerWebhookResponse = async (req: Request, res: Response) => {
  try {
    const { id } = req.body.data;

    const searchPayment = await axios.get(
      `${process.env.MP_RESPONSE_PAYMENT}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (searchPayment.status === 200) {
      console.log(searchPayment.data);

      return res.sendStatus(200);
    }

    res.sendStatus(200);
  } catch (error) {
    console.log("Error en la respuesta del webhook", error);
    res.sendStatus(500);
  }
};
