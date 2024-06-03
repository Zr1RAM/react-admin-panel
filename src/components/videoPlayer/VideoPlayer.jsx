import React from 'react'
import YouTube from 'react-youtube';

const VideoPlayer = ({video}) => {
    // console.log(video);
  return (
    <>
    {video.includes("youtube") ? (<YouTube
        // className='trailerPlayer' 
        videoId={video.split("=")[1]}
            opts={{
            width: 525,
            height: 320,
            playerVars: {
                autoplay: 0,
                controls: 1,
                showinfo: 0,
                rel: 0,
            },
        }}
    />) : (
        <video 
            src={video} 
            autoPlay={false}
            controls
            style={{
                width: "525px",
                height: "320px",
            }}
        />
    )}
    </>
    
  )
}

export default VideoPlayer