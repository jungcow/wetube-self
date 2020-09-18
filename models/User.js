import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    avatarUrl: String,
    githubId: Number,
    kakaoTalkId: Number,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    videos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        }
    ]
})

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model('User', UserSchema);

export default model;