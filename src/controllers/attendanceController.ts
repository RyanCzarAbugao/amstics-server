import expressAsyncHandler from "express-async-handler";
import Attendance from '../db/models/attendanceModel';

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
  public getAttendances = expressAsyncHandler(async (req, res) => {
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
    res.status(200).json({ message: "set users" });
  });

  /**
  * @swagger
  * /attendance:
  *   put:
  *     tags: 
  *       - Attendance
  *     summary: 
  *     description: 
  */
  public updateAttendances = expressAsyncHandler(async (req, res) => {
    console.log(req.body);

    res.status(200).json({ message: `update users ${req.params.id}` });
  });

  /**
  * @swagger
  * /attendance:
  *   delete:
  *     tags: 
  *       - Attendance
  *     summary: 
  *     description:
  */
  public deleteAttendances = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete users ${req.params.id}` });
  });
}

export default new AttendanceController();