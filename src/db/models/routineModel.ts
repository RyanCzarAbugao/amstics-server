import mongoose from "mongoose";

const { Schema} = mongoose;

interface IRoutine {
  enroll_no: number;
  day: string;
  start_time: Date;
  end_time: Date;
  location: string;
  subject: string;
}

interface routineModelInterface extends mongoose.Model<RoutineDoc> {
  build(attr: IRoutine): any
}

interface RoutineDoc extends mongoose.Document {
  enroll_no: number;
  day: Date;
  start_time: Date;
  end_time: Date;
  location: string;
  subject: string;
}

const routineSchema = new Schema({
  enroll_no: { type: Number, required: true },
  day: { type: Date, required: true },
  start_time: { type: Date, required: true },
  end_time: { type: Date, required: true },
  location: { type: String, required: true },
  subject: { type: String, required: true  }
});

routineSchema.statics.build = (attr: IRoutine) => {
  return new Routine(attr)
}

const Routine = mongoose.model<RoutineDoc, routineModelInterface>('Routine', routineSchema);

export { Routine };
