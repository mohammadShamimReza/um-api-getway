import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';
import { UserValidation } from './user.validations';

const router = express.Router();

router.post(
  '/create-student',
  // FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    // req.body = UserValidation.createStudent.parse(JSON.parse(req.body.data));
    return UserController.createStudent(req, res, next);
  }
);

router.post(
  '/create-faculty',

  // FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    // req.body = UserValidation.createFaculty.parse(JSON.parse(req.body.data));
    return UserController.createFaculty(req, res, next);
  }
);

router.post(
  '/create-admin',

  // FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    // req.body = UserValidation.createAdmin.parse(JSON.parse(req.body.data));
    return UserController.createAdmin(req, res, next);
  }
);

export const userRoutes = router;
