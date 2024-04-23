import mongoose from "mongoose";

const { Schema} = mongoose;

interface IStudent {
  enroll_no: number;
  name: string;
  grade_level: number;
  section_name: string;
  qr_code: string;
}

interface studentModelInterface extends mongoose.Model<StudentDoc> {
  build(attr: IStudent): any
}

interface StudentDoc extends mongoose.Document {
  enroll_no: number;
  name: string;
  grade_level: number;
  section_name: string;
  qr_code: string;
}

const studentSchema = new Schema({
  enroll_no: { type: Number, required: true },
  name: { type: String, required: true },
  grade_level: { type: Number, required: true },
  section_name: { type: String, required: true },
  qr_code: { type: String, required: true }
});

studentSchema.statics.build = (attr: IStudent) => {
  return new Student(attr)
}

const Student = mongoose.model<StudentDoc, studentModelInterface>('Student', studentSchema);

export { Student };
