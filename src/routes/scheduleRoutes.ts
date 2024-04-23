import { Router } from 'express';
import scheduleController from '../controllers/routineController'; 

const router = Router();

router.get('/', scheduleController.getRoutines);
router.post('/', scheduleController.setRoutines);
router.put('/:id', scheduleController.updateRoutines);
router.delete('/:id', scheduleController.deleteRoutines);

export default router;