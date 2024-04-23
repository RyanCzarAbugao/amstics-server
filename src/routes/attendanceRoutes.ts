import { Router } from 'express';
import attendanceController from '../controllers/attendanceController'; 

const router = Router();

router.get('/', attendanceController.getAttendances);
router.post('/', attendanceController.setAttendances);

export default router;