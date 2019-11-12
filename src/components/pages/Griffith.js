import Player from 'griffith'
import React from 'react';

const TestProxyUrl = '/api/test/Yeon2/jh+jh+jh.m3u8';
const TestUrl = 'https://d50mxyhpwb8oh.cloudfront.net/test/Yeon2/jh+jh+jh.m3u8';


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

export default function Griffith() {
        return(
            <div>
                <h1>proxy</h1>
                <Player sources={sources_proxy} /> 
                <h1>not proxy</h1>
                <Player sources={sources} /> 
            </div>
            )
}

