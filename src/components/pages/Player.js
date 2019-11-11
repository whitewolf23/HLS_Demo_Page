import React from 'react'
import ReactPlayer from 'react-player';


const testUrl = '' 

function Player(){
    return (
        <div>
         <ReactPlayer url={testUrl} controls={true} playing={true} pip={true} />
        </div>
    )
}

export default Player;