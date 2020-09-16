import passport from 'passport';
import GithubStrategy from 'passport-github';
import KakaoStrategy from 'passport-kakao';
import User from './models/User';
import { GihubCallbackLogin, KakaoCallbackLogin } from './controllers/userController';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

passport.use(User.createStrategy());

passport.use(new GithubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: `http://localhost:${process.env.PORT}${routes.githubCallback}`,
    scope: "user:email"
},
    GihubCallbackLogin
));

passport.use(new KakaoStrategy({
    clientID: process.env.KAKAO_ID,
    clientSecret: "",
    callbackURL: `http://localhost:${process.env.PORT}${routes.kakaoCallback}`
},
    KakaoCallbackLogin
));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());