"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const routineModel_1 = __importDefault(require("../db/models/routineModel"));
class RoutineController {
    constructor() {
        /**
        * @swagger
        * /routine:
        *   get:
        *     tags:
        *       - Routine
        *     summary:
        *     description:
        */
        this.getRoutines = (0, express_async_handler_1.default)(async (req, res) => {
            const routine = await routineModel_1.default.find();
            res.status(200).json(routine);
        });
        /**
        * @swagger
        * /routine:
        *   post:
        *     tags:
        *       - Routine
        *     summary:
        *     description:
        */
        this.setRoutines = (0, express_async_handler_1.default)(async (req, res) => {
            res.status(200).json({ message: "set users" });
        });
        /**
        * @swagger
        * /routine:
        *   put:
        *     tags:
        *       - Routine
        *     summary:
        *     description:
        */
        this.updateRoutines = (0, express_async_handler_1.default)(async (req, res) => {
            console.log(req.body);
            res.status(200).json({ message: `update users ${req.params.id}` });
        });
        /**
        * @swagger
        * /routine:
        *   delete:
        *     tags:
        *       - Routine
        *     summary:
        *     description:
        */
        this.deleteRoutines = (0, express_async_handler_1.default)(async (req, res) => {
            res.status(200).json({ message: `delete users ${req.params.id}` });
        });
    }
}
exports.default = new RoutineController();
