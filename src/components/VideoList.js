import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({items}) => {
    const videoItems = items.map((item)=>{
        return <VideoItem data={item} />;    
    });

    return (
        <div className="video-list ui segment">
        {videoItems}
        </div>
    );
}

export default VideoList;
