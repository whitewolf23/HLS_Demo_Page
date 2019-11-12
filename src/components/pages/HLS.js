import React from 'react'
import HLSPlayer from 'react-hls';

export default function HLS() {

    const testUrl = 'https://d50mxyhpwb8oh.cloudfront.net/test/Yeon2/jh+jh+jh.m3u8' 

    return (
        <div>
             <HLSPlayer url={testUrl} />
        </div>
    )

   
}
