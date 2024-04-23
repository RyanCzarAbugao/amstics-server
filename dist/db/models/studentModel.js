"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const studentSchema = new Schema({
    student_id: { type: Number, required: true },
    name: { type: String, required: true },
    grade_level: { type: Number, required: true },
    section_name: { type: String, required: true },
    qr_code: { type: String, required: true },
});
const Student = model('Student', studentSchema);
exports.default = Student;
