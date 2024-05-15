import express from 'express';
import { PaymentController } from './payment.controller';

const router = express.Router();

router.get('/', PaymentController.getAllFromDB);
router.get('/:id', PaymentController.getByIdFromDB);

router.post('/webhook', PaymentController.webhook);

export const paymentRoutes = router;
