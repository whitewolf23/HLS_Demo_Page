import React from 'react'
import HLSPlayer from 'react-hls';

export default function HLS() {

    const TestProxyUrl = '/api/test/Yeon2/jh+jh+jh.m3u8';
    const TestUrl = 'https://d50mxyhpwb8oh.cloudfront.net/test/Yeon2/jh+jh+jh.m3u8';
    const Mp4Url = "https://smrmembers-smr.smartmediarep.com/smc/smrmembers/single/eng/0/smr/contents/video/2019/09/23/9c045a87e800017024288980773f3e7b_t34.mp4"
    const JWTestUrl = "https://content.jwplatform.com/manifests/yp34SRmf.m3u8"

    return (
        <div>
            <h1>HLS</h1>

            <h1>proxy</h1>
             <HLSPlayer url={TestProxyUrl} />

             <h1>not proxy</h1>
             <HLSPlayer url={TestUrl} />

             <h1>jw</h1>
             <HLSPlayer url={JWTestUrl} />

             <h1>mp4</h1>
             <HLSPlayer url={Mp4Url} />

        </div>
    )

   
}
