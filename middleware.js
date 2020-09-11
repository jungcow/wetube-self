import express from 'express';
import routes from './routes';
import multer from 'multer';

const multerVideo = multer({ dest: 'upload/video/' })

export const localMiddlewares = (req, res, next) => {
    res.locals.routes = routes;
    res.locals.user = {
        id: 1,
        isAuthenticated: true
    }
    next();
}

export const uploadVideo = multerVideo.single('videoFile');