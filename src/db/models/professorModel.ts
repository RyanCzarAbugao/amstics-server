import mongoose, { Model, Document } from "mongoose";

const { Schema, model } = mongoose;

interface ProfessorDocument extends Document {
  professor_id: number;
  name: string;
}

const professorSchema = new Schema({
  professor_id: { type: Number, required: true },
  name: { type: String, required: true }
});

const Professor: Model<ProfessorDocument> = model<ProfessorDocument>('Professor', professorSchema);

export default Professor;
