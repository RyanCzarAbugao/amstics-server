import expressAsyncHandler from "express-async-handler";
import Professor from '../db/models/professorModel';

class ProfessorController {
  /**
  * @swagger
  * /professor:
  *   get:
  *     tags: 
  *       - Professor
  *     summary: 
  *     description: 
  */
  public getFaculties = expressAsyncHandler(async (req, res) => {
    const professor = await Professor.find();
    res.status(200).json(professor);
  });

  /**
  * @swagger
  * /professor:
  *   post:
  *     tags: 
  *       - Professor
  *     summary: 
  *     description: 
  */
  public setFaculties = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: "set users" });
  });

  /**
  * @swagger
  * /professor:
  *   put:
  *     tags: 
  *       - Professor
  *     summary: 
  *     description: 
  */
  public updateFaculties = expressAsyncHandler(async (req, res) => {
    console.log(req.body);

    res.status(200).json({ message: `update users ${req.params.id}` });
  });

  /**
  * @swagger
  * /professor:
  *   delete:
  *     tags: 
  *       - Professor
  *     summary: 
  *     description:
  */
  public deleteFaculties = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete users ${req.params.id}` });
  });
}

export default new ProfessorController();