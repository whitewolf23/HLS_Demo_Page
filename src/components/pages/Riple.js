import React from 'react';
import { Replay } from 'vimond-replay';
import 'vimond-replay/index.css';
import HlsjsVideoStreamer from 'vimond-replay/video-streamer/hlsjs';
// import CompoundVideoStreamer from 'vimond-replay/video-streamer/compound';


const TestProxyUrl = '/api/test/Yeon2/jh+jh+jh.m3u8';
const TestUrl = 'https://d50mxyhpwb8oh.cloudfront.net/test/Yeon2/jh+jh+jh.m3u8';
const Mp4Url = "https://smrmembers-smr.smartmediarep.com/smc/smrmembers/single/eng/0/smr/contents/video/2019/09/23/9c045a87e800017024288980773f3e7b_t34.mp4"
const JWTestUrl = "https://content.jwplatform.com/manifests/yp34SRmf.m3u8"

const options = {
  responsivenessRules: [{
    className: 'narrow',
    width: {
      max: 640
    }
  }, {
    className: 'medium-width',
    width: {
      min: 640,
      max: 1024
    }
  }, {
    className: 'wide',
    width: {
      min: 1024
    }
  }],
}
export default function Riple() {
    return (
        <div className="nav">
          <h1>Replay</h1>

          <h1>proxy</h1>
         <Replay
          options = {options}
              source={{
                streamUrl: TestProxyUrl ,
                contentType: 'application/x-mpegurl',
                textTracks: [
                  {
                    src: 'public/example-media/subtitles/en.vtt',
                    kind: 'subtitles',
                    language: 'en',
                    label: 'English',
                    contentType: 'text/vtt',
                  },
                  {
                    src: 'public/example-media/subtitles/no.vtt',
                    kind: 'subtitles',
                    language: 'no',
                    label: 'Norwegian',
                    contentType: 'text/vtt',
                  },
                ],
              }}
        
        initialPlaybackProps={{ isPaused: true }}
        
     >
       <HlsjsVideoStreamer />
       {/* <CompoundVideoStreamer /> */}

        </Replay> 




      <h1>not proxy</h1>
          <Replay
          options = {options}
              source={{
                streamUrl: TestUrl ,
                contentType: 'application/x-mpegurl',
                textTracks: [
                  {
                    src: 'public/example-media/subtitles/en.vtt',
                    kind: 'subtitles',
                    language: 'en',
                    label: 'English',
                    contentType: 'text/vtt',
                  },
                  {
                    src: 'public/example-media/subtitles/no.vtt',
                    kind: 'subtitles',
                    language: 'no',
                    label: 'Norwegian',
                    contentType: 'text/vtt',
                  },
                ],
              }}
        
        initialPlaybackProps={{ isPaused: true }}
        
     >
       <HlsjsVideoStreamer />
       {/* <CompoundVideoStreamer /> */}

        </Replay> 


        <h1>jw</h1>
          <Replay
          options = {options}
              source={{
                streamUrl: JWTestUrl ,
                contentType: 'application/x-mpegurl',
                textTracks: [
                  {
                    src: 'public/example-media/subtitles/en.vtt',
                    kind: 'subtitles',
                    language: 'en',
                    label: 'English',
                    contentType: 'text/vtt',
                  },
                  {
                    src: 'public/example-media/subtitles/no.vtt',
                    kind: 'subtitles',
                    language: 'no',
                    label: 'Norwegian',
                    contentType: 'text/vtt',
                  },
                ],
              }}
        
        initialPlaybackProps={{ isPaused: true }}
        
     >
       <HlsjsVideoStreamer />
       {/* <CompoundVideoStreamer /> */}

        </Replay> 



        <h1>mp4</h1>
          <Replay
          options = {options}
              source={{
                streamUrl: Mp4Url ,
                // contentType: 'application/x-mpegurl',
                textTracks: [
                  {
                    src: 'public/example-media/subtitles/en.vtt',
                    kind: 'subtitles',
                    language: 'en',
                    label: 'English',
                    contentType: 'text/vtt',
                  },
                  {
                    src: 'public/example-media/subtitles/no.vtt',
                    kind: 'subtitles',
                    language: 'no',
                    label: 'Norwegian',
                    contentType: 'text/vtt',
                  },
                ],
              }}
        
        initialPlaybackProps={{ isPaused: true }}
        
     >
       <HlsjsVideoStreamer />
       {/* <CompoundVideoStreamer /> */}

        </Replay> 
        </div>
    )
}
