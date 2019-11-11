import Player from 'griffith'
import React from 'react';

const testUrl = '' 

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

