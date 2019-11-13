import React, { Component } from 'react'
import Hls from 'hls.js';

export default class HlsPure extends Component {



    
  componentDidUpdate() {

    const Mp4Url = "https://smrmembers-smr.smartmediarep.com/smc/smrmembers/single/eng/0/smr/contents/video/2019/09/23/9c045a87e800017024288980773f3e7b_t34.mp4"

    if (Hls.isSupported() && this.player) {
      const video = this.player;
      const hls = new Hls({
        enableWorker: false
      });
      hls.loadSource(
        Mp4Url
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
            <h1>HLSPureMp4</h1> 
                <video
                    controls={true}
                    preload="none"
                    style={style}
                    ref={player => (this.player = player)}
                    // autoPlay={true}
                />
                
            </div>
           
        )
    }
}
