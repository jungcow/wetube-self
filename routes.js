//Global
const HOME = '/';
const SEARCH = '/search';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';

//User
const USER = '/users';
const USER_DETAIL = '/:id';
const EDIT_PROFILE = '/edit';
const CHANGE_PASSWORD = '/change-password';

//Video
const VIDEO = '/videos';
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
    userDetail: (id) => {
        if (id) {
            return `/users/${id}`
        } else {
            return USER_DETAIL
        }
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    video: VIDEO,
    upload: UPLOAD,
    videoDetail: (id) => {
        if (id) {
            return `/videos/${id}`
        } else {
            return VIDEO_DETAIL
        }
    },
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO
};

export default routes;