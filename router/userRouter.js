import express from 'express';
import { editProfile, changePassword, userDetail } from '../controllers/userController';
import routes from '../routes';
import { isLoggedIn } from '../middleware';

export const userRouter = express.Router();

userRouter.get(routes.editProfile, isLoggedIn, editProfile);
userRouter.get(routes.changePassword, isLoggedIn, changePassword);
userRouter.get(routes.userDetail(), userDetail);