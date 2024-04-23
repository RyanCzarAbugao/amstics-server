import { Router } from 'express';
import studentController from '../controllers/studentController'; 

const router = Router();

router.get('/', studentController.getStudents);
router.post('/', studentController.setStudents);
router.put('/:id', studentController.updateStudents);
router.delete('/:id', studentController.deleteStudents);

export default router;