import dotenv from "dotenv";
import { MercadoPagoConfig } from "mercadopago";

dotenv.config();

export const client = new MercadoPagoConfig({
  accessToken: process.env.ACCESS_TOKEN || "",
});
