import "dotenv/config";
import { Preference } from "mercadopago";
import { Options } from "../interfaces/interfaces-mp";
import { client } from "../service/mercadopago.service";

export const controllerPreference = async (options: Options) => {
  const body: any = {
    items: [
      {
        title: options.title,
        quantity: Number(options.quantity),
        unit_price: Number(options.price),
        currency_id: "ARS",
      },
    ],
    notification_url: `${process.env.NGROK_URL}/webhook?source_news=webhooks`,
    back_urls: {
      success: "http://localhost:5173/",
      failure: "localhost:3030/failure",
      pending: "localhost:3030/pending",
    },
    auto_return: "approved",
  };

  const preference = await new Preference(client).create({ body });

  return preference.init_point;
};
