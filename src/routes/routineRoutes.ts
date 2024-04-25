import { Router } from 'express';
import scheduleController from '../controllers/routineController'; 

const router = Router();

router.get('/', scheduleController.getRoutines);
router.get('/:enroll_no', scheduleController.getRoutineByEnrollNo);
router.post('/', scheduleController.setRoutines);

export default router;