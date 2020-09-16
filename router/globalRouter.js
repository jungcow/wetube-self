import express from 'express';
import routes from '../routes';
import { home, search } from '../controllers/videoController';
import { logout, getJoin, postJoin, getLogin, postLogin, githubLogin, postGithubLogin, kakaoLogin, postKakaoLogin, getMe } from '../controllers/userController';
import { isLoggedIn, isNotLoggedIn } from '../middleware';
import passport from 'passport';

export const globalRouter = express.Router();

globalRouter.get(routes.join, isNotLoggedIn, getJoin);
globalRouter.post(routes.join, postJoin, postLogin, () => console.log(req.user));

globalRouter.get(routes.login, isNotLoggedIn, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.githubLogin, githubLogin);
globalRouter.get(routes.githubCallback,
    passport.authenticate('github', { failureRedirect: '/login' }),
    postGithubLogin
);

globalRouter.get(routes.kakaoLogin, kakaoLogin);
globalRouter.get(routes.kakaoCallback,
    passport.authenticate('kakao', { failureRedirect: '/login' }),
    postKakaoLogin
);



globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

globalRouter.get(routes.me, getMe);


