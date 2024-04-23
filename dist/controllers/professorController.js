"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const professorModel_1 = __importDefault(require("../db/models/professorModel"));
class ProfessorController {
    constructor() {
        /**
        * @swagger
        * /professor:
        *   get:
        *     tags:
        *       - Professor
        *     summary:
        *     description:
        */
        this.getFaculties = (0, express_async_handler_1.default)(async (req, res) => {
            const professor = await professorModel_1.default.find();
            res.status(200).json(professor);
        });
        /**
        * @swagger
        * /professor:
        *   post:
        *     tags:
        *       - Professor
        *     summary:
        *     description:
        */
        this.setFaculties = (0, express_async_handler_1.default)(async (req, res) => {
            res.status(200).json({ message: "set users" });
        });
        /**
        * @swagger
        * /professor:
        *   put:
        *     tags:
        *       - Professor
        *     summary:
        *     description:
        */
        this.updateFaculties = (0, express_async_handler_1.default)(async (req, res) => {
            console.log(req.body);
            res.status(200).json({ message: `update users ${req.params.id}` });
        });
        /**
        * @swagger
        * /professor:
        *   delete:
        *     tags:
        *       - Professor
        *     summary:
        *     description:
        */
        this.deleteFaculties = (0, express_async_handler_1.default)(async (req, res) => {
            res.status(200).json({ message: `delete users ${req.params.id}` });
        });
    }
}
exports.default = new ProfessorController();
