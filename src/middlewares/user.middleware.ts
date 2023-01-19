import { NextFunction, Request, Response } from 'express';

// class ValidationError extends Error {
//   status: number;

//   message: string;

//   constructor(status: number, message: string) {
//     super(message);
//     this.status = status;
//     this.message = message;
//   }
// }

// const usernameValidation = async (req: Request, res: Response, next: NextFunction) => {
//   const { username } = req.body;
//   if (!username) return next(new ValidationError(400, '"username" is required'));
//   if (username.length < 3) {
//     return next(new ValidationError(422, '"username" length must be at least 3 characters long'));
//   }
//   if (typeof username !== 'string') {
//     return next(new ValidationError(422, '"username" must be a string'));
//   }
//   next();
// };

// const vocationValidation = async (req: Request, res: Response, next: NextFunction) => {
//   const { vocation } = req.body;
//   if (!vocation) return next(new ValidationError(400, '"vocation" is required'));
//   if (vocation.length < 3) {
//     return next(new ValidationError(422, '"vocation" length must be at least 3 characters long'));
//   }
//   if (typeof vocation !== 'string') {
//     return next(new ValidationError(422, '"vocation" must be a string'));
//   }
//   next();
// };

// const levelValidation = async (req: Request, res: Response, next: NextFunction) => {
//   const { level } = req.body;
//   if (!level) return next(new ValidationError(400, '"level" is required'));
//   if (level.length < 3) {
//     return next(new ValidationError(422, '"level" length must be at least 3 characters long'));
//   }
//   if (typeof level !== 'string') {
//     return next(new ValidationError(422, '"level" must be a string'));
//   }
//   next();
// };

// const passwordValidation = async (req: Request, res: Response, next: NextFunction) => {
//   const { password } = req.body;
//   if (!password) return next(new ValidationError(400, '"password" is required'));
//   if (password.length < 3) {
//     return next(new ValidationError(422, '"password" length must be at least 3 characters long'));
//   }
//   if (typeof password !== 'string') {
//     return next(new ValidationError(422, '"password" must be a string'));
//   }
//   next();
// };

export const usernameValidation = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ message: '"username" is required' });
  if (typeof username !== 'string') {
    return res.status(422).json({ message: '"username" must be a string' });
  }
  if (username.length < 3) {
    return res.status(422).json({
      message: '"username" length must be at least 3 characters long' });
  }
  next();
};

export const vocationValidation = (req: Request, res: Response, next: NextFunction) => {
  const { vocation } = req.body;
  if (!vocation) return res.status(400).json({ message: '"vocation" is required' });
  if (typeof vocation !== 'string') {
    return res.status(422).json({ message: '"vocation" must be a string' });
  }
  if (vocation.length < 3) {
    return res.status(422).json({
      message: '"vocation" length must be at least 3 characters long' });
  }
  next();
};

export const levelValidation = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (level <= 0) {
    return res.status(422).json({ message: '"level" must be greater than or equal to 1' });
    console.log(level);
  }
  if (!level) return res.status(400).json({ message: '"level" is required' });
  console.log(level);
  if (typeof level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
    console.log(level);
  }
  next();
};
  
export const passwordValidation = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ message: '"password" is required' });
  if (typeof password !== 'string') {
    return res.status(422).json({ message: '"password" must be a string' });
  }
  if (password.length < 8) {
    return res.status(422).json({
      message: '"password" length must be at least 8 characters long' });
  }
  next();
};
  
// const validateUser = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     await usernameValidation(req, res, next);
//     await vocationValidation(req, res, next);
//     await levelValidation(req, res, next);
//     await passwordValidation(req, res, next);
//     next();
//   } catch (error) {
//     if (error instanceof ValidationError) {
//       return res.status(error.status).json({ message: error.message });
//     }
//     next(error);
//   }
// };

// export default {
//   validateUser,
// };