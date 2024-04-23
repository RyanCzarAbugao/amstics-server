import mongoose, { Model, Document } from "mongoose";
import Subject from "./subjectModel";
import Professor from "./professorModel";

const { Schema, model } = mongoose;

interface RoutineDocument extends Document {
  schedule_id: number;
  day: string;
  start_time: Date;
  end_time: Date;
  year: number;
  section: string;
  subject: mongoose.Types.ObjectId;
  professor: mongoose.Types.ObjectId;
}

const scheduleSchema = new Schema({
  schedule_id: { type: Number, required: true },
  day: { type: String, required: true },
  start_time: { type: Date, required: true },
  end_time: { type: Date, required: true },
  location: { type: Number, required: true },
  year: { type: Number, required: true },
  section: { type: String, required: true },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true  },
  professor: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor', required: true  }
});

const Routine: Model<RoutineDocument> = model<RoutineDocument>('Routine', scheduleSchema);

export default Routine;
