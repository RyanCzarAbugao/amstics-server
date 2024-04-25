import expressAsyncHandler from "express-async-handler";
import { Routine } from '../db/models/routineModel';

class RoutineController {
  /**
  * @swagger
  * /routine:
  *   get:
  *     tags: 
  *       - Routine
  *     summary: 
  *     description: 
  */
  public getRoutines = expressAsyncHandler(async (req, res) => {
    const routine = await Routine.find();
    res.status(200).json(routine);
  });

  /**
  * @swagger
  * /routine:
  *   get:
  *     tags: 
  *       - Routine
  *     summary: 
  *     description: 
  */
  public getRoutineByEnrollNo = expressAsyncHandler(async (req, res) => {
    const routine = await Routine.find({enroll_no: req.params.enroll_no});
    res.status(200).json(routine);
  });

  /**
  * @swagger
  * /routine:
  *   post:
  *     tags: 
  *       - Routine
  *     summary: 
  *     description: 
  */
  public setRoutines = expressAsyncHandler(async (req, res) => {
    const {
      enroll_no,
      day,
      start_time,
      end_time,
      location,
      subject
    } = req.body;

    const routine = Routine.build({ 
      enroll_no,
      day,
      start_time,
      end_time,
      location,
      subject
     });
     
    await routine.save();
    res.status(201).send(routine);
  });
}

export default new RoutineController();