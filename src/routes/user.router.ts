import { Router } from 'express';

import userController from '../controllers/user.controller';
import { usernameValidation,
  vocationValidation,
  levelValidation,
  passwordValidation, 
} from '../middlewares/user.middleware';

const router = Router();

router.post(
  '/', 
  usernameValidation,
  levelValidation,
  vocationValidation,
  passwordValidation,
  userController.createUser,
);

export default router;