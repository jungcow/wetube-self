import routes from '../routes';
import Video from '../models/Video';

export const home = async (req, res) => {
    const videos = await Video.find().sort({ _id: -1 });
    console.log(videos);
    if (videos) {
        res.render('home', { videos })
    } else {
        res.render('home', { title: 'Wetube', videos: [] });
    }
}

export const search = (req, res) => {
    const { query: { term: searchingBy } } = req;
    res.render('search', { title: '검색', searchingBy });
}

export const editVideo = (req, res) => {
    res.render('editVideo', { title: '비디오 정보 변경' });
}
export const deleteVideo = (req, res) => {
    res.render('deleteVideo', { title: '비디오 삭제' });
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
            description
        })
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
        const video = await Video.findById(id);
        console.log(video);
        res.render('videoDetail', { title: video.title, video });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }

}

