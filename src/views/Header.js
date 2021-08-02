import React, { Component } from 'react';
import logo from '../logo.png';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import DemoCarousel from './demoCarousel';
import VideoCumple from './VideoCumple';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
        };
    } 

    render() {

        //const list = this.state.location === "list" ? "active" : "";
        const videoCumple = this.state.location === "videoCumple" ? "active" : "";
        //const post = this.state.location === "post" ? "active" : "";
        //const formk = this.state.location === "formk" ? "active" : "";
        const carousel = this.state.location === "carousel" ? "active" : "";
        //<Link className={post} to="PostItem" onClick={() => this.setState({location: 'post'})} >Post</Link> 
        
        if(carousel !== "active"){
            //Clear the carousel div on index.html page if the selected menu is anotherone
            ReactDOM.render(<div></div>, document.getElementById('carousel')); 
        }
        else{
            ReactDOM.render(<DemoCarousel/>, document.getElementById('carousel')); 
        }

        return (
            <div id='container' className="topnav">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" /> 
                    <h1 className="App-title">  Felices 40 amor mio!!!  </h1>
                </header>
                <Link className={carousel} to="Carousel" onClick={() => this.setState({location: 'carousel'})} >Carousel</Link>  
                <Link className={videoCumple} to="VideoCumple" onClick={() => this.setState({location: 'videoCumple'})} >Video</Link>     
            </div>
            
        )
    }
}