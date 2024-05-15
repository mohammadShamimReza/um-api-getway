import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentEnrolledCourseMarkController } from './studentEnrolledCourseMark.controller';
import { StudentEnrolledCourseMarkValidation } from './studentEnrolledCourseMark.validation';

const router = express.Router();

router.get('/', StudentEnrolledCourseMarkController.getAllFromDB);
router.get('/my-marks', StudentEnrolledCourseMarkController.getStudentMarks);

router.post(
  '/update-marks',
  validateRequest(StudentEnrolledCourseMarkValidation.updateStudentMarks),
  StudentEnrolledCourseMarkController.updateMarks
);

router.post(
  '/update-course-final-marks',
  validateRequest(StudentEnrolledCourseMarkValidation.updateStudentCourseFinalMarks),
  StudentEnrolledCourseMarkController.updateCourseFinalMarks
);

export const studentEnrolledCourseMarkRoutes = router;
