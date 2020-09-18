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
const ME = '/me';

//Video
const VIDEO = '/videos';
const UPLOAD = '/upload';
const VIDEO_DETAIL = '/:id';
const EDIT_VIDEO = '/:id/edit';
const DELETE_VIDEO = '/:id/delete';

//Github
const GH_LOGIN = '/auth/github';
const GH_CALLBACK = '/auth/github/callback';

//Kakao
const KAKAO_LOGIN = '/auth/kakao';
const KAKAO_CALLBACK = '/oauth';

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
    editVideo: (id) => {
        if (id) {
            return `/videos/${id}/edit`
        } else {
            return EDIT_VIDEO
        }
    },
    deleteVideo: (id) => {
        if (id) {
            return `/videos/${id}/delete`
        } else {
            return DELETE_VIDEO
        }
    },
    githubLogin: GH_LOGIN,
    githubCallback: GH_CALLBACK,
    me: ME,
    kakaoLogin: KAKAO_LOGIN,
    kakaoCallback: KAKAO_CALLBACK
};

export default routes;