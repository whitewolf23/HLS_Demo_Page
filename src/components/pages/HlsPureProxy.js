import React, { Component } from 'react'
import Hls from 'hls.js';

export default class HlsPure extends Component {



    
  componentDidUpdate() {
    const TestProxyUrl = '/api/test/Yeon2/jh+jh+jh.m3u8';
    // const TestUrl = 'https://d50mxyhpwb8oh.cloudfront.net/test/Yeon2/jh+jh+jh.m3u8';

    if (Hls.isSupported() && this.player) {
      const video = this.player;
      const hls = new Hls({
        enableWorker: false
      });
      hls.loadSource(
        TestProxyUrl
      );
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, async () => {
       await video.play();
      });
    }
  }



    render() {
        const style = {
            width: 640,
            height: 360,
            background: '#000',
        }
        return (
          <div>
              <h1>HLSPureProxy</h1> 

            <video
                controls={true}
                preload="none"
                style={style}
                ref={player => (this.player = player)}
                autoPlay={true}
            />
          </div>
            
        )
    }
}
