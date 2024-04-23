import expressAsyncHandler from "express-async-handler";
import { Student } from '../db/models/studentModel';

class StudentController {
  /**
  * @swagger
  * /students:
  *   get:
  *     tags: 
  *       - Student
  *     summary: 
  *     description: 
  */
  public getStudents = expressAsyncHandler(async (req, res) => {
    const students = await Student.find();
    res.status(200).json(students);
  });

  /**
  * @swagger
  * /students:
  *   post:
  *     tags: 
  *       - Student
  *     summary: 
  *     description: 
  */
  public setStudents = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: "set users" });
  });

  /**
  * @swagger
  * /students:
  *   put:
  *     tags: 
  *       - Student
  *     summary: 
  *     description: 
  */
  public updateStudents = expressAsyncHandler(async (req, res) => {
    console.log(req.body);

    res.status(200).json({ message: `update users ${req.params.id}` });
  });

  /**
  * @swagger
  * /students:
  *   delete:
  *     tags: 
  *       - Student
  *     summary: 
  *     description:
  */
  public deleteStudents = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete users ${req.params.id}` });
  });
}

export default new StudentController();