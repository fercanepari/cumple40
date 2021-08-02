import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './views/Header';
import DemoCarousel from './views/demoCarousel';
import VideoCumple from './views/VideoCumple';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div id='body'>
        <Header /> 
          <Route exact={true} path='/postItem' render={() => (
            <div className="App">
              <h3>test1</h3>
            </div>
          )}/>
          <Route exact={true} path='/Democarousel' render={() => (
            <div className="App">
              <DemoCarousel/>
            </div>
          )}/> 
          <Route exact={true} path='/VideoCumple' render={() => (
            <div className="App">
              <VideoCumple/>
            </div>
          )}/>         
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
