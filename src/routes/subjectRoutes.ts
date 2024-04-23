import { Router } from 'express';
import subjectController from '../controllers/subjectController'; 

const router = Router();

router.get('/', subjectController.getSubjects);
router.post('/', subjectController.setSubjects);
router.put('/:id', subjectController.updateSubjects);
router.delete('/:id', subjectController.deleteSubjects);

export default router;