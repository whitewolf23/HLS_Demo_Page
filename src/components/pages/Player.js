import React from 'react'
import ReactPlayer from 'react-player';


const testUrl = 'https://d50mxyhpwb8oh.cloudfront.net/test/Yeon2/jh+jh+jh.m3u8' 
function Player(){
    return (
        <div>
         <ReactPlayer url={testUrl} controls={true} playing={true} pip={true} />
        </div>
    )
}

export default Player;