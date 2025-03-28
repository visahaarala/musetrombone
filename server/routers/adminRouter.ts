import express from 'express';
import { login } from '../controllers/adminController';

const adminRouter = express.Router();

adminRouter.post('/login', login);
adminRouter.post('/sendNewPassword', () => {});

export default adminRouter;
