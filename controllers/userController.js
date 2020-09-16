import routes from '../routes';
import User from '../models/User';
import passport from 'passport';

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

export const githubLogin = passport.authenticate('github');

export const kakaoLogin = passport.authenticate('kakao');

export const postGithubLogin = (req, res) => {
    res.redirect(routes.home);
}
export const postKakaoLogin = (req, res) => {
    res.redirect(routes.home);
}

export const GihubCallbackLogin = async (accessToken, refreshToken, profile, cb) => {
    console.log(profile._json);
    const { _json: { id, avatar_url, login: name } } = profile;
    let { _json: { email } } = profile;
    if (!email) {
        const { value: privateEmail } = profile.emails.filter((email) => email.primary)[0];
        email = privateEmail;
    }
    try {
        const user = await User.findOne({ email });
        if (user) {
            if (!user.avatarUrl) {
                user.avatarUrl = avatar_url;
            }
            user.githubId = id;
            user.save();
            return cb(null, user);
        }
        const newUser = await User.create({
            name,
            email,
            avatarUrl: avatar_url,
            githubId: id
        });
        return cb(null, newUser);
    } catch (error) {
        return cb(error);
    }
}

export const KakaoCallbackLogin = async (accessToken, refreshToken, profile, cb) => {
    const { _json: { id, properties: { nickname: name } } } = profile;
    const { _json: { kakao_account: { email } } } = profile;
    console.log(email);
    try {
        const user = await User.findOne({ email });
        if (user) {
            user.kakaoTalkId = id;
            user.save();
            return cb(null, user);
        }
        const newUser = await User.create({
            name,
            email,
            kakaoTalkId: id
        })
        return cb(null, newUser);
    } catch (error) {
        return cb(error);
    }
}

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
export const userDetail = async (req, res) => {
    const { params: { id } } = req;
    const user = await User.findById(id);
    res.render('userDetail', { title: '회원 상세 정보', user });
}

export const getMe = (req, res) => {
    res.render('userDetail', { title: '내 프로필', user: req.user });
}
