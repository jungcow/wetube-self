import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import session from 'express-session';
import routes from './routes';
import { globalRouter } from './router/globalRouter';
import { userRouter } from './router/userRouter';
import { videoRouter } from './router/videoRouter';
import { localMiddlewares } from './middleware';



dotenv.config();

const app = express();

app.set('view engine', 'pug');


app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SECRET
}));
app.use('/upload', express.static('upload'));

app.use(localMiddlewares);

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.video, videoRouter);


export default app;