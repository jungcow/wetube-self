import express from 'express';
import routes from '../routes';
import { deleteVideo, videoDetail, getUpload, postUpload, postEditVideo, getEditVideo } from '../controllers/videoController';
import { uploadVideo, isLoggedIn } from '../middleware';

export const videoRouter = express.Router();

videoRouter.get(routes.upload, isLoggedIn, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.editVideo(), isLoggedIn, getEditVideo);
videoRouter.post(routes.editVideo(), isLoggedIn, postEditVideo);

videoRouter.get(routes.deleteVideo(), isLoggedIn, deleteVideo);

videoRouter.get(routes.videoDetail(), videoDetail);