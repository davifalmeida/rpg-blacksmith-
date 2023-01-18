import { Router } from 'express';
import controllerOrders from '../controllers/orders.controller';

const router = Router();

router.get('/', controllerOrders.getAllOrders);

export default router;