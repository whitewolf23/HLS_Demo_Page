import React from 'react'
import ShakaPlayer from 'shaka-player-react';

const TestProxyUrl = '/api/test/Yeon2/jh+jh+jh.m3u8';
const TestUrl = 'https://d50mxyhpwb8oh.cloudfront.net/test/Yeon2/jh+jh+jh.m3u8';

const options = {
    width: {
        min: 640,
        max: 1024
      }
}
export default function Shaka() {
    return (
        <div className="nav">
        <h1>proxy</h1>
          <ShakaPlayer url={TestProxyUrl} options={options} /> 
        <h1>not proxy</h1>
          <ShakaPlayer url={TestUrl} options={options} /> 

        </div>
    )
}
