import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthenticationController } from './auth.controller';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginZodSchema),
  AuthenticationController.loginUser
);
router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenZodSchema),
  AuthenticationController.refreshToken
);

router.post('/forgot-password', AuthenticationController.forgotPassword);
router.post('/reset-password', AuthenticationController.resetPassword);

router.post(
  '/change-password',

  validateRequest(AuthValidation.changePasswordZodSchema),
  AuthenticationController.changePassword
);

export const authRoutes = router;
