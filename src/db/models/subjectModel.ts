import mongoose, { Model, Document } from "mongoose";

const { Schema, model } = mongoose;

interface SubjectDocument extends Document {
  subject_id: number;
  name: string;
  description: string;
}

const subjectSchema = new Schema({
  subject_id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true }
});

const Subject: Model<SubjectDocument> = model<SubjectDocument>('Subject', subjectSchema);

export default Subject;
