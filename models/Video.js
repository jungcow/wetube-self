import mongoose from 'mongoose';

const VideoSchema = mongoose.Schema({
    fileUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const model = mongoose.model('Video', VideoSchema);
export default model;