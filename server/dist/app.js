"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mercadopago_router_1 = require("./src/route/mercadopago.router");
const server_1 = require("./src/server/server");
dotenv_1.default.config();
const port = process.env.PORT;
server_1.server.use((0, cors_1.default)());
server_1.server.use(express_1.default.json());
server_1.server.use(mercadopago_router_1.mpRouter);
server_1.server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=app.js.map