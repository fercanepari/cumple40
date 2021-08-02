import React, { Component } from 'react';
import { ReactVideo } from "reactjs-media";
import myVideo from '../media/VideoCumpleOk.mp4'

export default class VideoCumple extends Component {
    
    render () {
    return (
      <div>
            <div>
                <ReactVideo
                    src={myVideo}
                    poster="../media/poster.png"            
                />
            </div>
      </div>  
      );
    }
 }