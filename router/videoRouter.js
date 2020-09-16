import express from 'express';
import routes from '../routes';
import { editVideo, deleteVideo, videoDetail, getUpload, postUpload } from '../controllers/videoController';
import { uploadVideo, isLoggedIn } from '../middleware';

export const videoRouter = express.Router();

videoRouter.get(routes.upload, isLoggedIn, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.editVideo, isLoggedIn, editVideo);
videoRouter.get(routes.deleteVideo, isLoggedIn, deleteVideo);
videoRouter.get(routes.videoDetail(), videoDetail);