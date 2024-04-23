"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const attendanceModel_1 = __importDefault(require("../db/models/attendanceModel"));
class AttendanceController {
    constructor() {
        /**
        * @swagger
        * /attendance:
        *   get:
        *     tags:
        *       - Attendance
        *     summary:
        *     description:
        */
        this.getAttendances = (0, express_async_handler_1.default)(async (req, res) => {
            const attendance = await attendanceModel_1.default.find();
            res.status(200).json(attendance);
        });
        /**
        * @swagger
        * /attendance:
        *   post:
        *     tags:
        *       - Attendance
        *     summary:
        *     description:
        */
        this.setAttendances = (0, express_async_handler_1.default)(async (req, res) => {
            res.status(200).json({ message: "set users" });
        });
        /**
        * @swagger
        * /attendance:
        *   put:
        *     tags:
        *       - Attendance
        *     summary:
        *     description:
        */
        this.updateAttendances = (0, express_async_handler_1.default)(async (req, res) => {
            console.log(req.body);
            res.status(200).json({ message: `update users ${req.params.id}` });
        });
        /**
        * @swagger
        * /attendance:
        *   delete:
        *     tags:
        *       - Attendance
        *     summary:
        *     description:
        */
        this.deleteAttendances = (0, express_async_handler_1.default)(async (req, res) => {
            res.status(200).json({ message: `delete users ${req.params.id}` });
        });
    }
}
exports.default = new AttendanceController();
