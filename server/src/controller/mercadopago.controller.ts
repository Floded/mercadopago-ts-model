import { Preference } from "mercadopago";
import { client } from "../mercado-pago.service/mercadopago.service";

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
    back_urls: {
      success: "/success",
      failure: "/failure",
      pending: "/pending",
    },
    auto_return: "approved",
  };

  const preference = await new Preference(client).create({ body });

  return preference.init_point;
};
