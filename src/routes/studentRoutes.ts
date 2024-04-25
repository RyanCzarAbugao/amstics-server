import { Router } from 'express';
import studentController from '../controllers/studentController'; 

const router = Router();

router.get('/', studentController.getStudents);
router.post('/', studentController.setStudents);

export default router;