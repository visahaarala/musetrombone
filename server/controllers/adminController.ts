import { NextFunction, Request, Response } from 'express';

const createAndSendToken = (statusCode: number, res: Response) => {
  // create token
  // add token to cookie
  // send response
  res.status(statusCode).json({
    status: 'success',
    data: { user: 'userdata object' },
  });
};

export const login = (req: Request, res: Response, next: NextFunction) => {
  // ... logic

  createAndSendToken(400, res);
};

export const sendNewPassword = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // ... logic

  res.status(400).json({ status: 'success', message: 'new password sent' });
};
