import { Router } from 'express';
import scheduleController from '../controllers/routineController'; 

const router = Router();

router.get('/', scheduleController.getSchedules);
router.post('/', scheduleController.setSchedules);
router.put('/:id', scheduleController.updateSchedules);
router.delete('/:id', scheduleController.deleteSchedules);

export default router;