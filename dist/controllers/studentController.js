"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const studentModel_1 = __importDefault(require("../db/models/studentModel"));
class StudentController {
    constructor() {
        /**
        * @swagger
        * /students:
        *   get:
        *     tags:
        *       - Student
        *     summary:
        *     description:
        */
        this.getStudents = (0, express_async_handler_1.default)(async (req, res) => {
            const students = await studentModel_1.default.find();
            res.status(200).json(students);
        });
        /**
        * @swagger
        * /students:
        *   post:
        *     tags:
        *       - Student
        *     summary:
        *     description:
        */
        this.setStudents = (0, express_async_handler_1.default)(async (req, res) => {
            res.status(200).json({ message: "set users" });
        });
        /**
        * @swagger
        * /students:
        *   put:
        *     tags:
        *       - Student
        *     summary:
        *     description:
        */
        this.updateStudents = (0, express_async_handler_1.default)(async (req, res) => {
            console.log(req.body);
            res.status(200).json({ message: `update users ${req.params.id}` });
        });
        /**
        * @swagger
        * /students:
        *   delete:
        *     tags:
        *       - Student
        *     summary:
        *     description:
        */
        this.deleteStudents = (0, express_async_handler_1.default)(async (req, res) => {
            res.status(200).json({ message: `delete users ${req.params.id}` });
        });
    }
}
exports.default = new StudentController();
