//Global
const HOME = '/';
const SEARCH = '/search';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';

//User
const USER = '/user';
const USER_DETAIL = '/:id';
const EDIT_PROFILE = '/edit';
const CHANGE_PASSWORD = '/change-password';

//Video
const VIDEO = '/video';
const UPLOAD = '/upload';
const VIDEO_DETAIL = '/:id';
const EDIT_VIDEO = '/:id/edit';
const DELETE_VIDEO = '/:id/delete';

const routes = {
    home: HOME,
    search: SEARCH,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    user: USER,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    video: VIDEO,
    upload: UPLOAD,
    videoDetail: VIDEO_DETAIL,
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO
};

export default routes;