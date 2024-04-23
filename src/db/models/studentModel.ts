import mongoose, { Model, Document } from "mongoose";

const { Schema, model } = mongoose;

interface StudentDocument extends Document {
  student_id: number;
  name: string;
  grade_level: number;
  section_name: string;
  qr_code: string;
}

const studentSchema = new Schema({
  student_id: { type: Number, required: true },
  name: { type: String, required: true },
  grade_level: { type: Number, required: true },
  section_name: { type: String, required: true },
  qr_code: { type: String, required: true },
});

const Student: Model<StudentDocument> = model<StudentDocument>('Student', studentSchema);

export default Student;
