import express from 'express';

import productsRouter from './products.router';
import userRouter from './user.router';

const router = express();

router.use('/products', productsRouter);
router.use('/users', userRouter);

export default router;