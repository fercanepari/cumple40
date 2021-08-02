import React from "react";
import { ReactAudio } from "reactjs-media";
import myVideo from '../media/VeoVeo.mp4'

export default class Audio extends Component {
    render() {
        return (
            <div>
                <ReactAudio
                    src={myVideo}
                    poster="/poster.png"
                    //you can pass in other props
                />
            </div>
            );
        }
    }
           
ReactDOM.render(<Audio />, document.getElementById('audio'));
