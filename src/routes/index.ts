import express from 'express';

import productsRouter from './products.router';
import userRouter from './user.router';
import orderRouter from './orders.router';

const router = express();

router.use('/products', productsRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);

export default router;