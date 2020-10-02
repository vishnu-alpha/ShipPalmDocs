import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
    render () {
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= '/video/test.mp4'
            width='100%'
            height='100%'
            controls = {true}

            />
        </div>
        )
    }
}

export default Video;