"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const subjectModel_1 = __importDefault(require("../db/models/subjectModel"));
class SubjectController {
    constructor() {
        /**
        * @swagger
        * /subjects:
        *   get:
        *     tags:
        *       - Subject
        *     summary:
        *     description:
        */
        this.getSubjects = (0, express_async_handler_1.default)(async (req, res) => {
            const subjects = await subjectModel_1.default.find();
            res.status(200).json(subjects);
        });
        /**
        * @swagger
        * /subjects:
        *   post:
        *     tags:
        *       - Subject
        *     summary:
        *     description:
        */
        this.setSubjects = (0, express_async_handler_1.default)(async (req, res) => {
            res.status(200).json({ message: "set users" });
        });
        /**
        * @swagger
        * /subjects:
        *   put:
        *     tags:
        *       - Subject
        *     summary:
        *     description:
        */
        this.updateSubjects = (0, express_async_handler_1.default)(async (req, res) => {
            console.log(req.body);
            res.status(200).json({ message: `update users ${req.params.id}` });
        });
        /**
        * @swagger
        * /subjects:
        *   delete:
        *     tags:
        *       - Subject
        *     summary:
        *     description:
        */
        this.deleteSubjects = (0, express_async_handler_1.default)(async (req, res) => {
            res.status(200).json({ message: `delete users ${req.params.id}` });
        });
    }
}
exports.default = new SubjectController();
