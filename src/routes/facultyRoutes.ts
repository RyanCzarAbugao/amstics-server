import { Router } from 'express';
import facultyController from '../controllers/professorController'; 

const router = Router();

router.get('/', facultyController.getFaculties);
router.post('/', facultyController.setFaculties);
router.put('/:id', facultyController.updateFaculties);
router.delete('/:id', facultyController.deleteFaculties);

export default router;