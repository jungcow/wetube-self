import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import session from 'express-session';
import passport from 'passport';
import routes from './routes';
import { globalRouter } from './router/globalRouter';
import { userRouter } from './router/userRouter';
import { videoRouter } from './router/videoRouter';
import { localMiddlewares } from './middleware';
dotenv.config();

import './passport';


const app = express();

const CookieStore = MongoStore(session);

app.use(helmet({ contentSecurityPolicy: false }));
app.set('view engine', 'pug');
app.use('/upload', express.static('upload'));
app.use('/static', express.static('static'));

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(localMiddlewares);

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.video, videoRouter);


export default app;