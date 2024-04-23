import expressAsyncHandler from "express-async-handler";
import Routine from '../db/models/routineModel';

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
  *   post:
  *     tags: 
  *       - Routine
  *     summary: 
  *     description: 
  */
  public setRoutines = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: "set users" });
  });

  /**
  * @swagger
  * /routine:
  *   put:
  *     tags: 
  *       - Routine
  *     summary: 
  *     description: 
  */
  public updateRoutines = expressAsyncHandler(async (req, res) => {
    console.log(req.body);

    res.status(200).json({ message: `update users ${req.params.id}` });
  });

  /**
  * @swagger
  * /routine:
  *   delete:
  *     tags: 
  *       - Routine
  *     summary: 
  *     description:
  */
  public deleteRoutines = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete users ${req.params.id}` });
  });
}

export default new RoutineController();