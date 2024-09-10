import React from 'react';
import PropTypes from "prop-types";

const VideoItem =({videoId, width, height})=> {
    return (
    <div className = "video-card" display="flex" flexDirection="column" justifyContent="center" alignItems="center" backgroundColor= "#95a2bc" borderRadius= "10px" paddingTop="20px">
        <iframe 
            src={`https://youtube.com/embed/${videoId}`} 
            allowFullScreen
            frameBorder = "0"
            allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title = "Embed Youtube"
            width = {`${width}`}
            height = {`${height}`} //can also use {props.height}
          />
    </div>
    )
};

VideoItem.propTypes = {
    embed: PropTypes.string.isRequired
};

export default VideoItem;