import express from 'express';
import routes from '../routes';
import { editVideo, deleteVideo, videoDetail, upload } from '../controllers/videoController';

export const videoRouter = express.Router();

videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);