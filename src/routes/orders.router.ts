import { Router } from 'express';
import controllerOrders from '../controllers/orders.controller';
import middlewareOrders from '../middlewares/orders.middlewares';
import { validateToken } from '../auth/validateToken';

const router = Router();

router.get('/', controllerOrders.getAllOrders);
router.post(
  '/',
  validateToken,
  middlewareOrders.validateOrder,
  controllerOrders.createOrder,
);

export default router;