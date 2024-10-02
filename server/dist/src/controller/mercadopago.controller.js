"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerPreference = void 0;
require("dotenv/config");
const mercadopago_1 = require("mercadopago");
const mercadopago_service_1 = require("../service/mercadopago.service");
const controllerPreference = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const body = {
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
    const preference = yield new mercadopago_1.Preference(mercadopago_service_1.client).create({ body });
    return preference.init_point;
});
exports.controllerPreference = controllerPreference;
//# sourceMappingURL=mercadopago.controller.js.map