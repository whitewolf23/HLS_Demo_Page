import React from 'react'
import ReactPlayer from 'react-player';

const TestProxyUrl = '/api/test/Yeon2/jh+jh+jh.m3u8';
const TestUrl = 'https://d50mxyhpwb8oh.cloudfront.net/test/Yeon2/jh+jh+jh.m3u8';
const Mp4Url = "https://smrmembers-smr.smartmediarep.com/smc/smrmembers/single/eng/0/smr/contents/video/2019/09/23/9c045a87e800017024288980773f3e7b_t34.mp4"

function Player(){
    return (
        <div>
            <h1>ReactPlayer</h1>

            <h1>proxy</h1>
            <ReactPlayer url={TestProxyUrl} controls={true} playing={true} pip={true} />
            <h1>not proxy</h1>
            <ReactPlayer url={TestUrl} controls={true} playing={true} pip={true} />
            <h1>mp4</h1>
            <ReactPlayer url={Mp4Url} controls={true} playing={true} pip={true} />
       </div>
    )
}

export default Player;