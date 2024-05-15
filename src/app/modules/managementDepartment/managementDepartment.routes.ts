import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ManagementDepartmentController } from './managementDepartment.controller';
import { ManagementDepartmentValidation } from './managementDepartment.validations';

const router = express.Router();

router.get('/', ManagementDepartmentController.getAllFromDB);
router.get('/:id', ManagementDepartmentController.getByIdFromDB);

router.post(
  '/',
  validateRequest(ManagementDepartmentValidation.create),
  
  ManagementDepartmentController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(ManagementDepartmentValidation.update),
  
  ManagementDepartmentController.updateOneInDB
);

router.delete('/:id', ManagementDepartmentController.deleteByIdFromDB);

export const managementDepartmentRoutes = router;
