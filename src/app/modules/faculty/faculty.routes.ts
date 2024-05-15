import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validations';

const router = express.Router();

router.get('/', FacultyController.getAllFromDB);

router.get('/profile/:id', FacultyController.getFacultyProfile);
router.get('/my-courses', FacultyController.getMyCourses);
router.get('/my-course-students', FacultyController.getMyCourseStudents);

router.get('/:id', FacultyController.getByIdFromDB);

router.patch(
  '/:id',
  validateRequest(FacultyValidation.updateFaculty),

  FacultyController.updateOneInDB
);

router.delete('/:id', FacultyController.deleteByIdFromDB);

export const facultyRoutes = router;
