import { Router } from 'express';

import controllerLogin from '../controllers/login.controller';
import middlewareLogin from '../middlewares/login.middleware';

const router = Router();

router.post('/', middlewareLogin.validateLogin, controllerLogin.login);

export default router;