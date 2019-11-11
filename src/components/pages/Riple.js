import React from 'react';
import { Replay } from 'vimond-replay';
import 'vimond-replay/index.css';
import HlsjsVideoStreamer from 'vimond-replay/video-streamer/hlsjs';
// import CompoundVideoStreamer from 'vimond-replay/video-streamer/compound';


const testUrl = '' 
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
          <Replay
          options = {options}
              source={{
                streamUrl: testUrl ,
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
        </div>
    )
}
