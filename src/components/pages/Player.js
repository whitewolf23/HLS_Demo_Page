import React from 'react'
import ReactPlayer from 'react-player';

const TestProxyUrl = '/api/test/Yeon2/jh+jh+jh.m3u8';
const TestUrl = 'https://d50mxyhpwb8oh.cloudfront.net/test/Yeon2/jh+jh+jh.m3u8';

function Player(){
    return (
        <div>
            <h1>proxy</h1>
            <ReactPlayer url={TestProxyUrl} controls={true} playing={true} pip={true} />
            <h1>not proxy</h1>
            <ReactPlayer url={TestUrl} controls={true} playing={true} pip={true} />
       </div>
    )
}

export default Player;