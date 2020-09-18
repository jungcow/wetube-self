import express from 'express';
import { userDetail, getEditProfile, postEditProfile, getChangePassword, postChangePassword } from '../controllers/userController';
import routes from '../routes';
import { isLoggedIn, uploadAvatar } from '../middleware';

export const userRouter = express.Router();

userRouter.get(routes.editProfile, isLoggedIn, getEditProfile);
userRouter.post(routes.editProfile, uploadAvatar, isLoggedIn, postEditProfile);

userRouter.get(routes.changePassword, isLoggedIn, getChangePassword);
userRouter.post(routes.changePassword, isLoggedIn, postChangePassword);

userRouter.get(routes.userDetail(), userDetail);