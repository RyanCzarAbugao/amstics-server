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
    const {
      enroll_no,
      name,
      grade_level,
      section_name,
      qr_code
    } = req.body;

    const student = Student.build({       
      enroll_no,
      name,
      grade_level,
      section_name,
      qr_code
     });
     
    await student.save();
    res.status(201).send(student);
  });
}

export default new StudentController();