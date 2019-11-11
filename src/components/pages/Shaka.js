import React from 'react'
import ShakaPlayer from 'shaka-player-react';

const testUrl = '' 
const options = {
    width: {
        min: 640,
        max: 1024
      }
}
export default function Shaka() {
    return (
        <div className="nav">
          <ShakaPlayer url={testUrl} options={options} /> 
        </div>
    )
}
