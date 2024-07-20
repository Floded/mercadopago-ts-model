"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mpRouter = void 0;
const express_1 = require("express");
const mercado_pago_handler_1 = require("../handlers/mercado-pago.handler");
exports.mpRouter = (0, express_1.Router)();
exports.mpRouter.post("/create_preference", mercado_pago_handler_1.handlerCreateOrder);
//# sourceMappingURL=mercadopago.router.js.map