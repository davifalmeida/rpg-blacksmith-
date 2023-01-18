import express from 'express';

import productsRouter from './products.router';

const router = express();

router.use('/products', productsRouter);

export default router;