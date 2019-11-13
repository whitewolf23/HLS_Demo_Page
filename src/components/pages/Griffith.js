import Player from 'griffith'
import React from 'react';

const TestProxyUrl = '/api/test/Yeon2/jh+jh+jh.m3u8';
const TestUrl = 'https://d50mxyhpwb8oh.cloudfront.net/test/Yeon2/jh+jh+jh.m3u8';
const Mp4Url = "https://smrmembers-smr.smartmediarep.com/smc/smrmembers/single/eng/0/smr/contents/video/2019/09/23/9c045a87e800017024288980773f3e7b_t34.mp4"
const JWTestUrl = "https://content.jwplatform.com/manifests/yp34SRmf.m3u8"

const sources_jw = {
    hd: {
      play_url: JWTestUrl,
    },
    sd: {
      play_url: JWTestUrl
    },
  }

const sources_proxy = {
    hd: {
      play_url: TestProxyUrl,
    },
    sd: {
      play_url: TestProxyUrl
    },
  }

const sources = {
    hd: {
      play_url: TestUrl,
    },
    sd: {
      play_url: TestUrl
    },
  }

  const mp4sources = {
    hd: {
      play_url: Mp4Url,
    },
    sd: {
      play_url: Mp4Url
    },
  }

export default function Griffith() {
        return(
            <div>
                <h1>Griffith</h1>

                <h1>proxy</h1>
                <Player sources={sources_proxy} /> 
                <h1>not proxy</h1>
                <Player sources={sources} /> 
                <h1>js</h1>
                <Player sources={sources_jw} /> 
                <h1>mp4</h1>
                <Player sources={mp4sources} /> 
            </div>
            )
}

