import React from 'react'
import HLSPlayer from 'react-hls';

export default function HLS() {

    const TestProxyUrl = '/api/test/Yeon2/jh+jh+jh.m3u8';
    const TestUrl = 'https://d50mxyhpwb8oh.cloudfront.net/test/Yeon2/jh+jh+jh.m3u8';
   
    return (
        <div>
            <h1>proxy</h1>
             <HLSPlayer url={TestProxyUrl} />

             <h1>not proxy</h1>
             <HLSPlayer url={TestUrl} />

        </div>
    )

   
}
