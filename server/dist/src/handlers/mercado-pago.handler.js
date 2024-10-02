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
exports.handlerSuccess = exports.handlerCreateOrder = void 0;
const mercadopago_controller_1 = require("../controller/mercadopago.controller");
const handlerCreateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const response = yield (0, mercadopago_controller_1.controllerPreference)(body);
        res.status(200).json({ redirectUrl: response });
    }
    catch (error) {
        res.status(404).json({ error });
    }
});
exports.handlerCreateOrder = handlerCreateOrder;
const handlerSuccess = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ msj: "pago aceptado" });
});
exports.handlerSuccess = handlerSuccess;
//# sourceMappingURL=mercado-pago.handler.js.map