import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { Attendance } from '../db/models/attendanceModel';

class AttendanceController {
  /**
  * @swagger
  * /attendance:
  *   get:
  *     tags: 
  *       - Attendance
  *     summary: 
  *     description: 
  */
  public getAttendances = expressAsyncHandler(async (req: Request, res: Response) => {
    const attendance = await Attendance.find();
    res.status(200).json(attendance);
  });

  /**
  * @swagger
  * /attendance:
  *   post:
  *     tags: 
  *       - Attendance
  *     summary: 
  *     description: 
  */
  public setAttendances = expressAsyncHandler(async (req, res) => {
    const { enroll_no, class_date, status } = req.body;
    const attendance = Attendance.build({enroll_no, class_date, status});
    await attendance.save();
    res.status(201).send(attendance);
  });
}

export default new AttendanceController();