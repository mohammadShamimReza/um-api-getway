import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentController } from './student.controller';
import { StudentValidation } from './student.validations';

const router = express.Router();

router.get('/', StudentController.getAllFromDB);
router.get('/profile/:id', StudentController.getStudentProfile);
router.get('/my-courses', StudentController.getMyCourses);
router.get('/my-academic-infos', StudentController.getMyAcademicInfos);
router.get('/my-course-schedules', StudentController.getMyCourseSchedules);
router.get('/:id', StudentController.getByIdFromDB);
router.get('/:id', StudentController.getByIdFromDB);

router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudent),
  StudentController.updateOneInDB
);

router.delete('/:id', StudentController.deleteByIdFromDB);

export const studentRoutes = router;
