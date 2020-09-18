import routes from '../routes';
import Video from '../models/Video';

export const home = async (req, res) => {
    const videos = await Video.find().sort({ _id: -1 });
    if (videos) {
        res.render('home', { videos })
    } else {
        res.render('home', { title: 'Wetube', videos: [] });
    }
}

export const search = async (req, res) => {
    const { query: { term: searchingBy } } = req;
    try {
        const videos = await Video.find({ title: { $regex: searchingBy, $options: "i" } }).populate('creator');
        res.render('search', { title: '검색', searchingBy, videos });
    } catch (error) {
        console.log(error);
    }
}

export const getEditVideo = async (req, res) => {
    const { params: { id } } = req;
    try {
        const video = await Video.findById(id);
        if (video.creator.toString() !== req.user.id) {
            throw Error();
        }
        res.render('editVideo', { title: '비디오 정보 변경', video })
    } catch (error) {
        res.status(400);
        res.redirect(routes.home);
    }
    ;
}
export const postEditVideo = async (req, res) => {
    const { params: { id }, body: { title, description } } = req;
    try {
        const video = await Video.findByIdAndUpdate(id, {
            title,
            description
        });
        console.log(video);
        res.redirect(routes.videoDetail(video.id));
    } catch (error) {
        res.status(400);
        res.redirect(routes.editVideo(video.id));
    }
    ;
}


export const deleteVideo = async (req, res) => {
    const { params: { id } } = req;
    try {
        const video = await Video.findById(id);
        if (video.creator.toString() !== req.user.id) {
            throw Error();
        } else {
            await Video.findOneAndRemove({ _id: id });
        }
    } catch (error) {
        console.log(error);
        res.status(400);
    }
    res.redirect(routes.home);

}


export const getUpload = (req, res) => {
    res.render('upload', { title: '업로드' });
}
export const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { path }
    } = req;
    try {
        const video = await Video.create({
            fileUrl: path,
            title,
            description,
            creator: req.user.id
        })
        console.log(video.id);
        req.user.videos.push(video.id);
        req.user.save();
        res.redirect(routes.videoDetail(video.id));
    } catch (error) {
        console.log(error);
        res.redirect(routes.getUpload);
    }
    res.render('upload', { title: '업로드' });
}
export const videoDetail = async (req, res) => {
    const { params: { id } } = req;
    try {
        const video = await Video.findById(id).populate('creator');
        res.render('videoDetail', { title: video.title, video });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }

}

