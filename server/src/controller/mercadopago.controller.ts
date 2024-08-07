import { Preference } from "mercadopago";
import { client } from "../service/mercadopago.service";

export const controllerPreference = async (req: any) => {
  const body: any = {
    items: [
      {
        title: req.body.title,
        quantity: Number(req.body.quantity),
        unit_price: Number(req.body.price),
        currency_id: "ARS",
      },
    ],
    notification_url: "https://23p2jbjj-3030.brs.devtunnels.ms/notification",
    back_urls: {
      success: "localhost:3030/success",
      failure: "localhost:3030/failure",
      pending: "localhost:3030/pending",
    },
    auto_return: "approved",
  };

  const preference = await new Preference(client).create({ body });

  return preference.init_point;
};
