import { Router } from 'express';

import productsController from '../controllers/products.controller';
import productsMiddleware from '../middlewares/products.middleware';

const router = Router();

router.post(
  '/', 
  productsMiddleware.nameValidation,
  productsMiddleware.amountValidation,
  productsController.createProducts,
);
router.get('/', productsController.getAllProducts);

export default router;