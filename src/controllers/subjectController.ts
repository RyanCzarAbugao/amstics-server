import expressAsyncHandler from "express-async-handler";
import Subject from '../db/models/subjectModel';

class SubjectController {
  /**
  * @swagger
  * /subjects:
  *   get:
  *     tags: 
  *       - Subject
  *     summary: 
  *     description: 
  */
  public getSubjects = expressAsyncHandler(async (req, res) => {
    const subjects = await Subject.find();
    res.status(200).json(subjects);
  });

  /**
  * @swagger
  * /subjects:
  *   post:
  *     tags: 
  *       - Subject
  *     summary: 
  *     description: 
  */
  public setSubjects = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: "set users" });
  });

  /**
  * @swagger
  * /subjects:
  *   put:
  *     tags: 
  *       - Subject
  *     summary: 
  *     description: 
  */
  public updateSubjects = expressAsyncHandler(async (req, res) => {
    console.log(req.body);

    res.status(200).json({ message: `update users ${req.params.id}` });
  });

  /**
  * @swagger
  * /subjects:
  *   delete:
  *     tags: 
  *       - Subject
  *     summary: 
  *     description:
  */
  public deleteSubjects = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete users ${req.params.id}` });
  });
}

export default new SubjectController();