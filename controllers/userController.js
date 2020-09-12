import routes from '../routes';
import User from '../models/User';
import passport from 'passport';
// import express from 'express-s';

export const getJoin = (req, res) => {
    res.render('join', { title: '회원가입' });
}
export const postJoin = async (req, res, next) => {
    const { body: { name, email, password, password2 } } = req;
    if (password !== password2) {
        res.status(400);
        res.render('join', { title: '회원가입' });
    } else {
        try {
            const user = await new User({
                name,
                email
            });
            await User.register(user, password);
            next();
            //로그인처리
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
}

export const getLogin = (req, res) => {
    res.render('login', { title: '로그인' });
}
export const postLogin = passport.authenticate('local', {
    successRedirect: routes.home,
    failureRedirect: routes.login
});

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home);
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

