"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const attendanceController_1 = __importDefault(require("../controllers/attendanceController"));
const router = (0, express_1.Router)();
router.get('/', attendanceController_1.default.getAttendances);
router.post('/', attendanceController_1.default.setAttendances);
router.put('/:id', attendanceController_1.default.updateAttendances);
router.delete('/:id', attendanceController_1.default.deleteAttendances);
exports.default = router;
