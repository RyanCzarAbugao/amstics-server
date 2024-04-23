import mongoose from "mongoose";

const { Schema} = mongoose;

interface IAttendance {
  enroll_no: number;
  class_date: Date;
  status: string;
}

interface attendanceModelInterface extends mongoose.Model<AttendanceDoc> {
  build(attr: IAttendance): any
}

interface AttendanceDoc extends mongoose.Document {
  enroll_no: number;
  class_date: Date;
  status: string;
}

const attendanceSchema = new Schema({
  enroll_no: { type: Number, required: true },
  class_date: { type: Date, required: true },
  status: { type: String, required: true }
});

attendanceSchema.statics.build = (attr: IAttendance) => {
  return new Attendance(attr)
}

const Attendance = mongoose.model<AttendanceDoc, attendanceModelInterface>('Attendance', attendanceSchema);

export { Attendance };