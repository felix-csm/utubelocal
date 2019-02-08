import './VideoItem.css';
import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div></div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
            <iframe src={videoSrc} title="video" />
            </div>
            <div className="video-detail ui segment">
                <div className="ui header">{video.snippet.title}}</div>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;