import mongoose from 'mongoose';

const CommentSchema = mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    text: {
        type: String,
        required: true
    }
})

const model = mongoose.model('Comment', CommentSchema);

export default model;