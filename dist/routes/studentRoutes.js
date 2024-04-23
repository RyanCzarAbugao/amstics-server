"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentController_1 = __importDefault(require("../controllers/studentController"));
const router = (0, express_1.Router)();
router.get('/', studentController_1.default.getStudents);
router.post('/', studentController_1.default.setStudents);
router.put('/:id', studentController_1.default.updateStudents);
router.delete('/:id', studentController_1.default.deleteStudents);
exports.default = router;
