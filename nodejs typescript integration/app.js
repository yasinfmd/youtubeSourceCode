"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    const data = {
        ad: "Yasin",
        id: 10
    };
    res.json(data);
});
app.listen(3000, () => {
    console.log("Application running on PORT 3000");
});
