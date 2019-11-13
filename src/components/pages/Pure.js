import React from 'react';

const TestUrl = 'https://d50mxyhpwb8oh.cloudfront.net/test/Yeon2/jh+jh+jh.m3u8' 
const TestProxyUrl = '/api/test/Yeon2/jh+jh+jh.m3u8'
const Mp4Url = "https://smrmembers-smr.smartmediarep.com/smc/smrmembers/single/eng/0/smr/contents/video/2019/09/23/9c045a87e800017024288980773f3e7b_t34.mp4"
const JWTestUrl = "https://content.jwplatform.com/manifests/yp34SRmf.m3u8"

;export default function Pure() {

    return (
        <div>
        <h1>Using video tag</h1>
        <h1>proxy</h1>
            <video id="myvideo" type="application/x-mpegURL" width="640" height="360"  src={TestProxyUrl} controls ></video>
            {/* <!-- m3u8 --> */}
            <h1>not proxy</h1>
            <video id="myvideo" type="application/x-mpegURL" width="640" height="360"  src={TestUrl} controls ></video>
            <h1>jw</h1>
            <video id="myvideo" type="application/x-mpegURL" width="640" height="360"  src={JWTestUrl} controls ></video>            <h1>mp4</h1>
            {/* <!-- mp4 링크 --> */}
            <video id="myVideo4" width="640" height="360" src={Mp4Url} controls ></video>       
        </div>
    )
}
