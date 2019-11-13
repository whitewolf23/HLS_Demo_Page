import React from 'react'
import ShakaPlayer from 'shaka-player-react';

const TestProxyUrl = '/api/test/Yeon2/jh+jh+jh.m3u8';
const TestUrl = 'https://d50mxyhpwb8oh.cloudfront.net/test/Yeon2/jh+jh+jh.m3u8';
const Mp4Url = "https://smrmembers-smr.smartmediarep.com/smc/smrmembers/single/eng/0/smr/contents/video/2019/09/23/9c045a87e800017024288980773f3e7b_t34.mp4"
const JWTestUrl = "https://content.jwplatform.com/manifests/yp34SRmf.m3u8"

const options = {
    width: {
        min: 640,
        max: 1024
      }
}
export default function Shaka() {
    return (

        <div className="nav">
        <h1>Shaka</h1>
        <h1>proxy</h1>
          <ShakaPlayer url={TestProxyUrl} options={options} /> 
        <h1>not proxy</h1>
          <ShakaPlayer url={TestUrl} options={options} /> 
          <h1>jw</h1>
          <ShakaPlayer url={JWTestUrl} options={options} /> 
          <h1>mp4</h1>
          <ShakaPlayer url={Mp4Url} options={options} /> 
        </div>
    )
}
