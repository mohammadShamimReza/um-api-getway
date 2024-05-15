import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validations';

const router = express.Router();

router.get('/', AcademicSemesterController.getAllFromDB);
router.get('/:id', AcademicSemesterController.getByIdFromDB);

router.post(
  '/',
  validateRequest(AcademicSemesterValidation.create),

  AcademicSemesterController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.update),

  AcademicSemesterController.updateOneIntoDB
);

router.delete(
  '/:id',

  AcademicSemesterController.deleteByIdFromDB
);

export const academicSemesterRoutes = router;
