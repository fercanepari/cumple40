import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import jesiImg from '../media/jesi.jpg'
import jesiImg2 from '../media/jesiFer.jpg'
import jesiImg3 from '../media/jesiFerSofi.jpg'
import jesiImg4 from '../media/jesiFerSofi2.jpg'
import jesiImg5 from '../media/jFSV.jpg'
import jesiImg6 from '../media/ACESTUDIO1.jpg'
import jesiImg7 from '../media/ACESTUDIO2.jpg'


export default class DemoCarousel extends Component {
    render() {
        return (
            <div>
                
            <Carousel autoPlay interval={40000} infiniteLoop showThumbs={false}>
                <div>
                    <img src={jesiImg} alt="" />
                    <p className="legend">...</p>
                </div>
                <div>
                    <img src={jesiImg2} alt="" />
                    <p className="legend">...</p>
                </div>
                <div>
                    <img src={jesiImg3} alt="" />
                    <p className="legend">...</p>
                </div>
                <div>
                    <img src={jesiImg4} alt="" />
                    <p className="legend">...</p>
                </div>
                <div>
                    <img src={jesiImg5} alt="" />
                    <p className="legend">...</p>
                </div>
                <div>
                    <img src={jesiImg6} alt="" />
                    <p className="legend">...</p>
                </div>
                <div>
                    <img src={jesiImg7} alt="" />
                    <p className="legend">...</p>
                </div>
            </Carousel>
            </div>
        );
    }
}
   
ReactDOM.render(<DemoCarousel />, document.getElementById('carousel'));