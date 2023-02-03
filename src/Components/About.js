import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="row" id="about">
         <div className="col-md-4 p-0 col-sm-4 col-lg-4 col-xs-4">
            <div className="sec2-left-bg">
            <div className="text">
               <h1  className="text-center">WHO <br/>WE<br/>ARE</h1>
               </div>
               
               <h2 className="text-center">About our<br/> company</h2>
            </div>
            </div>
        
         <div className="col-md-8 p-0 col-sm-8 col-lg-8 col-xs-8">
            <div className="itembox2">
               <h2>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus</h2>
                {/* <div class="embed-responsive embed-responsive-16by9"></div>
                  <iframe width="800" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY" frameborder="0" allowfullscreen>
                  </iframe> */}
                
               <div className="embed-responsive embed-responsive-16by9"> 
                  <iframe  title="myFrame" width="100%" height="350" src="https://www.youtube.com/embed/tgbNymZ7vqY" 
                     frameborder="0" allowfullscreen></iframe>
               </div>
            </div>
         </div>
      </div>
     
      
        )
    }
}
