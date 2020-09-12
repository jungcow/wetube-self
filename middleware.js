import express from 'express';
import routes from './routes';
import multer from 'multer';

const multerVideo = multer({ dest: 'upload/video/' })

export const localMiddlewares = (req, res, next) => {
    res.locals.routes = routes;
    res.locals.user = req.user || null;
    console.log(req.session);
    console.log(req.user);
    next();
}

export const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(403).send('로그인 필요');
    }
}
export const isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    } else {
        res.redirect(routes.home);
    }
}



export const uploadVideo = multerVideo.single('videoFile');