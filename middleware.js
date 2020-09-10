import express from 'express';
import routes from './routes';

export const localMiddlewares = (req, res, next) => {
    res.locals.routes = routes
    next();
}