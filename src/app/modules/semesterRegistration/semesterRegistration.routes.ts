import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterRegistrationController } from './semesterRegistration.controller';
import { SemesterRegistrationValidation } from './semesterRegistration.validation';

const router = express.Router();

router.get('/', SemesterRegistrationController.getAllFromDB);

router.get(
  '/my-registration',
  SemesterRegistrationController.getMyRegistration
);

router.get(
  '/my-semester-registration-courses',
  SemesterRegistrationController.mySemesterRegistrationCourses
);

router.get('/:id', SemesterRegistrationController.getByIdFromDB);

router.post(
  '/',
  validateRequest(SemesterRegistrationValidation.create),
  
  SemesterRegistrationController.insertIntoDB
);

router.post(
  '/enroll-into-course',
  validateRequest(SemesterRegistrationValidation.enrollIntoCourse),
  SemesterRegistrationController.enrollIntoCourse
);

router.post(
  '/withdraw-from-course',
  validateRequest(SemesterRegistrationValidation.withdrawFromCourse),
  SemesterRegistrationController.withDrawFromCourse
);

router.post(
  '/confirm-registration',
  SemesterRegistrationController.confirmRegistration
);

router.post(
  '/start-registration',
  SemesterRegistrationController.startRegistration
);

router.post(
  '/:id/start-new-semester',
  
  SemesterRegistrationController.startNewSemester
);

router.patch(
  '/:id',
  validateRequest(SemesterRegistrationValidation.update),
  
  SemesterRegistrationController.updateOneInDB
);

router.delete('/:id', SemesterRegistrationController.deleteByIdFromDB);

export const semesterRegistrationRoutes = router;
