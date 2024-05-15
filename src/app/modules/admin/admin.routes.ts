import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AdminController } from './admin.controller';
import { AdminValidation } from './admin.validation';

const router = express.Router();

router.get('/', AdminController.getAllFromDB);
router.get('/:id', AdminController.getByIdFromDB);

router.patch(
  '/:id',
  validateRequest(AdminValidation.updateAdmin),

  AdminController.updateOneInDB
);

router.delete('/:id', AdminController.deleteByIdFromDB);

export const adminRoutes = router;
