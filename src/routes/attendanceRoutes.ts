import { Router } from 'express';
import attendanceController from '../controllers/attendanceController'; 

const router = Router();

router.get('/', attendanceController.getAttendances);
router.post('/', attendanceController.setAttendances);
router.put('/:id', attendanceController.updateAttendances);
router.delete('/:id', attendanceController.deleteAttendances);

export default router;