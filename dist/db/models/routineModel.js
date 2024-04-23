"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const scheduleSchema = new Schema({
    schedule_id: { type: Number, required: true },
    day: { type: String, required: true },
    start_time: { type: Date, required: true },
    end_time: { type: Date, required: true },
    location: { type: Number, required: true },
    year: { type: Number, required: true },
    section: { type: String, required: true },
    subject: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Subject', required: true },
    professor: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Professor', required: true }
});
const Routine = model('Routine', scheduleSchema);
exports.default = Routine;
