import Player from 'griffith'
import React from 'react';

const testUrl = 'https://d50mxyhpwb8oh.cloudfront.net/test/Yeon2/jh+jh+jh.m3u8' 
const sources = {
    hd: {
      play_url: testUrl,
    },
    sd: {
      play_url: testUrl
    },
  }

export default function Griffith() {
        return(
            <div>
                <Player sources={sources} /> 
            </div>
            )
}

