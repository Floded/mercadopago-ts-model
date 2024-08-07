"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mercadopago_1 = require("mercadopago");
dotenv_1.default.config();
exports.client = new mercadopago_1.MercadoPagoConfig({
    accessToken: process.env.ACCESS_TOKEN || "",
});
//# sourceMappingURL=mercadopago.service.js.map