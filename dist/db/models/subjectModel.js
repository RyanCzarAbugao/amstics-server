"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const subjectSchema = new Schema({
    subject_id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true }
});
const Subject = model('Subject', subjectSchema);
exports.default = Subject;
