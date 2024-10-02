"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mpRouter = void 0;
const express_1 = require("express");
const mercado_pago_handler_1 = require("../handlers/mercado-pago.handler");
const webhook_response_handler_1 = require("../handlers/webhook-response.handler");
exports.mpRouter = (0, express_1.Router)();
exports.mpRouter.post("/create_preference", mercado_pago_handler_1.handlerCreateOrder);
exports.mpRouter.get("/success", mercado_pago_handler_1.handlerSuccess);
exports.mpRouter.post("/webhook", webhook_response_handler_1.handlerWebhookResponse);
//# sourceMappingURL=mercadopago.router.js.map