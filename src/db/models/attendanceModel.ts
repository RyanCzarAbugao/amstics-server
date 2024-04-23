import mongoose, { Model, Document } from "mongoose";

const { Schema, model } = mongoose;

interface AttendanceDocument extends Document {
  enroll_no: number;
  class_date: Date;
  status: string;
}

const attendanceSchema = new Schema({
  enroll_no: { type: Number, required: true },
  class_date: { type: String, required: true },
  status: { type: Date, required: true }
});

const Attendance: Model<AttendanceDocument> = model<AttendanceDocument>('Attendance', attendanceSchema);

export default Attendance;
