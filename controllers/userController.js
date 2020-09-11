import routes from '../routes';

export const getJoin = (req, res) => {
    res.render('join', { title: '회원가입' });
}
export const postJoin = (req, res) => {
    const { body: { name, email, password, password2 } } = req;
    if (password !== password2) {
        res.status(400);
        //화면에 에러처리
        res.render('join', { title: '회원가입' });
    } else {
        //가입처리
        //로그인처리
        res.redirect(routes.home);
    }
}

export const getLogin = (req, res) => {
    res.render('login', { title: '로그인' });
}
export const postLogin = (req, res) => {
    const { body: { email, password } } = req;
    //passport로 사용자 인증 구현
    res.render('login', { title: '로그인' });
}

export const logout = (req, res) => {
    res.render('logout', { title: '로그아웃' });
}
export const editProfile = (req, res) => {
    res.render('editProfile', { title: '회원 정보 수정' });
}
export const changePassword = (req, res) => {
    res.render('changePassword', { title: '비밀번호 변경' });
}
export const userDetail = (req, res) => {
    res.render('userDetail', { title: '회원 상세 정보' });
}

